const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "paises",
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

      habilitado: {
        type: DataTypes.BOOLEAN,
        defaultValue : true,
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
