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
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    date: {
      type: DataTypes.DATE, // DATEONLY / STRING
      allowNull: false,
    },
    expiration_date: {
      type: DataTypes.DATE, // DATEONLY / STRING
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    creation_date: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    expiration_date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  });
};

/* RELACIÓN

CONTRATISTA id_dev:{
   type: DataTypes.STRING,
   allowNull: false,
 },
CONTRATANTE id_client:{
   type: DataTypes.STRING,
   allowNull: false
 }

 */
