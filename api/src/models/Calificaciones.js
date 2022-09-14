const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("calificaciones", {
    //
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    //
  },{
    createdAt: false,
    updatedAt: false,
  });
};
