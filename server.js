var express = require("express");
var app = express();
var PORT = process.env.PORT || 3000;
var db = require("./models/");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
//Routes
//require("./routes/event-api-routes.js")(app);
//require("./routes/organizer-api-routes.js")(app);
require("./routes/userSignup-routes.js")(app);
require ("./routes/html-routes")(app);
require("./routes/user-api-routes")(app);
// Syncing our sequelize models and then starting our Express app
db.sequelize.sync({}).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});



