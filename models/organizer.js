module.exports = function(sequelize, DataTypes) {
  var organizer = sequelize.define("organizer", {
    // Giving the organizer model a name of type STRING
    name: DataTypes.STRING
  });

  organizer.associate = function(models) {
    // Associating organizer with Posts
    // When an organizer is deleted, also delete any associated Posts
    organizer.hasMany(models.events, {
      onDelete: "cascade"
    });
  };

  return organizer;
};
