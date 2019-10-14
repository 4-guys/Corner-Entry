// Requiring bcrypt for password hashing. Using the bcrypt-nodejs version as the regular bcrypt module
// sometimes causes errors on Windows machines
var bcrypt = require("bcrypt-nodejs");
// Creating our User model
module.exports = function (sequelize, DataTypes) {
  var User = sequelize.define("User", {
    // Giving the user model a name of type STRING
    firstName: {
      type: DataTypes.STRING,
      defaultValue: "not entered",
      allowNull: true,
      validate: {
        len: [1]
      }
    },
    lastName: {
      type: DataTypes.STRING,
      defaultValue: "not entered",
      allowNull: true,
      validate: {
        len: [1]
      }
    },
    email: {
      type: DataTypes.STRING,
      defaultValue: "not entered",
      allowNull: true,
      validate: {
        len: [1]
      }
    },
    address: {
      type: DataTypes.STRING,
      defaultValue: "not entered",
      allowNull: true,
      validate: {
        len: [1]
      }
    },
    phone: {
      type: DataTypes.BIGINT,
      allowNull: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    role: {
      type:DataTypes.STRING,
      defaultValue: "member"
    },
    googleID: DataTypes.STRING,
  });
  User.associate = function (models) {
  // Associating Store with Posts
  // When an Store is deleted, also delete any associated Posts
    User.belongsToMany(models.Event, {
      through: models.UserSignup
    });
  };
  // Creating a custom method for our User model. This will check if an unhashed password entered by the user can be compared to the hashed password stored in our database
  User.prototype.validPassword = function (password) {
    return bcrypt.compareSync(password, this.password);
  };
  // Hooks are automatic methods that run during various phases of the User Model lifecycle
  // In this case, before a User is created, we will automatically hash their password
  User.beforeCreate(function (user) {
    user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null);
  });
  return User;
};