const { Paises } = require("../../db");
const { paises } = require("../../json/Paises.json");

const ERROR = "Error @ controllers/Countries/";

// -----------------------------------------------

const jsonPaises = async () => {
  //
  try {
    paises.map(async (name) => {
      await Paises.findOrCreate({
        where: { name },
      });
    });
    console.log("✔ Paises cargados.");
    return "✔ Paises cargados.";
    //
  } catch (e) {
    console.error(`${ERROR}jsonPaises --→ ${e}`);
  }
};

// -----------------------------------------------

const getPaises = async () => {
  //
  try {
    datosPais = await Paises.findAll();
    return datosPais;
    //
  } catch (e) {
    console.error(`${ERROR}getPaises --→ ${e}`);
  }
};

// -----------------------------------------------

const postPaises = async (name) => {
  //
  try {
    datosPais = await Paises.findOrCreate({
      where: {
        name,
      },
    });
    //
  } catch (e) {
    console.error(`${ERROR}postPaises --→ ${e}`);
  }
};

// -----------------------------------------------

const deletePaises = async (id) => {
  //
  try {
    await Paises.destroy({
      where: { id },
    });
    console.log(`Country(${id}) deleted successfully`);
    return `Country (${id}) deleted successfully`;
    //
  } catch (e) {
    console.error(`${ERROR}deletePaises --→ ${e}`);
  }
};

// -----------------------------------------------

const putPaises = async (id, name) => {
  //
  try {
    await Paises.update(
      { name },
      {
        where: { id },
      }
    );
    console.log(`Country (${id}) updated successfully`);
    return `Country (${id}) updated successfully`;
    //
  } catch (e) {
    console.error(`${ERROR}putPaises --→ ${e}`);
  }
};

// -----------------------------------------------

const traerPaisPorId = async (id) => {
  //
  try {
    let paisPorId = await Paises.findByPk(id);
    return paisPorId;
    //
  } catch (e) {
    console.error(`${ERROR}traerPaisPorId --→ ${e}`);
  }
};

// -----------------------------------------------

module.exports = {
  getPaises,
  postPaises,
  deletePaises,
  putPaises,
  jsonPaises,
  traerPaisPorId,
};
