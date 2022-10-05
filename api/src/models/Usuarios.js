const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "usuarios",
    {
      //
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },

      profilePicture: {
        type: DataTypes.TEXT,
        allowNull: true, // Si el usuario no sube una foto de perfil, se le asigna una por defecto
      },

      isAdmin: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },

      name: {
        type: DataTypes.STRING(20),
        allowNull: false,
        validate: {
          isAlpha: true,
        },
      },

      lastName: {
        type: DataTypes.STRING(20),
        allowNull: false,
        validate: {
          isAlpha: true,
        },
      },

      // GETTER / SETTER → NAME + LAST-NAME
      //   userName: {
      //         type: DataTypes.STRING,
      //         allowNull: false,
      //       },

      email: {
        type: DataTypes.STRING(60),
        allowNull: false,
        unique: true,
        validate: {
          // is: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g, // REGEX para Email
          isEmail: true,
        },
      },

      // country: {
      //   type: DataTypes.STRING(50),
      //   allowNull: false,
      //   validate: {
      //     isAlpha: true,
      //   },
      // },                 (reemplazado por paiseId)

      city: {
        type: DataTypes.STRING(50),
        allowNull: true,
        //  /^[a-zA-Z \u00f1\u00d1\u00C0-\u017F]+$/g;
      },

      linkedIn: {
        type: DataTypes.STRING(200),
        allowNull: true,
        // unique: true,
        // validate: {
        //   isUrl: true,
        // },
      },

      gitHub: {
        type: DataTypes.STRING(200),
        allowNull: true,
        // unique: true,
        // validate: {
        //   isUrl: true,
        // },
      },

      webSite: {
        type: DataTypes.STRING(200),
        allowNull: true,
        // unique: true,
        // validate: {
        //   isUrl: true,
        // },
      },

      yearsOfExperience: {
        type: DataTypes.INTEGER,
        allowNull: true,
        // validate: {
        //   len: [1, 2], // no permitir mas de dos dígitos
        //   min: 1, // valor mínimo: 1
        //   max: 99, // valor máximo: 99
        // },
      },

      dailyBudget: {
        type: DataTypes.INTEGER,
        allowNull: true,
        // validate: {
        //   len: [1, 3], // no permitir mas de dos dígitos
        //   min: 1, // valor mínimo: 1
        //   max: 999, // valor máximo: 99
        // },
      },

      englishLevel: {
        type: DataTypes.STRING(20),
        //   type: DataTypes.ENUM(
        //     "Básico",
        //     "Intermedio",
        //     "Avanzado",
        //     "Profesional",
        //     "Nativo / Bilingüe"
        //   ),
        allowNull: true, // Si el Dev no ingresa un nivel de inglés → No especificado o N/A
      },

      bio: {
        type: DataTypes.TEXT,
        allowNull: true,
      },

      visible: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
        allowNull: true,
      },

      postulado: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
        allowNull: true,
      },

      registrado: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },

      habilitado: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
        allowNull: true,
      },

      premium: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
        allowNull: true,
      },

      subscription_id: {
        type: DataTypes.STRING,
        allowNull: true,
      },

      tarjeta_numero: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
          isCreditCard: true,
        },
      },

      tarjeta_nombreCompleto: {
        type: DataTypes.STRING(50),
        allowNull: true,
        validate: {
          is: /\w+\s+\w+\s*\w*/gi,
        },
      },

      tarjeta_vencimiento: {
        type: DataTypes.STRING(5),
        allowNull: true,
        validate: {
          is: /\d{2}\/\d{2}/gi,
          //   isAfter: new Date(),
        },
      },

      tarjeta_codigoSeguridad: {
        type: DataTypes.STRING(4),
        allowNull: true,
        validate: {
          is: /\d{3,4}/g,
        },
      },

      cbu: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
          is: /\d{22}/g,
        },
      },

      cvu: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
          is: /\d{22}/g,
        },
      },

      reputacion: {
        type: DataTypes.FLOAT,
        allowNull: true,
        defaultValue: 1.0,
        validate: {
          min: 1.0,
          max: 5.0,
        },
      },
      //
    },
    {
      createdAt: false,
      updatedAt: false,
    }
  );
};
