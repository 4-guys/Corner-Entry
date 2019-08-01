module.exports = function(sequelize, DataTypes) {
  var event = sequelize.define("event", {
    // Giving the event model a name of type STRING
    eventName: DataTypes.STRING,
    eventDescription: DataTypes.STRING
  });

  event.associate = function(models) {
    // Associating Store with Posts
    // When an Store is deleted, also delete any associated Posts
    event.belongsTo(models.organizer, {
      foreignKey: {
        allowNull: false
      }
    event.belongsToMany(models.user, {
      through: models.userSignup
    });
  };

  return store;
};
