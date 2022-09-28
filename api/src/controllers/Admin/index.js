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


const postTecnologias = async (name) => {
    try {
        let tecnologia = await Tecnologias.findOrCreate({
            where: {
                name,
            },
        });
        return `successfull --→ ${tecnologia.data}`
    } catch (e) {
        console.error(`ERROR @ controllers/postTecnologias --→ ${e}`);
    }
}


const postPaises = async (name) => {
    try {
        let pais = await Paises.findOrCreate({
            where: {
                name,
            },
        });
        return `successfull --→ ${pais.data}`
    } catch (e) {
        console.error(`ERROR @ controllers/postPaises --→ ${e}`);
    }
}


const borrLogicPaises = async (id) => {
    try {
        await Paises.update(
            { habilitado: false },
            {
                where: { id },
            }
        );
        console.log(`Country (${id}) updated successfully`);
        return `Country (${id}) updated successfully`;
    } catch (e) {
        console.error(`ERROR @ controllers/putPaises --→ ${e}`);
    }
}

const borrLogicTecnologias = async (id) => {
    try {
        await Tecnologias.update(
            { habilitado: false },
            {
                where: { id },
            }
        );
        console.log(`Tecnologias (${id}) updated successfully`);
        return `Tecnologias (${id}) updated successfully`;
    } catch (e) {
        console.error(`ERROR @ controllers/putPaises --→ ${e}`);
    }
}


const borrLogicUsuario = async (data) => {
    try {
        let { id } = data

    } catch (error) {

    }
}


module.exports = {
    postLenguajes,
    postPaises,
    postServicios,
    postTecnologias,
    borrLogicPaises,
    borrLogicTecnologias
};

