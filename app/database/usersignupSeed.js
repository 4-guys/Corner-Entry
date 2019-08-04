var db = require("../../models");

var users = [
    {
        firstName: "Meeses",
        lastName: "Target",
        email: "water@earth.com",
        address: '123 waterside, windowsill, ca 92806',
        phone: 949231102,
        password: 12345
    },
    {
        firstName: "Michael",
        lastName: "Eguina",
        email: "adriverforlife@gmail.com",
        address: '321 alter, aliso viejo, ca 92656',
        phone: 949632455,
        password: 12491
    },
    {
        firstName: "Calvin",
        lastName: "Vo",
        email: "calvinVo@gmail.com",
        address: '111 middledesk dr, room 3000, ca 92310',
        phone: 714114120,
        password: 26491
    },];
var events = [
    {
        eventName: "Meeses",
        eventDescription: "Target",
        eventLocation: "water@earth.com",
        eventDate: 12345,
        registrationStart: 1,
        registrationEnd: 12345
    },
    {
        eventName: "Michael",
        eventDescription: "Eguina",
        eventLocation: "adriverforlife@gmail.com",
        eventDate: 12492,
        registrationStart: 1,
        registrationEnd: 12491
    },
    {
        eventName: "Calvin",
        eventDescription: "Vo",
        eventLocation: "calvinVo@gmail.com",
        eventDate: 26491,
        registrationStart: 1,
        registrationEnd: 26491
    },];
var userSignups = [
    {
        UserId: 1,
        EventId: 1,
        quantity: 100,
        price: 10.50
    },
    {
        UserId: 2,
        EventId: 1,
        quantity: 100,
        price: 20.50
    },
    {
        UserId: 3,
        EventId: 1,
        quantity: 100,
        price: 30.50
    },
    {
        UserId: 1,
        EventId: 2,
        quantity: 100,
        price: 20.50
    },
    {
        UserId: 2,
        EventId: 2,
        quantity: 100,
        price: 10.50
    },
    {
        UserId: 3,
        EventId: 2,
        quantity: 100,
        price: 30.50
    },
    {
        UserId: 1,
        EventId: 3,
        quantity: 100,
        price: 20.50
    },
    {
        UserId: 2,
        EventId: 3,
        quantity: 100,
        price: 30.50
    },
    {
        UserId: 3,
        EventId: 3,
        quantity: 100,
        price: 10.50
    }
];



async function makeData(Model, data) {
    var promises = [];
    for (var i = 0; i < data.length; i++) {
        promises.push(Model.create(data[i]));
    }
    var items = await Promise.all(promises);
    return items;
}
db.sequelize.sync({ force: true }).then(async function () {
    await makeData(db.User, users);
    await makeData(db.Event, events);
    await makeData(db.UserSignup, userSignups);
    db.sequelize.close();
})