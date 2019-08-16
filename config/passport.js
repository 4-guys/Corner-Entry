var passport = require("passport");
var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const keys = require("./keys")
var LocalStrategy = require("passport-local").Strategy;
var db = require("../models");
// // Telling passport we want to use a Local Strategy. In other words, we want login with a username/email and password
// passport.use(new LocalStrategy(
//     // Our user will sign in using an email, rather than a "username"
//     {
//         usernameField: "email"
//     },
//     function (email, password, done) {
//         // When a user tries to sign in this code runs
//         db.User.findOne({
//             where: {
//                 email: email
//             }
//         }).then(function (dbUser) {
//             console.log("no error");
//             // If there's no user with the given email
//             if (!dbUser) {
//                 console.log("incorrect user");
//                 return done(null, false, {
//                     message: "Incorrect email."
//                 });
//             }
//             // If there is a user with the given email, but the password the user gives us is incorrect
//             else if (!dbUser.validPassword(password)) {
//                 console.log("incorrect password");
//                 return done(null, false, {
//                     message: "Incorrect password."
//                 });
//             }
//             // If none of the above, return the user
//             console.log("correct everything");
//             return done(null, dbUser);
//         }).catch(function (err) {
//             console.log(err);
//         });
//     }
// ));

//Google Passport Trials
// Use the GoogleStrategy within Passport.
//   Strategies in Passport require a `verify` function, which accept
//   credentials (in this case, an accessToken, refreshToken, and Google
//   profile), and invoke a callback with a user object.
passport.use(new GoogleStrategy({
    clientID: keys.google.clientID,
    clientSecret: keys.google.clientSecret,
    callbackURL: "/auth/google/redirect"
  },
  function(accessToken, refreshToken, profile, done) {
       User.findOrCreate({ googleId: profile.id }, function (err, user) {
         return done(err, user);
       });
  }
));
// In order to help keep authentication state across HTTP requests,
// Sequelize needs to serialize and deserialize the user
// Just consider this part boilerplate needed to make it all work
passport.serializeUser(function (user, cb) {
    cb(null, user);
});
passport.deserializeUser(function (obj, cb) {
    cb(null, obj);
});
// Exporting our configured passport
module.exports = passport;