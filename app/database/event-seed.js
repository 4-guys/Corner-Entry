var db = require("../../models");
var users = [
    {
        firstName: "Meeses",
        lastName: "Target",
        email: "water@earth.com",
        address: '123 waterside, windowsill, ca 92806',
        phone: 949231102,
        password: 12345,
        role: "member"
    },
    {
        firstName: "Michael",
        lastName: "Eguina",
        email: "adriverforlife@gmail.com",
        address: '321 alter, aliso viejo, ca 92656',
        phone: 9496324550,
        password: "admin1",
        role: "Admin"
    },
    {
        firstName: "Calvin",
        lastName: "Vo",
        email: "calvinVo@gmail.com",
        address: '111 middledesk dr, room 3000, ca 92310',
        phone: 714114120,
        password: 26491,
        role: "member"
    },
    {
        firstName: "Test",
        lastName: "Test",
        email: "Test@gmail.com",
        address: '111 middledesk dr, room 3000, ca 92310',
        phone: 714114120,
        password: 123,
        role: "member"
    },
];
var events = [
    {
        eventName: "Alpine Autocross",
        eventDescription: "Come run with us at the one of the highest autocrosses in California. Held at Big Bear Airport, it is a fun weekend in a very unique location!",
        eventLocation: "Big Bear Airport",
<<<<<<< HEAD
        eventDate: 2019-08-10,
=======
        eventDate: 20190810,
>>>>>>> 2bb0587c160ef72bffb47dac1d4ac00d12504e1c
        registrationStart: 1,
        registrationEnd: 20190810
    },
    {
        eventName: "POC Irvine Autocross",
        eventDescription: "5th Event in the POC Autocross Championship Series. You can run with us with or without a Porsche.",
        eventLocation: "Great Park, Irvine, CA",
<<<<<<< HEAD
        eventDate: 2019-10-15,
        registrationStart: 1,
        registrationEnd: 2019-10-15
=======
        eventDate: 20191015,
        registrationStart: 1,
        registrationEnd: 20191015
>>>>>>> 2bb0587c160ef72bffb47dac1d4ac00d12504e1c
    },
    {
        eventName: "Subiefest 2019",
        eventDescription: "Come join us for the annual Subiefest Show and Autocross. 6 Scored runs and then as many fun runs as you can get.",
        eventLocation: "Santa Anita Raceway",
<<<<<<< HEAD
        eventDate: 2019-09-11,
        registrationStart: 1,
        registrationEnd: 2019-09-11
=======
        eventDate: 20190911,
        registrationStart: 1,
        registrationEnd: 20190911
>>>>>>> 2bb0587c160ef72bffb47dac1d4ac00d12504e1c
    },];
var userSignups = [
    // {
    //     UserId: 1,
    //     EventId: 1,
        
    // },
    // {
    //     UserId: 2,
    //     EventId: 1,
        
    // },
    // {
    //     UserId: 3,
    //     EventId: 1,
        
    // },
    // {
    //     UserId: 1,
    //     EventId: 2,
        
    // },
    // {
    //     UserId: 2,
    //     EventId: 2,
        
    // },
    // {
    //     UserId: 3,
    //     EventId: 2,
        
    // },
    // {
    //     UserId: 1,
    //     EventId: 3,
        
    // },
    // {
    //     UserId: 2,
    //     EventId: 3,
        
    // },
    // {
    //     UserId: 3,
    //     EventId: 3,
        
    // }
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