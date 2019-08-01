module.exports = function(sequelize, DataTypes) {
    var UserSignup = sequelize.define("UserSignup", {
      quantity: {
        type: DataTypes.INTEGER,
      },
      price: {
        type: DataTypes.FLOAT(12, 2) 
      }
    }, {
        freezeTableName: true
    });
  
    return UserSignup;
  };
  