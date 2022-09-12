const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("usuarios", {
    //
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },

    profilePicture: {
      type: DataTypes.STRING,
      allowNull: true, // Si el usuario no sube una foto de perfil, se le asigna una por defecto
    },

    name: {
      type: DataTypes.STRING(40),
      allowNull: false,
      validate: {
        isAlpha: true,
      },
    },

    lastName: {
      type: DataTypes.STRING(40),
      allowNull: false,
      validate: {
        isAlpha: true,
      },
    },

    email: {
      type: DataTypes.STRING(100),
      allowNull: false,
      unique: true,
      validate: {
        // is: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g, // REGEX para Email
        isEmail: true,
      },
    },

    country: {
      type: DataTypes.STRING(50),
      allowNull: false,
      validate: {
        isAlpha: true,
      },
    },

    city: {
      type: DataTypes.STRING(80),
      allowNull: true,
      validate: {
        isAlpha: true,
      },
    },

    linkedIn: {
      type: DataTypes.STRING(200),
      allowNull: true,
      unique: true,
      validate: {
        isUrl: true,
      },
    },

    gitHub: {
      type: DataTypes.STRING(200),
      allowNull: true,
      unique: true,
      validate: {
        isUrl: true,
      },
    },

    webSite: {
      type: DataTypes.STRING(200),
      allowNull: true,
      unique: true,
      validate: {
        isUrl: true,
      },
    },

    yearsOfExperience: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        len: [1, 2], // no permitir mas de dos dígitos
        max: 99, // valor máximo: 99
      },
    },

    dailyBudget: {
      type: DataTypes.INTEGER,
      allowNull: true,
      validate: {
        len: [1, 3], // no permitir mas de dos dígitos
        min: 1, // valor mínimo: 1
        max: 999, // valor máximo: 99
      },
    },

    englishLevel: {
      type: DataTypes.ENUM(
        "Básico",
        "Intermedio",
        "Avanzado",
        "Profesional",
        "Nativo / Bilingüe"
      ),
      allowNull: true, // Si el Dev no ingresa un nivel de inglés → No especificado o N/A
    },

    bio: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    //
  });
};

/* RELACIONES
    
    servicios
    lenguajes
    tecnologías

*/
