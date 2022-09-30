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


const borrLogicPaises = async (id,habilitado) => {
    try {
        
        await Paises.update(
            { habilitado},
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

const borrLogicTecnologias = async (id,habilitado) => {
    try {
        await Tecnologias.update(
            { habilitado},
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

        await Usuarios.update({
            habilitado: habilitado
        }, {where: {id: id}})
    
        if(habilitado === false){
            return "Usuario eliminado correctamente"
        }else{
            return "Usuario habilitado correctamente"
        }    

    } catch (error) {
        console.error(`ERROR @ controllers/Admin/borrLogicUsuario --→ ${e}`);
    }
}



const getAdminUser = async () => {
    try {

        let usuarios = await Usuarios.findAll({
          include: [
            {
              model: Paises,
              attributes: ["name"],
            },
            // {
            //   model: Servicios,
            //   attributes: ["name"],
            //   through: { attributes: [] },
            // },
            // {
            //   model: Lenguajes,
            //   attributes: ["name"],
            //   through: { attributes: [] },
            // },
            // {
            //   model: Tecnologias,
            //   attributes: ["name"],
            //   through: { attributes: [] },
            // },
          ],
        });
    
        let arrUsers = usuarios.map((cur) => cur.dataValues);
        let arrUsersListo = arrUsers.map(async (cur) => {
          return {
            id: cur.id,
            profilePicture: cur.profilePicture,
            // isAdmin: cur.isAdmin,
            name: cur.name ? (cur.name = toUperCase(cur.name)) : (cur.name = []),
            lastName: cur.lastName
              ? (cur.lastName = toUperCase(cur.lastName))
              : (cur.lastName = []),
            email: cur.email,
            // city: cur.city,
            // linkedIn: cur.linkedIn,
            // gitHub: cur.gitHub,
            // webSite: cur.webSite,
            // yearsOfExperience: cur.yearsOfExperience,
            // dailyBudget: cur.dailyBudget,
            // englishLevel: cur.englishLevel,
            // bio: cur.bio,
            visible: cur.visible,
            postulado: cur.postulado,
            registrado: cur.registrado,
            habilitado: cur.habilitado,
            // tarjeta_numero: cur.tarjeta_numero,
            // tarjeta_nombreCompleto: cur.tarjeta_nombreCompleto,
            // tarjeta_vencimiento: cur.tarjeta_vencimiento,
            // tarjeta_codigoSeguridad: cur.tarjeta_codigoSeguridad,
            // cbu: cur.cbu,
            // cvu: cur.cvu,
            reputacion: cur.reputacion,
            paiseId: cur.paise ? cur.paise.dataValues.name : "",
            // servicios: cur.servicios
            //   ? cur.servicios.map((cur) => cur.dataValues).map((cur) => cur.name)
            //   : [],
            // lenguajes: cur.lenguajes
            //   ? cur.lenguajes.map((cur) => cur.dataValues).map((cur) => cur.name)
            //   : [],
            // tecnologias: cur.tecnologias
            //   ? cur.tecnologias.map((cur) => cur.dataValues).map((cur) => cur.name)
            //   : [],
          };
        });
    
        return await Promise.all(arrUsersListo);
      } catch (e) {
        console.error(`ERROR @ controllers/getAdminUser --→ ${e}`);
      }
}

const getAdminLeng = async () => {
    try {
        
        let allLeng = await Lenguajes.findAll()

        return allLeng
    } catch (e) {
        console.error(`ERROR @ controllers/getAdminLeng --→ ${e}`);
    }
}

const getAdminServ = async () => {
    try {
        
        let allServ = await Servicios.findAll()

        return allServ
    } catch (e) {
        console.error(`ERROR @ controllers/getAdminServ --→ ${e}`);
    }
}

const getAdminTec = async () => {
    try {
        
        let allTec = await Tecnologias.findAll()

        return allTec
    } catch (e) {
        console.error(`ERROR @ controllers/getAdminTec --→ ${e}`);
    }
}

const getAdminPaises = async () => {
    try {
        
        let allPai = await Paises.findAll()

        return allPai
    } catch (e) {
        console.error(`ERROR @ controllers/getAdminPaises --→ ${e}`);
    }
}


module.exports = {
    postLenguajes,
    postPaises,
    postServicios,
    postTecnologias,
    borrLogicPaises,
    borrLogicTecnologias,
    borrLogicLenguaje,
    borrLogicServicios,
    borrLogicUsuario,
    getAdminLeng,
    getAdminPaises,
    getAdminServ,
    getAdminTec,
    getAdminUser
};

