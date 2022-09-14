const { Servicios } = require("../../db");
const DATA = require("../../json/Data.js");
const {servicios} = require("../../json/Data.js")
// const { Op } = require("sequelize");

// const ERROR = "Error @ controllers/Servicios";



// -----------------------------------------------

//
const guardarServiciosEnDB= async ()=>{

  servicios.forEach(async cur=> await Servicios.findOrCreate({
    where: {name: cur}
  }));
  console.log("Servicios guardadas en DB :)")
  return "Servicios guardadas correctamente en DB :) ";
}

const todosLosServicios = async () => {
  let servi= await Servicios.findAll();
  return servi;
};

module.exports = { 
  todosLosServicios,
  guardarServiciosEnDB
};
