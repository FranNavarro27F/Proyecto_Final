const { Tecnologias } = require("../../db");
const { tecnologias } = require("../../json/Data.js");
// const { Op } = require("sequelize");

const ERROR = "Error @ controllers/Tecnologias";

// -----------------------------------------------

// const TECNOLOGIAS = [];

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
    return "tecnologias guardadas correctamente en DB :) ";
  } catch (e) {
    console.error(`ERROR @ controllers/guardarTecnologiasDB --→ ${e}`);
  }
};

const todasLasTecnologias = async (valor) => {
  try {
    let allTec = []
    if(!valor){
      
      allTec = await Tecnologias.findAll({where:{habilitado : true}})

    }else{
   
    allTec = await Tecnologias.findAll();

  }

  if(allTec.length > 0){

    return allTec;
    
  }else{
    return "Tecnologias no encontradas"
  }
  } catch (e) {
    console.error(`ERROR @ controllers/todasLasTecnologias --→ ${e}`);
  }
};

const eliminarTecnologia = async (id) => {
  try {
    let aEliminar = await Tecnologias.findByPk(id);
    await aEliminar.destroy();
    console.log(`Technology (${id}) deleted successfully`);
    return `Technology (${id}) deleted successfully`;
  } catch (e) {
    console.error(`ERROR @ controllers/eliminarTecnologias --→ ${e}`);
  }
};

module.exports = {
  guardarTecnologiasDB,
  todasLasTecnologias,
  eliminarTecnologia,
};
