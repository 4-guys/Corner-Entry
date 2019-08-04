module.exports = function (sequelize, DataTypes) {
  var Event = sequelize.define("Event", {
    // Giving the event model a name of type STRING
    eventName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    eventDescription: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    eventLocation: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    eventDate: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    registrationStart: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    registrationEnd: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    maxEntry: {
      type: DataTypes.BIGINT,
      allowNull: true,
     
    },
    eventPhoto: {
      type: DataTypes.STRING,
      allowNull: true,
     
    },


  });
  Event.associate = function (models) {
  //   // Associating Store with Posts
  //   // When an Store is deleted, also delete any associated Posts
    Event.belongsTo(models.Organizer, {
      foreignKey: {
        allowNull: true
      }
    });
    Event.belongsToMany(models.User, {
      through: models.UserSignup
    });
  };

  return Event;

}
