const crypto = require("crypto");

//2 steps to create a password
//1. Generate a salt
//2. Hash the password with the salt

//Create the same hash with the salt and the password the user entered
//Compare the hash with the hash in the database
function validPassword(password, hash, salt) {
  const hashVerify = crypto
    .pbkdf2Sync(password, salt, 10000, 64, "sha512")
    .toString("hex");
  return hash === hashVerify;
}

//This function will generate a salt and hash the password when a user registers
function genPassword(password) {
    const salt = crypto.randomBytes(32).toString("hex");
    const genHash = crypto
        .pbkdf2Sync(password, salt, 10000, 64, "sha512")
        .toString("hex");
    return {
        salt: salt,
        hash: genHash,
    };
    }

module.exports.validPassword = validPassword;
module.exports.genPassword = genPassword;