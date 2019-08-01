module.exports = function(sequelize, DataTypes) {
  var event = sequelize.define("event", {
    // Giving the event model a name of type STRING
    eventName:  {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }},
    eventDescription:  {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    }
    });
  event.associate = function(models) {
    // Associating Store with Posts
    // When an Store is deleted, also delete any associated Posts
    event.belongsTo(models.organizer, {
      foreignKey: {
        allowNull: true
      }});
    event.belongsToMany(models.user, {
      through: models.userSignup
    });
  };
  
  return event;

}
