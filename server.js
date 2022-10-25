const express = require("express");
const session = require("express-session");
const passport = require("passport");
const cors = require("cors");
const routes = require("./backend/routes/index");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const connectDb = require("./backend/config/database");
const passportConfig = require("./backend/config/passport");
const MongoStore = require("connect-mongo");

//https://www.section.io/engineering-education/how-to-setup-nodejs-express-for-react/

connectDb();

const app = express();

//Backend Root Route. If you see this In the browser, you know the server is running
app.get('/', (req, res) => { 
  res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' });
});

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true }));

//setup cors to allow us to accept requests from our client
app.use(
  cors({
    origin: "http://localhost:3000" , // allow to server to accept request from different origin
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true, // allow session cookie from browser to pass through
  })
);

//Give accces to the dotenv file to get the environment variables access the variables using process.env.VARIABLE_NAME
require("dotenv").config();

app.use(cookieParser());

app.use(
  session({
    secret: process.env.SECRET_KEY,
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({ mongoUrl: process.env.DB_PASSWORD }),
    cookie: {
      maxAge: 1000 * 60 * 60 * 24, // 24 hours
    },
  })
);

//Passport Authentication
//need to realize the passport middleware if a user refreshes the page or closes the browser and opens it again
app.use(passport.initialize()); //initialize passport
app.use(passport.session()); //use passport to manage the session

//Custom middleware for bug fixing
app.use((req, res, next) => {
    console.log(req.session);
    next();
});

//Routes for the application are defined in the routes folder in the index.js file
app.use(routes);

app.listen(4000, () => {
  console.log("Server is running on port 4000");
});
