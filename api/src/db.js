require("dotenv").config();
const { Sequelize } = require("sequelize");
const fs = require("fs");
const path = require("path");
const { DB_USER, DB_PASSWORD, DB_HOST } = process.env;

// const sequelize = new Sequelize(
//   `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/finalproject`,
//   {
//     logging: false, // set to console.log to see the raw SQL queries
//     native: false, // lets Sequelize know we can use pg-native for ~30% more speed
//   }
// );

let sequelize =
  process.env.NODE_ENV === "production"
    ? new Sequelize({
        database: DB_NAME,
        dialect: "postgres",
        host: DB_HOST,
        port: 5432,
        username: DB_USER,
        password: DB_PASSWORD,
        pool: {
          max: 3,
          min: 1,
          idle: 10000,
        },
        dialectOptions: {
          ssl: {
            require: true,
            rejectUnauthorized: false,
          },
          keepAlive: true,
        },
        ssl: true,
      })
    : new Sequelize(
        `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/finalproject`,
        {
          logging: false, // set to console.log to see the raw SQL queries
          native: false, // lets Sequelize know we can use pg-native for ~30% more speed
        }
      );


const basename = path.basename(__filename);

const modelDefiners = [];

// Leemos todos los archivos de la carpeta Models, los requerimos y agregamos al arreglo modelDefiners
fs.readdirSync(path.join(__dirname, "/models"))
  .filter(
    (file) =>
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
  )
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, "/models", file)));
  });

// Inyectamos la conexión (sequelize) a todos los modelos
modelDefiners.forEach((model) => model(sequelize));
// Capitalizamos los nombres de los modelos ie: product => Product
let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [
  entry[0][0].toUpperCase() + entry[0].slice(1),
  entry[1],
]);
sequelize.models = Object.fromEntries(capsEntries);

// En sequelize.models están todos los modelos importados como propiedades
// Para relacionarlos hacemos un destructuring
const {
  Contratos,
  Lenguajes,
  Servicios,
  Tecnologias,
  Usuarios,
  Paises,
  Calificaciones,
  Notificaciones,
} = sequelize.models;

// --------------------------------------------------

// RELACIONES

// USUARIOS & SERVICIOS
Usuarios.belongsToMany(Servicios, { through: "usuarios-servicios" });
Servicios.belongsToMany(Usuarios, { through: "usuarios-servicios" });

// USUARIOS & LENGUAJES
Usuarios.belongsToMany(Lenguajes, { through: "usuarios-lenguajes" });
Lenguajes.belongsToMany(Usuarios, { through: "usuarios-lenguajes" });

// USUARIOS & TECNOLOGIAS
Usuarios.belongsToMany(Tecnologias, { through: "usuarios-tecnologias" });
Tecnologias.belongsToMany(Usuarios, { through: "usuarios-tecnologias" });

// USUARIOS & CONTRATOS
Usuarios.belongsToMany(Contratos, { through: "usuarios-contratos" });
Contratos.belongsToMany(Usuarios, { through: "usuarios-contratos" });

// USUARIOS & PAISES
Usuarios.belongsTo(Paises);
Paises.hasMany(Usuarios);

// --------------------------------------------------

module.exports = {
  ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
  conn: sequelize, // para importar la conexión { conn } = require('./db.js');
};
