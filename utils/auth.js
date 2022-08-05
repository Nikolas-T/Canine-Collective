const withAuth = (req, res, next) => {
  // If the user is not logged in, redirect the request to the login route test
  if (!req.session.logged_in) {
    res.redirect('/login');
  } else {
    next();
  }
};

module.exports = withAuth;
