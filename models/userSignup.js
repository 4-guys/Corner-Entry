module.exports = function (sequelize, DataTypes) {
  var UserSignup = sequelize.define("UserSignup", {

  }, {
      freezeTableName: true
    });

  return UserSignup;
};
