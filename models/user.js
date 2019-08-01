module.exports = function (sequelize, DataTypes) {
  var User = sequelize.define("User", {
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
        email: {
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

  User.associate = function (models) {
    // Associating Store with Posts
    // When an Store is deleted, also delete any associated Posts
    User.belongsToMany(models.Event, {
      through: models.UserSignup
    });
  };

  return User;
};
