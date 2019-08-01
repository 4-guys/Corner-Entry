var db = require("../models");

module.exports = function (router) {

    var router = require("express").Router();

    router.get("/api/users", function (req, res) {

        db.User.findAll({
            include: [db.Event]
        }).then(function (dbUser) {
            res.json(dbUser);
        });
    });

    router.get("/api/users/:id", function (req, res) {

        db.User.findOne({
            where: {
                id: req.params.googleId
            },
            include: [db.Event]
        }).then(function (dbUser) {
            res.json(dbUser);
        });
    });

    router.post("/api/users", function (req, res) {
        db.User.create(req.body).then(function (dbUser) {
            res.json(dbUser);
        });
    });

    router.delete("/api/users/:id", function (req, res) {
        db.User.destroy({
            where: {
                id: req.params.googleId
            }
        }).then(function (dbUser) {
            res.json(dbUser);
        });
    });

};
