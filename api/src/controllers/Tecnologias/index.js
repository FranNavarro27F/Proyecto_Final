const { Tecnologias } = require("../../db");
const {tecnologias} = require("../../json/Data.js")
// const { Op } = require("sequelize");

const ERROR = "Error @ controllers/Tecnologias";

// -----------------------------------------------

// const TECNOLOGIAS = [];

// -----------------------------------------------

const guardarTecnologiasDB= async ()=>{

  tecnologias.forEach(async cur=> await Tecnologias.findOrCreate({
    where: {name: cur}
  }))
  console.log("Tecnologias guardadas en DB :)")
  return "tecnologias guardadas correctamente en DB :) ";
}

const todasLasTecnologias= async ()=>{
  let allTec= await Tecnologias.findAll();
  return allTec;

}

const eliminarTecnologia= async (id)=>{
  let aEliminar= await Tecnologias.findByPk(id);
  await aEliminar.destroy();
  return `Eliminada, correctamente tecnologias con id ${id}`;
}

module.exports = {
   guardarTecnologiasDB,
   todasLasTecnologias,
   eliminarTecnologia
  };
