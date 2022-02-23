// middleware utility which checks if users are logged in and authenticates them 
// (also redirecting them away from the login page automatically)

const withAuth = (req, res, next) => {
    if (!req.session.user_id) {
        res.redirect('/login');
    } else {
        next();
    }
};
  
module.exports = withAuth;