var db = require("../../models");
var users = [
    {
        firstName: "Meeses",
        lastName: "Target",
        email: "water@earth.com",
        address:'123 waterside, windowsill, ca 92806',
        phone: 949231102,
        password:12345
    },
    {
        firstName: "Michael",
        lastName: "Eguina",
        email: "adriverforlife@gmail.com",
        address:'321 alter, aliso viejo, ca 92656',
        phone: 949632455,
        password:12491
    },
    {
        firstName: "Calvin",
        lastName: "Vo",
        email: "calvinVo@gmail.com",
        address:'111 middledesk dr, room 3000, ca 92310',
        phone: 714114120,
        password:26491
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
    await makeData(db.User, users);
    db.sequelize.close();
})