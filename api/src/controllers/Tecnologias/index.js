const { Tecnologias } = require("../../db");
const { tecnologias } = require("../../json/Data.js");
// const { Op } = require("sequelize");

const ERROR = "Error @ controllers/Tecnologias";

// -----------------------------------------------

// const TECNOLOGIAS = [];

// -----------------------------------------------

const guardarTecnologiasDB = async () => {
  try {
    tecnologias.forEach(
      async (cur) =>
        await Tecnologias.findOrCreate({
          where: { name: cur },
        })
    );
    console.log("✔ Tecnologias cargadas.");
    return "tecnologias guardadas correctamente en DB :) ";
  } catch (e) {
    console.error(`ERROR @ controllers/getUserById --→ ${e}`);
  }
};

const todasLasTecnologias = async () => {
  try {
    let allTec = await Tecnologias.findAll();
    return allTec;
  } catch (e) {
    console.error(`ERROR @ controllers/getUserById --→ ${e}`);
  }
};

const eliminarTecnologia = async (id) => {
  try {
    let aEliminar = await Tecnologias.findByPk(id);
    await aEliminar.destroy();
    console.log(`Technology (${id}) deleted successfully`);
    return `Technology (${id}) deleted successfully`;
  } catch (e) {
    console.error(`ERROR @ controllers/getUserById --→ ${e}`);
  }
};

module.exports = {
  guardarTecnologiasDB,
  todasLasTecnologias,
  eliminarTecnologia,
};
