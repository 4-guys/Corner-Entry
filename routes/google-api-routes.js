// Requiring our models and passport as we've configured it
var db = require("../models");
var passport = require("../config/passport");
var CLIENT_ID = "966906528567-8c8bk61ta3q0l6kva3dhph6aqg9g2qqe.apps.googleusercontent.com"

// Requiring our custom middleware for checking if a user is logged in
var isAuthenticatedAdmin = require("../config/middleware/isAuthenticatedAdmin");
module.exports = function(app) {
    app.post("/api/token", function(req, res) {
        // req.body hosts is equal to the JSON post sent from the user
        // This works because of our body parsing middleware
        var token = req.body.token;
        verifyToken(token)
      })
      
      async function verifyToken(token){
        const {OAuth2Client} = require('google-auth-library');
        const client = new OAuth2Client(CLIENT_ID);
        async function verify() {
          const ticket = await client.verifyIdToken({
              idToken: token,
              audience: CLIENT_ID,  // Specify the CLIENT_ID of the app that accesses the backend
              // Or, if multiple clients access the backend:
              //[CLIENT_ID_1, CLIENT_ID_2, CLIENT_ID_3]
          });
          const payload = ticket.getPayload();
          const userid = payload['sub'];
          // If request specified a G Suite domain:
          //const domain = payload['hd'];
          console.log( userid)
          console.log("~~~~~~~~~~~~~~~~~~~~~~")
         // console.log(payload)
          return userid
        }
        verify().catch(console.error);
      }


}