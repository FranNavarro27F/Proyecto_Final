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
    console.log(e)
  }
}
const getPaises = async () => {
  datosPais = await Paises.findAll();

  return datosPais;
};
const postPaises = async (name) => {
  datosPais = await Paises.findOrCreate({
    where: {
      name,
    }
  })
};
const deletePaises = async (id) => {
  await Paises.destroy({
    where: { id }
  })
  return "se elimino correctamente el "+ id
}

module.exports = { getPaises, postPaises, deletePaises, jsonPaises };
