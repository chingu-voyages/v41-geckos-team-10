const passwordUtil = require("../lib/passwordUtil");
const passport = require("passport");
const User = require("../models/userModel");
const Profile = require("../models/profileModel");

const CLIENT_URL = "http://localhost:3000/";

//@desc Register a user
//@route Post /register
//@access Public
const registerUser = (req, res) => {
  const { email, password } = req.body;
  const { hash, salt } = passwordUtil.genPassword(password);

  User.findOne({ email: email }, (err, user) => {
    if (err) {
      console.log(err);
    } else if (user) {
      res.status(409);
    } else {
      const newUser = new User({
        email: email,
        hash: hash,
        salt: salt,
      });

      newUser
        .save()
        .then((user) => console.log(user))
        .catch((err) => console.log(err));

      res.send("Success! Please login");
    }
  });
};

const profileUser = (req, res) => {
  const { email, firstName, lastName, weeklyAppGoal } = req.body;

  Profile.findOne({ email: email, firstName: firstName, lastName: lastName, weeklyAppGoal: weeklyAppGoal }, (err, profile) => {
    if (err) {
      console.log(err);
    } else if (profile) {
      res.status(409);
    } else {
      const newProfile = new Profile({
        email: email,
        firstName: firstName,
        lastName: lastName,
        weeklyAppGoal: weeklyAppGoal
      });

      newProfile
        .save()
        .then((profile) => console.log(profile))
        .catch((err) => console.log(err));

      res.send("Success! New Profile Created");
    }
  });
};


const getProfileById = async (req, res) => {
  try {
    const profile = await Profile.findById(req.params.id);
    res.status(200).send(profile);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const updateProfile = async (req, res) => {
  try {
    const profile = await Profile.findById(req.params.id);
    if (!profile) {
      res.status(400).json({ message: "Profile not found" });
    }

    const user = await User.findById(req.user._id);

    if (!user) {
      res.status(401).json({ message: "User not found" });
    }

    const updatedProfile = await Profile.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).send(`Profile ${updatedProfile.firstName} has been updated`);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

//@Login with passport
//@route POST /login
//@access Public
const loginUser = (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    if (err) throw err;
    if (!user) res.status(401).send("No user exists");
    else {
      req.logIn(user, (err) => {
        if (err) throw err;
        res.send({ email: user.email, id: user._id });
      });
    }
  })(req, res, next);
};

//@desc dashboard data
//@route GET /dashboard
//@access Private
const getUser = (req, res) => {
  const reqUser = { email: req.user.email, id: req.user._id };
  res.send(reqUser);
};

// const getProfile = (req, res) => {
//   const reqProfile = { email: req.profiles.email, firstName: req.firstName, lastName: req.lastName, weeklyAppGoal: req.weeklyAppGoal }; 
//   res.send(reqProfile);
// };

const getProfile = async (req, res) => {
  console.log(req.user);
  try {
    const profiles = await Profile.find({ user: req.user._id });
    res.status(200).send(profiles);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


//@desc Logout
//@route GET /logout
//@access Public
const logoutUser = (req, res, next) => {
  req.session.destroy((err) => {
    if (err) {
      return next(err);
    }
    res.clearCookie("connect.sid", { path: "/" }).status(200).send("Ok.");
  });
};

module.exports = {
  registerUser,
  profileUser,
  loginUser,
  logoutUser,
  getUser,
  getProfile,
  updateProfile,
  getProfileById,
};
