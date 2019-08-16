var express = require("express");
var session = require("express-session");
var passport = require("./config/passport");

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

app.use(session({ secret: "keyboard cat", resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());


require ("./routes/html-routes")(app);
require("./routes/user-api-routes")(app);
require("./routes/event-api-routes")(app);
require ("./routes/userSignup-routes")(app);
require ("./routes/auth-login")(app);


// Syncing our sequelize models and then starting our Express app
db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});



