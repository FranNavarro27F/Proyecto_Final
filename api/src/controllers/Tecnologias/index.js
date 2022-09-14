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


module.exports = {
   guardarTecnologiasDB,
   todasLasTecnologias,
  };
