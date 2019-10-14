var path = require('path');
var passport= require('passport')
var passportSetup= require('../config/passport')
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
    app.get("/auth/google", passport.authenticate('google',{
        scope: ["profile"]

    }));
    //google redirects to
    app.get("/auth/google/redirect",passport.authenticate('google'), function(req,res){
        res.redirect("/members");
    })


    app.get("/auth/login", function (req, res) {
        // HANDLE WITH PASSPORT

        res.send("logging out");
    });

    app.get("/auth/logout", function (req, res) {
        // If the user already has an account send them to the users page
        if (req.user) {
            res.redirect("/members");
        }
        res.sendFile(path.join(__dirname, "../public/assets/googleLogin.html"));
    });
// // Here we've add our isAuthenticated middleware to this route.
    // // If a user who is not logged in tries to access this route they will be redirected to the signup page
    // app.get("/members",isAuthenticated, function (req, res) {
    //     console.log("you're sign in");
    //     res.sendFile(path.join(__dirname, "../views/layouts/events.html"));
    // });
    // app.get("/admin", isAuthenticatedAdmin, function(req, res) {
    //     res.sendFile(path.join(__dirname, "../public/assets/eventadd.html"));
    // });
    
}