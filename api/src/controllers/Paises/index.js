const { Paises } = require("../../db");
const { paises } = require("../../json/Paises.json")
// const { Op } = require("sequelize");

const ERROR = "Error @ controllers/Countries";

// -----------------------------------------------
const jsonPaises = async () => {
  try {
    paises.map(async (name) => {
      await Paises.findOrCreate({
        where: { name }
      })
    })
    console.log('Paises por default caragados en la DB')
  } catch (e) {
    console.error(`ERROR @ controllers/getUserById --→ ${e}`);
  }
};

const getPaises = async () => {
  try {
    datosPais = await Paises.findAll();
    return datosPais;
  } catch (e) {
    console.error(`ERROR @ controllers/getUserById --→ ${e}`);
  }
};

const postPaises = async (name) => {
  try {
    datosPais = await Paises.findOrCreate({
      where: {
        name,
      }
    });
  } catch (e) {
    console.error(`ERROR @ controllers/getUserById --→ ${e}`);
  }
};

const deletePaises = async (id) => {
  try {
    await Paises.destroy({
      where: { id }
    });
    console.log(`Country(${id}) deleted successfully`);
    return `Country (${id}) deleted successfully`;
  } catch (e) {
    console.error(`ERROR @ controllers/getUserById --→ ${e}`);
  }
  
}



module.exports = { getPaises, postPaises, deletePaises, jsonPaises };
