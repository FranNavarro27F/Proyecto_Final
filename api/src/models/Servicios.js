const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("servicios", {
    //
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },

    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    //
  });
};
