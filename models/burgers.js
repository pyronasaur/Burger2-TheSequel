module.exports = function(sequelize, DataTypes) {
    var Burgers = sequelize.define("Burgers", {
      burgerId: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
      },
      burgerName: DataTypes.TEXT,
      isDevoured: DataTypes.BOOLEAN
    },
    {
        timestamps: false
    });
  
    return Burgers;
  };
  