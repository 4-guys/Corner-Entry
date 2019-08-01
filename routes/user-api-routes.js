var db = require("../models");

module.exports = function (app) {

    app.get("/api/users", function (req, res) {

        db.User.findAll({
            include: [db.Event]
        }).then(function (dbUser) {
            res.json(dbUser);
        });
    });

    app.get("/api/users/:id", function (req, res) {

        db.User.findOne({
            where: {
                id: req.params.googleId
            },
            include: [db.Event]
        }).then(function (dbUser) {
            res.json(dbUser);
        });
    });

    app.post("/api/users", function (req, res) {
        db.User.create({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            address: req.body.address,
            phone: req.body.phone,
            email: req.body.email,
            googleId: req.body.googleId
        }).then(function (dbUser) {
            res.json(dbUser);
        });
    });

    app.delete("/api/users/:id", function (req, res) {
        db.User.destroy({
            where: {
                id: req.params.googleId
            }
        }).then(function (dbUser) {
            res.json(dbUser);
        });
    });

};
