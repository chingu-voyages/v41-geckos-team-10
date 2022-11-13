const mongoose = require('mongoose');

const Schema = mongoose.Schema;
let profileSchema = new Schema({
    firstName: {
        type: String
    },
    lastName: {
        type: String
    },
    email: {
        type: String
    },
    weeklyAppGoal: {
        type: Number
    },
})

const Profile = mongoose.model('Profile', profileSchema);
module.exports = Profile;