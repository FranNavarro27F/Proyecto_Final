const { Servicios } = require("../../db");
const { servicios } = require("../../json/Data.js");
// const { Op } = require("sequelize");

const ERROR = "Error @ controllers/Servicios";

// -----------------------------------------------

const guardarServiciosEnDB = async () => {
  try {
    servicios.forEach(
      async (cur) =>
        await Servicios.findOrCreate({
          where: { name: cur },
        })
    );
    console.log("Servicios guardadas en DB :)");
    return "Servicios guardadas correctamente en DB :) ";
  } catch (e) {
    console.error(`${ERROR}/guardarServiciosEnDB --> ${e}`);
  }
};

const todosLosServicios = async () => {
  try {
    let servi = await Servicios.findAll();
    return servi;
  } catch (e) {
    console.error(`${ERROR}/todosLosServicios --> ${e}`);
  }
};

const deleteService = async (id) => {
  try {
    const service = await Servicios.destroy({ where: { id } });
    // Destroy returns an integer (amount of rows destroyed)
    if (service > 0) {
      console.log(`Service (${id}) deleted successfully`);
    } else console.error(`Service does not exist`);
  } catch (e) {
    console.error(`${ERROR}/deleteService --> ${e}`);
  }
};

module.exports = {
  todosLosServicios,
  guardarServiciosEnDB,
  deleteService,
};
