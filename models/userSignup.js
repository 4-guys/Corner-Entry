module.exports = function(sequelize, DataTypes) {
    var userSignup = sequelize.define("userSignup", {
      quantity: {
        type: DataTypes.INTEGER,
      },
      price: {
        type: DataTypes.FLOAT(12, 2) 
      }
    }, {
        freezeTableName: true
    });
  
    return userSignup;
  };
  