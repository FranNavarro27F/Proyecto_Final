const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "calificaciones",
    {
      //
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },

      calificador: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      calificado: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      estrellas: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },

      review: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      fecha: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      habilitado: {
        type: DataTypes.BOOLEAN,
        // allowNull: false,
      },
      //
    },
    {
      createdAt: false,
      updatedAt: false,
    }
  );
};
