const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("notificaciones", {
    //
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    //
  });
};
