// Dependencies
// =============================================================
var express = require("express");
var path = require("path");
var mysql = require("mysql");
var CLIENT_ID = "966906528567-8c8bk61ta3q0l6kva3dhph6aqg9g2qqe.apps.googleusercontent.com"
var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3307,

  // Your username
  user: "root",

  // Your password
  password: "root",
  database: "GLogin"
});
// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());



// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "index2.html"));
});

app.get("/what", function(req, res) {
  res.sendFile(path.join(__dirname, "index2.html"));
});

// =============================================================
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
    console.log(payload)
  }
  verify().catch(console.error);
}




// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
