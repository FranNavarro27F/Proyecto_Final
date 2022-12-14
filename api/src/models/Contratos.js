const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "contratos",
    {
      //
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },

      //  EMPLOYER & DEVELOPER TRAEN SUS IDs DEL LOGIN

      employer: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      developer: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      description: {
        type: DataTypes.TEXT,
        allowNull: false,
      },

      date: {
        type: DataTypes.DATEONLY,
        // allowNull: false,
        validate: {
          isDate: true, // VERIFICAR COMO HACER PARA QUE LA FECHA SEA VALIDA
        },
      },

      expiration_date: {
        type: DataTypes.DATEONLY,
        // allowNull: false,
        validate: {
          isDate: true, // VERIFICAR COMO HACER PARA QUE LA FECHA SEA VALIDA
        },
      },

      status: {
        // type: DataTypes.ENUM("Activo", "Inactivo", "Completado", "Cancelado", "Pendiente"),
        type: DataTypes.STRING(20),
        validate: {
          isAlpha: true,
        },
      },

      price: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },

      link_de_pago: {
        type: DataTypes.STRING,
        // allowNull: false,
      },

      pagado: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },

      aceptado: {
        type: DataTypes.BOOLEAN,
      },
      ultimaModificacion: {
        type: DataTypes.STRING,
      },
      puntuacion: {
        type: DataTypes.FLOAT,
        defaultValue: 1.0,
        validate: {
          min: 1.0,
          max: 5.0,
        },
      },
      comentario: {
        type: DataTypes.STRING,
        defaultValue: "",
      },
      habilitado: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
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

// -----------------------------------------

// NOTAS

// 1- Fechas ??? Es importante que las fechas de los contratos sean independientes de la fecha de creaci??n, debido a que
//             al existir una cola de contratos, los mismos pueden ser aceptados a futuro, y su fecha de inicio no ser??a
//             la misma que su fecha de suscripci??n.

// 2- Estado ??? Al existir una cola de contratos (y un registros de contratos en el perfil de cada usuario), es necesario que
//             cada uno tenga un "Estado", que muestre la situaci??n del mismo:
//                 - Activo: El contrato se encuentra en ejecuci??n, entre su fecha de inicio y fecha de finalizaci??n.
//                 - Inactivo: Estado de los contratos suscritos a futuro, aquellos que todav??a no han entrado en vigencia.
//                 - Completado: Contrato cuya fecha de finalizaci??n ha acontecido y el trabajo ha sido entregado.
//                 - Cancelado: Contrato que ha sido cancelado de com??n acuerdo entre el Desarrollador y el Contratante.

// 3 - BORRADO L??GICO (CONTRATOS CANCELADOS NO DEBEN SER ELIMINADOS, SI NO DESHABILITADOS)
