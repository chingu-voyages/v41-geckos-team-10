module.exports.isAuth = (req, res, next) => {
  if (req.isAuthenticated()) { // if user is logged in
    return next(); // allow the next route to run
  } else {
    res.send("You must be logged in to view this page");
  }
};

module.exports.isAdmin = (req, res, next) => {
  if (req.isAuthenticated() && req.user.admin) {    // if user is logged in and is admin
    return next();
  } else {
    res.redirect("/login");
  }
};
