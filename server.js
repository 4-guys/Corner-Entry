var express = require("express");

var app = express();
var PORT = process.env.PORT || 3000;

var db = require("./models/");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

//Routes
// require("./routes/event-api-routes.js")(app);
// require("./routes/organizer-api-routes.js")(app);
// require("./routes/user-api-routes.js")(app);

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

require ("./routes/html-routes")(app);
require("./routes/user-api-routes")(app);
// Syncing our sequelize models and then starting our Express app
db.sequelize.sync({force:true}).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});



