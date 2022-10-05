const {
  Usuarios,
  Tecnologias,
  Lenguajes,
  Servicios,
  Paises,
} = require("../../db.js");

const ERROR = "Error @ controllers/Admin/";

// -----------------------------------------------

// CAPITALIZE STING INPUTS
// Ej: jOhN dOe --> John Doe
const capitalize = (str) => {
  return str
    .trim()
    .toLowerCase()
    .split(" ")
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(" ");
};

// -----------------------------------------------

// ┌────────────────────────────┐
// │         RUTAS POST         │
// └────────────────────────────┘

// POST (NEW) LANGUAGE
const postLenguajes = async (name) => {
  //
  try {
    const [row, created] = await Lenguajes.findOrCreate({
      where: { name },
    });

    if (!created) {
      console.error("El Lenguaje ya existe");
    } else {
      return "Lenguaje agregado correctamente";
    }
    //
  } catch (e) {
    console.error(`${ERROR}postLenguajes --→ ${e}`);
  }
};

// -----------------------------------------------

// POST (NEW) SERVICE
const postServicios = async (name) => {
  //
  try {
    const [row, created] = await Servicios.findOrCreate({
      where: { name },
    });

    if (!created) {
      console.error("El Servicio ya existe");
    } else {
      return "Servicio agregado correctamente";
    }
    //
  } catch (e) {
    console.error(`${ERROR}postServicios --→ ${e}`);
  }
};

// -----------------------------------------------

// POST (NEW) TECHNOLOGY
const postTecnologias = async (name) => {
  //
  try {
    let tecnologia = await Tecnologias.findOrCreate({
      where: {
        name,
      },
    });
    return `Tecnología ${name} agregada correctamente`;
    //
  } catch (e) {
    console.error(`${ERROR}postTecnologias --→ ${e}`);
  }
};

// -----------------------------------------------

// POST (NEW) COUNTRY
const postPaises = async (name) => {
  //
  try {
    let pais = await Paises.findOrCreate({
      where: {
        name,
      },
    });
    return `Pais ${name} agregado correctamente`;
    //
  } catch (e) {
    console.error(`${ERROR}postPaises --→ ${e}`);
  }
};

// -----------------------------------------------

// ┌────────────────────────────┐
// │         RUTAS PUT          │
// └────────────────────────────┘

// DISABLE LANGUAGE
const borrLogicLenguaje = async (data) => {
  //
  try {
    let { id, habilitado } = data;

    await Lenguajes.update(
      {
        habilitado,
      },
      { where: { id } }
    );

    if (habilitado === false) {
      return "Lenguaje eliminado correctamente";
    } else {
      return "Lenguaje habilitado correctamente";
    }
    //
  } catch (e) {
    console.error(`${ERROR}borrLogicLenguajes --→ ${e}`);
  }
};

// -----------------------------------------------

// DISABLE SERVICE
const borrLogicServicios = async (data) => {
  //
  try {
    let { id, habilitado } = data;

    await Servicios.update(
      {
        habilitado,
      },
      { where: { id } }
    );

    if (habilitado === false) {
      return "Servicio eliminado correctamente";
    } else {
      return "Servicio habilitado correctamente";
    }
    //
  } catch (e) {
    console.error(`${ERROR}borrLogicServicios --→ ${e}`);
  }
};

// -----------------------------------------------

// DISABLE COUNTRY
const borrLogicPaises = async (id, habilitado) => {
  //
  try {
    await Paises.update(
      { habilitado },
      {
        where: { id },
      }
    );
    console.log(`Country (${id}) updated successfully`);
    return `Country (${id}) updated successfully`;
    //
  } catch (e) {
    console.error(`${ERROR}borrLogicPaises --→ ${e}`);
  }
};

// -----------------------------------------------

// DISABLE TECHNOLOGY
const borrLogicTecnologias = async (id, habilitado) => {
  //
  try {
    await Tecnologias.update(
      { habilitado },
      {
        where: { id },
      }
    );
    console.log(`Tecnologia (${id}) updated successfully`);
    return `Tecnologias (${id}) updated successfully`;
    //
  } catch (e) {
    console.error(`${ERROR}borrLogicTecnologias --→ ${e}`);
  }
};

// -----------------------------------------------

// DISABLE USER
const borrLogicUsuario = async (data) => {
  //
  try {
    let { id, habilitado } = data;

    await Usuarios.update(
      {
        habilitado,
      },
      { where: { id } }
    );

    if (habilitado === false) {
      return "Usuario eliminado correctamente";
    } else {
      return "Usuario habilitado correctamente";
    }
    //
  } catch (e) {
    console.error(`${ERROR}borrLogicUsuario --→ ${e}`);
  }
};

// -----------------------------------------------

const toggleAdmin = async (id, admin) => {
  //
  try {
    typeof admin === "boolean";
    const user = await Usuarios.findByPk(id);
    user.isAdmin = admin;

    await user.save();
    return `El usuario ${
      (user.email, admin ? "ahora es" : "ya no es")
    } administrador.`;
    //
  } catch (e) {
    typeof visible !== "boolean"
      ? console.error(`"admin" debe ser un boolean.`)
      : console.error(`${ERROR}toggleAdmin --→ ${e}`);
  }
};

// -----------------------------------------------

// ┌────────────────────────────┐
// │         RUTAS GET          │
// └────────────────────────────┘

// GET ALL USERS
const getAdminUser = async () => {
  //
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
        name: capitalize(cur.name) || "Anonymous",
        lastName: capitalize(cur.lastName) || "Anonymous",
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
    //
  } catch (e) {
    console.error(`${ERROR}getAdminUser --→ ${e}`);
  }
};

// -----------------------------------------------

// GET ALL LANGUAGES
const getAdminLeng = async () => {
  //
  try {
    let allLeng = await Lenguajes.findAll();

    return allLeng;
    //
  } catch (e) {
    console.error(`${ERROR}getAdminLeng --→ ${e}`);
  }
};

// -----------------------------------------------

// GET ALL SERVICES
const getAdminServ = async () => {
  //
  try {
    let allServ = await Servicios.findAll();

    return allServ;
    //
  } catch (e) {
    console.error(`${ERROR}getAdminServ --→ ${e}`);
  }
};

// -----------------------------------------------

// GET ALL TECHNOLOGIES
const getAdminTec = async () => {
  //
  try {
    let allTec = await Tecnologias.findAll();

    return allTec;
    //
  } catch (e) {
    console.error(`${ERROR}getAdminTec --→ ${e}`);
  }
};

// -----------------------------------------------

// GET ALL COUNTRIES
const getAdminPaises = async () => {
  //
  try {
    let allPai = await Paises.findAll();

    return allPai;
    //
  } catch (e) {
    console.error(`${ERROR}getAdminPaises --→ ${e}`);
  }
};

// -----------------------------------------------

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
  toggleAdmin,
  getAdminLeng,
  getAdminPaises,
  getAdminServ,
  getAdminTec,
  getAdminUser,
};
