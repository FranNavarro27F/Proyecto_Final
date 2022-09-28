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

const postLenguajes = async (data) => {
    try {
        let { name } = data

    } catch (error) {

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


const postServicios = async (data) => {
    try {
        let { name } = data

    } catch (error) {

    }
}

const borrLogicLenguaje = async (data) => {
    try {
        let { id } = data

    } catch (error) {

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

const borrLogicServicios = async (data) => {
    try {
        let { id } = data

    } catch (error) {

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