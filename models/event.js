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
    }
  });
  Event.associate = function (models) {
    // Associating Store with Posts
    // When an Store is deleted, also delete any associated Posts
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
