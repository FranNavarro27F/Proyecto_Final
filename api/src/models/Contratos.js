const { DataTypes } = require("sequelize");
// Exportamos una función que define el modelo
// Luego le inyectamos la conexión a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define("contratos", {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
    },
    date: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    expiration_date: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
};

/* RELACIONES

CONTRATANTE
CONTRATISTA


*/
