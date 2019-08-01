module.exports = function(sequelize, DataTypes) {
  var event = sequelize.define("event", {
    // Giving the event model a name of type STRING
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      },
    phone: {
      type: Sequelize.INTEGER,
      allowNull: false,
      validate: {
        len: [9]
      },
    googleId: {
      type: Sequelize.BIGINT(20),
      allowNull: false,
      validate: {
        len: [1]
      },

  });

  event.associate = function(models) {
    // Associating Store with Posts
    // When an Store is deleted, also delete any associated Posts
    event.belongsToMany(models.user, {
      through: models.userSignup
    });
  };

  return user;
};
