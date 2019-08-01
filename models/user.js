module.exports = function(sequelize, DataTypes) {
  var user = sequelize.define("user", {
    // Giving the user model a name of type STRING
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
      },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
      },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
      },
    phone: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        len: [9]
      }
      },
    googleId: {
      type: DataTypes.BIGINT(20),
      allowNull: false,
      validate: {
        len: [1]
      }
      },

  });

  user.associate = function(models) {
    // Associating Store with Posts
    // When an Store is deleted, also delete any associated Posts
    user.belongsToMany(models.event, {
      through: models.userSignup
    });
  };

  return user;
};
