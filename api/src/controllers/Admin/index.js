const {
    Usuarios,
    Tecnologias,
    Lenguajes,
    Servicios,
    Paises,
  } = require("../../db.js");
  
//   const { Op } = require("sequelize");
  
  const ERROR = "Error @ controllers/Admin";

  // ----------------------------------------------------

  //Controladores para agregado y borrado lógico de Modelos.

  const postLenguajes = async (name) =>{
    try {

        const [row, created] = await Lenguajes.findOrCreate({
            where: {name : name},
        })
        
        if (!created) {
                throw new Error("El Lenguaje ya existe");
        } else {
                return "Lenguaje agregado correctamente";
        }


    } catch (e) {
        console.error(`ERROR @ controllers/Admin/postLenguajes --→ ${e}`);
    }
  }


  const postTecnologias = async (data) =>{
    try {
        let {name} = data
        
    } catch (e) {
        
    }
  }


  const postPaises = async (data) =>{
    try {
        let {name} = data
        
    } catch (e) {
        
    }
  }


  const postServicios = async (name) =>{
    try {

        const [row, created] = await Servicios.findOrCreate({
            where: {name : name},
        })
        
        if (!created) {
                throw new Error("El Servicio ya existe");
        } else {
                return "Servicio agregado correctamente";
        }


    } catch (e) {
        console.error(`ERROR @ controllers/Admin/postServicios --→ ${e}`);
    }
  }

const borrLogicLenguaje = async (data) =>{
    try {
        
        let {id, habilitado} = data
        
        await Lenguajes.update({
            habilitado: habilitado
        }, {where: {id: id}})

        if(habilitado === false){
            return "Lenguaje eliminado correctamente"
        }else{
            return "Lenguaje habilitado correctamente"
        }  
        
    } catch (e) {
        console.error(`ERROR @ controllers/Admin/borrLogicLenguajes --→ ${e}`);
    }
}

const borrLogicPaises = async (data) =>{
    try {
        let {id} = data
        
    } catch (e) {
        
    }
}

const borrLogicTecnologias = async (data) =>{
    try {
        let {id} = data
        
    } catch (e) {
        
    }
}

const borrLogicServicios = async (data) =>{
    try {
        let {id, habilitado} = data
        
        await Servicios.update({
            habilitado: habilitado
        }, {where: {id: id}})


        if(habilitado === false){
            return "Servicio eliminado correctamente"
        }else{
            return "Servicio habilitado correctamente"
        }       
        
    } catch (e) {
        console.error(`ERROR @ controllers/Admin/borrLogicServicios --→ ${e}`);
    }
}

const borrLogicUsuario = async (data) =>{
    try {
        let {id} = data
        
    } catch (e) {
        
    }
}


module.exports = { 
    postLenguajes, 
    postPaises, 
    postServicios, 
    postTecnologias,
    borrLogicLenguaje,
    borrLogicServicios };