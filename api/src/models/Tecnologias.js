const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "tecnologias",
    {
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
    },
    {
      createdAt: false,
      updatedAt: false,
    }
  );
};

// OTRA → CONTACTATE CON SOPORTE
