const Profile = require("../models/profileModel");
const User = require("../models/userModel");

//@desc Get all jobs
//@route GET /jobs
//@access Private
const getProfile = async (req, res) => {
  console.log(req.user);
  try {
    const profiles = await Profile.find({ user: req.user._id });
    res.status(200).send(profiles);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};



//@desc Create a job
//@route POST /jobs
//@access Private
const getProfileById = async (req, res) => {
    try {
      const profile = await Profile.findById(req.params.id);
      res.status(200).send(profile);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };

const createProfile = async (req, res) => {
  const {
    firstName,
    lastName,
    email,
    weeklyAppGoal,
  } = req.body;

  try {
    const newProfile = new Profile({
      user: req.user._id,
      fistName: firstName,
      lastName: lastName,
      email: email,
      weeklyAppGoal: weeklyAppGoal,
    });

    const profile = await newProfile.save();
    res.status(200).send("Profile has been tracked");
  } catch (err) {
    res.status(404).send("Error creating profile");
  }
};

//@desc Update a job
//@route PUT /jobs:id
//@access Private
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


    // if (Job.user.toString() !== req.user._id.toString()) {
    //   res.status(401).json({ message: "Not authorized" });
    // }

    const updatedProfile = await Profile.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).send(`Profile ${updatedProfile.firstName} has been updated`);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

//@desc Update a job
//@route Delete /jobs:id
//@access Private
const deleteProfile = async (req, res) => {
  try {
    const profile = await Profile.findById(req.params.id);
    if (!profile) {
      res.status(400).json({ message: "Profile not found" });
    }
    await Profile.findByIdAndDelete(req.params.id);
    res.status(200).send(`Profile has been deleted`);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  getProfile,
  getProfileById,
  createProfile,
  updateProfile,
  deleteProfile,
};
