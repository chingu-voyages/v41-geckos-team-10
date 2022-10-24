const express = require("express");
const session = require("express-session");
const passport = require("passport");
const cors = require("cors");
const routes = require("./backend/routes/index");
const bodyParser = require("body-parser");

//https://www.section.io/engineering-education/how-to-setup-nodejs-express-for-react/

const app = express();

const path = require("path");

// Serve static files from the React app
//You will need to serve the static files from the React app in production.
/*app.use(express.static(path.join(__dirname, 'build'))); //this is the path to the build folder
app.get('/', function (req, res) {  //this is the path to the build folder, main entry point shows landing page
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
}); */


//Backend Root Route. If you see this In the browser, you know the server is running
app.get('/', (req, res) => { 
  res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' });
});

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true }));

//setup cors to allow us to accept requests from our client
app.use(
  cors({
    origin: "*", // allow to server to accept request from different origin
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true, // allow session cookie from browser to pass through
  })
);


//Give accces to the dotenv file to get the environment variables access the variables using process.env.VARIABLE_NAME
require("dotenv").config();

// Express Session
app.use(
  session({
    secret: process.env.SECRET_KEY, // Change this to your own secret in the environment variables
    resave: true,
    saveUninitialized: true,
    cookie: {
      //Sends the cookie in every request header and the cookie is given to the browser
      maxAge: 1000 * 60 * 60 * 24, // 24 hours expiry
    },
  })
);

//Passport Authentication
require("./backend/config/passport"); //Passport configuration
//need to realize the passport middleware if a user refreshes the page or closes the browser and opens it again
app.use(passport.initialize()); //initialize passport
app.use(passport.session()); //use passport to manage the session

//Custom middleware for bug fixing
app.use((req, res, next) => {
    console.log(req.session);
    console.log(req.user);
    next();
});

//Routes for the application are defined in the routes folder in the index.js file
app.use(routes);

app.listen(4000, () => {
  console.log("Server is running on port 4000");
});
