const { DataTypes } = require("sequelize");
// Exportamos una función que define el modelo
// Luego le inyectamos la conexión a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define("usuarios", {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    profilePicture: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING(40),
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING(40),
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING(100),
      allowNull: false,
      unique: true,
    },
    country: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    city: {
      type: DataTypes.STRING(80),
      allowNull: true,
    },
    linkedIn: {
      type: DataTypes.STRING(200),
      allowNull: true,
      unique: true,
    },
    gitHub: {
      type: DataTypes.STRING(200),
      allowNull: true,
      unique: true,
    },
    webSite: {
      type: DataTypes.STRING(200),
      allowNull: true,
      unique: true,
    },
    yearsOfExperience: {
      type: DataTypes.INTEGER, // no permitir mas de dos dígitos
      allowNull: false,
    },
    dailyBudget: {
      type: Datatypes.INTEGER,
      allowNull: true,
    },
  });
};

/* RELACIONES
    
    servicios
    lenguajes
    tecnologías

*/
