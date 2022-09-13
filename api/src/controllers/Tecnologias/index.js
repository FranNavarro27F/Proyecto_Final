const { Tecnologias } = require("../../db");
// const { Op } = require("sequelize");

const ERROR = "Error @ controllers/Tecnologias";

// -----------------------------------------------

// const TECNOLOGIAS = [];

// -----------------------------------------------

const guardarTecnologiasDB= async (tecnologias)=>{
  tecnologias.forEach(async cur=> await Tecnologias.findOrCreate({
    where: {name: cur}
  }))
  return "tecnologias guardadas correctamente en DB :) ";
}

const todasLasTecnologias= async ()=>{
  let allTec= await Tecnologias.findAll();
  console.log(allTec)
  return allTec;

}

module.exports = {
   guardarTecnologiasDB,
   todasLasTecnologias,
  };
