var db = require("../../models");
var events = [
    {
        eventName: "Meeses",
        eventDescription: "Target",
        eventLocation: "water@earth.com",
        eventDate:12345,
        registrationStart: 1,
        registrationEnd:12345
    },
    {
        eventName: "Michael",
        eventDescription: "Eguina",
        eventLocation: "adriverforlife@gmail.com",
        eventDate:12492,
        registrationStart: 1,
        registrationEnd:12491
    },
    {
        eventName: "Calvin",
        eventDescription: "Vo",
        eventLocation: "calvinVo@gmail.com",
        eventDate:26491,
        registrationStart: 1,
        registrationEnd:26491
    },];

async function makeData(Model, data) {
    var promises = [];
    for (var i = 0; i < data.length; i++) {
        promises.push(Model.create(data[i]));
    }
    var items = await Promise.all(promises);
    return items;
}
db.sequelize.sync({force:true}).then(async function () {
    await makeData(db.Event, events);
    db.sequelize.close();
})