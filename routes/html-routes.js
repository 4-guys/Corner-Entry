var path = require('path');

var isAuthenticated = require("../config/middleware/isAuthenticated");
var isAuthenticatedAdmin = require("../config/middleware/isAuthenticatedAdmin");

module.exports = function (app) {
    app.get("/", function (req, res) {
        // If the user already has an account send them to the members page
        if (req.user) {
            res.redirect("/members");
        }
        res.sendFile(path.join(__dirname, "../views/layouts/index.html"));
    });

    app.get("/userSignup", function (req, res) {

        res.sendFile(path.join(__dirname, "../public/assets/userSignup.html"));
    });

    app.get("/signup", function (req, res) {
        // If the user already has an account send them to the users page
        if (req.user) {
            res.redirect("/members");
        }
        res.sendFile(path.join(__dirname, "../public/assets/signup.html"));
    });

    app.get("/login", function (req, res) {
        // If the user already has an account send them to the users page
        if (req.user) {
            res.redirect("/members");
        }
        res.sendFile(path.join(__dirname, "../public/assets/login.html"));
    });


    // Here we've add our isAuthenticated middleware to this route.
    // If a user who is not logged in tries to access this route they will be redirected to the signup page
    app.get("/members",isAuthenticated, function (req, res) {
        console.log("you're sign in");
        res.sendFile(path.join(__dirname, "../public/assets/members.html"));
    });
    app.get("/admin", isAuthenticatedAdmin, function(req, res) {
        res.sendFile(path.join(__dirname, "../views/admin.html"));
    });
    
}