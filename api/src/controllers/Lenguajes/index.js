const { Lenguajes } = require("../../db");
const { lenguajes } = require("../../json/Data.js");
// const { Op } = require("sequelize");

const ERROR = "Error @ controllers/Lenguajes";

// -----------------------------------------------

// Guardar Lenguajes Iniciales en la DB
const saveLanguages = async () => {
  try {
    lenguajes.forEach(
      async (curr) => await Lenguajes.findOrCreate({ where: { name: curr } })
      // .then((result) =>
      //   result.forEach((e) => (e.habilitado = true))
      // )
    );
    console.log("✔ Lenguajes cargados.");
    return "Lenguajes agregados correctamente";
  } catch (e) {
    console.error(`${ERROR}/saveLanguages --> ${e}`);
  }
};

// Guardar un nuevo lenguaje en la DB
const saveLanguage = async (language) => {
  try {
  } catch (e) {}
};

// Ver JSON de todos los lenguajes de programación
const getLanguages = async () => {
  try {
    let lenguajes = await Lenguajes.findAll();
    return lenguajes;
  } catch (e) {
    console.error(`${ERROR}/getLanguage --> ${e}`);
  }
};

// Modificar un lenguaje de la DB
const modifyLanguage = async ({ id, content }) => {
  try {
  } catch (e) {
    console.error(`${ERROR}/modifyLanguage --> ${e}`);
  }
};

// Eliminar un lenguaje de la DB
const deleteLenguajes = async (id) => {
  try {
    let toDelete = await Lenguajes.findByPk(id);
    await toDelete.destroy();
    console.log(`Lenguajes(${id}) deleted successfully`);
    return `Lenguajes (${id}) deleted successfully`;
  } catch (e) {
    console.error(`${ERROR}/deleteLenguajes --> ${e}`);
  }
};

module.exports = {
  saveLanguages,
  saveLanguage,
  getLanguages,
  modifyLanguage,
  deleteLenguajes,
};
