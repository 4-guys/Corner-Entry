var path = require('path');

var isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function (app) {

    app.get("/signup", function (req, res) {
        // If the user already has an account send them to the users page
        if (req.user) {
            res.redirect("/users");
        }
        res.sendFile(path.join(__dirname, "../public/signup.html"));
    });

    app.get("/login", function (req, res) {
        // If the user already has an account send them to the users page
        if (req.user) {
            res.redirect("/users");
        }
        res.sendFile(path.join(__dirname, "../public/login.html"));
    });

    // Here we've add our isAuthenticated middleware to this route.
    // If a user who is not logged in tries to access this route they will be redirected to the signup page
    app.get("/users", isAuthenticated, function (req, res) {
        res.sendFile(path.join(__dirname, "../public/users.html"));
    });
}