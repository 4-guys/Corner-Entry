var db = require("../models");

module.exports = function (router) {

    var router = require("express").Router();

    // GET route for getting all of the events
    router.get("/api/events", function (req, res) {
        var query = {};
        if (req.query.googleId) {
            query.googleId = req.query.googleId;
        }

        db.Event.findAll({
            where: query,
            include: [db.User]
        }).then(function (dbEvent) {
            res.json(dbEvent);
        });
    });

    // Get route for retrieving a single event
    router.get("/api/events/:id", function (req, res) {
        db.Event.findOne({
            where: {
                id: req.params.id
            },
            include: [db.User]
        }).then(function (dbEvent) {
            res.json(dbEvent);
        });
    });

    // POST route for saving a new event
    router.post("/api/events", function (req, res) {
        db.Event.create(req.body).then(function (dbEvent) {
            res.json(dbEvent);
        });
    });

    // DELETE route for deleting events
    router.delete("/api/events/:id", function (req, res) {
        db.Event.destroy({
            where: {
                id: req.params.googleId
            }
        }).then(function (dbEvent) {
            res.json(dbEvent);
        });
    });

    // PUT route for updating events
    router.put("/api/events", function (req, res) {
        db.Event.update(
            req.body,
            {
                where: {
                    id: req.body.googleId
                }
            }).then(function (dbEvent) {
                res.json(dbEvent);
            });
    });
};


