const mongoose = require('mongoose');

const Schema = mongoose.Schema;
let profileSchema = new Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId, //create a reference to the user
        required: true, //make sure the user is logged in
        ref: "User", //reference the user model
    },
    firstName: {
        type: String
    },
    lastName: {
        type: String
    },
    weeklyAppGoal: {
        type: Number
    },
})

const Profile = mongoose.model('Profile', profileSchema);
module.exports = Profile;