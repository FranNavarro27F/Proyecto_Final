const { Servicios } = require("../../db");
const { servicios } = require("../../json/Data.js");
// const { Op } = require("sequelize");

const ERROR = "Error @ controllers/Servicios/";

// -----------------------------------------------

const guardarServiciosEnDB = async () => {
  //
  try {
    servicios.forEach(
      async (cur) =>
        await Servicios.findOrCreate({
          where: { name: cur },
        })
    );
    console.log("✔ Servicios cargados ---------");
    return "✔ Servicios cargados.";
    //
  } catch (e) {
    console.error(`${ERROR}guardarServiciosEnDB --> ${e}`);
  }
};

// -----------------------------------------------

const todosLosServicios = async () => {
  try {
    let servi = await Servicios.findAll({
      where: {
        habilitado: true
      }
    });
    return servi;
  } catch (e) {
    console.error(`${ERROR}todosLosServicios --> ${e}`);
  }
};

// -----------------------------------------------

const deleteService = async (id) => {
  try {
    const service = await Servicios.destroy({ where: { id } });
    if (service > 0) {
      console.log(`Service (${id}) deleted successfully`);
    } else console.error(`Service does not exist`);
  } catch (e) {
    console.error(`${ERROR}deleteService --> ${e}`);
  }
};

// -----------------------------------------------

module.exports = {
  todosLosServicios,
  guardarServiciosEnDB,
  deleteService,
};
