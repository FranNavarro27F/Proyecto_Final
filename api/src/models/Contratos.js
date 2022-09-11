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
    status: {
      type: DataTypes.ENUM("Activo", "Inactivo", "Completado", "Cancelado"),
    },
  });
};

// RELACIÓN
// → ID CONTRATANTE
// → ID CONTRATISTA

// -----------------------------------------

// NOTAS

// 1- Fechas → Es importante que las fechas de los contratos sean independientes de la fecha de creación, debido a que
//             al existir una cola de contratos, los mismos pueden ser aceptados a futuro, y su fecha de inicio no sería
//             la misma que su fecha de suscripción.

// 2- Estado → Al existir una cola de contratos (y un registros de contratos en el perfil de cada usuario), es necesario que
//             cada uno tenga un "Estado", que muestre la situación del mismo:
//                 - Activo: El contrato se encuentra en ejecución, entre su fecha de inicio y fecha de finalización.
//                 - Inactivo: Estado de los contratos suscritos a futuro, aquellos que todavía no han entrado en vigencia.
//                 - Completado: Contrato cuya fecha de finalización ha acontecido y el trabajo ha sido entregado.
//                 - Cancelado: Contrato que ha sido cancelado de común acuerdo entre el Desarrollador y el Contratante.
