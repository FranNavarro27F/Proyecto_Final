const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('contratos', {
    id:{
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING,
      
    },
    description:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    creation_date:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    expiration_date:{
        type: DataTypes.DATE,
        allowNull: false,
    },
    // id_dev:{
    //   type: DataTypes.STRING,
    //   allowNull: false,
    // },
    // id_client:{
    //   type: DataTypes.STRING,
    //   allowNull: false
    // }

  });
};
