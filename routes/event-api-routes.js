var db = require("../models");

module.exports = function (app) {

    // GET route for getting all of the events
    app.get("/api/events", function (req, res) {
        var query = {};
        // if (req.query.id) {
        //     query.id = req.query.id;
        // }
        console.log("Michael was here");
        db.Event.findAll({
            // where: query
        }).then(function (dbEvent) {
           return res.json(dbEvent);
        });
    });

    // Get route for retrieving a single event
    app.get("/api/events/:id", function (req, res) {
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
    app.post("/api/events", function (req, res) {
        db.Event.create({
            eventName: req.body.eventName,
            eventDescription: req.body.eventDescription,
            eventLocation: req.body.eventLocation,
            registrationStart: req.body.registrationStart,
            registrationEnd: req.body.registrationEnd,
            eventDate: req.body.eventDate
        }).then(function () {
            console.log("added event")
            res.redirect(307, "/");
        });
    });

    // DELETE route for deleting events
    app.delete("/api/events/:id", function (req, res) {
        db.Event.destroy({
            where: {
                id: req.params.googleId
            }
        }).then(function (dbEvent) {
            res.json(dbEvent);
        });
    });

    // PUT route for updating events
    app.put("/api/events", function (req, res) {
        db.Event.update(
            req.body,
            {
                where: {
                    id: req.body.googleId
                }
            }).then(function (dbEvent) {
                res.redirect(307, "/members");
            });
    });
};


