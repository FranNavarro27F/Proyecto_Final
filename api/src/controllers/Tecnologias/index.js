const { Tecnologias } = require("../../db");
const { tecnologias } = require("../../json/Data.js");
// const { Op } = require("sequelize");

const ERROR = "Error @ controllers/Tecnologias/";

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
    return "✔ Tecnologias cargadas.";
  } catch (e) {
    console.error(`${ERROR}guardarTecnologiasDB --→ ${e}`);
  }
};

// -----------------------------------------------

const todasLasTecnologias = async () => {
  //
  try {
      allTec = await Tecnologias.findAll();
      return allTec;
    //
  } catch (e) {
    console.error(`${ERROR}todasLasTecnologias --→ ${e}`);
  }
};

// -----------------------------------------------

const eliminarTecnologia = async (id) => {
  //
  try {
    let aEliminar = await Tecnologias.findByPk(id);
    await aEliminar.destroy();
    console.log(`Technology (${id}) deleted successfully`);
    return `Technology (${id}) deleted successfully`;
    //
  } catch (e) {
    console.error(`${ERROR}eliminarTecnologias --→ ${e}`);
  }
};

// -----------------------------------------------

module.exports = {
  guardarTecnologiasDB,
  todasLasTecnologias,
  eliminarTecnologia,
};
