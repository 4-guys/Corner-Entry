module.exports = function(sequelize, DataTypes) {
  var Organizer = sequelize.define("Organizer", {
    // Giving the Organizer model a name of type STRING
    name: DataTypes.STRING
  });

  Organizer.associate = function(models) {
    // Associating Organizer with Posts
    // When an Organizer is deleted, also delete any associated Posts
    Organizer.hasMany(models.Event, {
      onDelete: "cascade"
    });
  };

  return Organizer;
};
