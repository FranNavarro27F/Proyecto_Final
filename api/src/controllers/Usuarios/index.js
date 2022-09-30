const {
  Usuarios,
  Tecnologias,
  Lenguajes,
  Servicios,
  Paises,
  Contratos,
} = require("../../db.js");

const { Op } = require("sequelize");

const ERROR = "Error @ controllers/Usuarios/";

// -----------------------------------------------

// **** UTILS ****
const capitalize = (nombre) => {
  return nombre[0].toUpperCase() + nombre.slice(1).toLowerCase();
};

const findUsers = async (props) => {
  let usuarios = await Usuarios.findAll({
    where: props,
    include: [
      {
        model: Paises,
        attributes: ["name"],
      },
      {
        model: Servicios,
        attributes: ["name"],
        through: { attributes: [] },
      },
      {
        model: Lenguajes,
        attributes: ["name"],
        through: { attributes: [] },
      },
      {
        model: Tecnologias,
        attributes: ["name"],
        through: { attributes: [] },
      },
    ],
  });
  //
  return usuarios.map((u) => {
    const { dataValues: d } = u;
    let country = Paises.findByPk(u.paiseId).d.name;
    //
    return {
      id: d.id,
      profilePicture:
        d.profilePicture ||
        "https://cdn.discordapp.com/attachments/826954908258402374/1025122570074341518/anonymous.png",
      name: capitalize(d.name) || "Anonymous",
      lastName: capitalize(d.lastName) || "Anonymous",
      email: d.email,
      // isAdmin: d.isAdmin,

      // city: d.city,
      linkedIn: d.linkedIn,
      gitHub: d.gitHub,
      webSite: d.webSite,

      yearsOfExperience: d.yearsOfExperience,
      dailyBudget: d.dailyBudget,
      englishLevel: d.englishLevel,
      bio: d.bio,

      // postulado: d.postulado,
      // registrado: d.registrado,
      visible: d.visible,
      habilitado: d.habilitado,
      premium: d.premium,
      reputacion: d.reputacion,

      // tarjeta_numero: d.tarjeta_numero,
      // tarjeta_nombreCompleto: d.tarjeta_nombreCompleto,
      // tarjeta_vencimiento: d.tarjeta_vencimiento,
      // tarjeta_codigoSeguridad: d.tarjeta_codigoSeguridad,
      // cbu: d.cbu,
      // cvu: d.cvu,

      paiseId: country || "",
      servicios: d.servicios
        ? d.servicios.map((cur) => cur.dataValues).map((cur) => cur.name)
        : [],
      lenguajes: d.lenguajes
        ? d.lenguajes.map((cur) => cur.dataValues).map((cur) => cur.name)
        : [],
      tecnologias: d.tecnologias
        ? d.tecnologias.map((cur) => cur.dataValues).map((cur) => cur.name)
        : [],
    };
  });
};

const findUser = async (props) => {
  const d = await Usuarios.findOne({
    where: props,
    include: [
      {
        model: Paises,
        attributes: ["name"],
      },
      {
        model: Servicios,
        attributes: ["name"],
        through: { attributes: [] },
      },
      {
        model: Lenguajes,
        attributes: ["name"],
        through: { attributes: [] },
      },
      {
        model: Tecnologias,
        attributes: ["name"],
        through: { attributes: [] },
      },
    ],
  });

  let country = Paises.findByPk(u.paiseId).d.name;
  //
  return {
    id: d.id,
    profilePicture:
      d.profilePicture ||
      "https://cdn.discordapp.com/attachments/826954908258402374/1025122570074341518/anonymous.png",
    name: capitalize(d.name) || "Anonymous",
    lastName: capitalize(d.lastName) || "Anonymous",
    email: d.email,
    // isAdmin: d.isAdmin,

    city: d.city,
    linkedIn: d.linkedIn,
    gitHub: d.gitHub,
    webSite: d.webSite,

    yearsOfExperience: d.yearsOfExperience,
    dailyBudget: d.dailyBudget,
    englishLevel: d.englishLevel,
    bio: d.bio,

    // postulado: d.postulado,
    // registrado: d.registrado,
    visible: d.visible,
    habilitado: d.habilitado,
    premium: d.premium,
    reputacion: d.reputacion,

    tarjeta_numero: d.tarjeta_numero,
    tarjeta_nombreCompleto: d.tarjeta_nombreCompleto,
    tarjeta_vencimiento: d.tarjeta_vencimiento,
    tarjeta_codigoSeguridad: d.tarjeta_codigoSeguridad,
    cbu: d.cbu,
    cvu: d.cvu,

    paiseId: country || "",
    servicios: d.servicios
      ? d.servicios.map((cur) => cur.dataValues).map((cur) => cur.name)
      : [],
    lenguajes: d.lenguajes
      ? d.lenguajes.map((cur) => cur.dataValues).map((cur) => cur.name)
      : [],
    tecnologias: d.tecnologias
      ? d.tecnologias.map((cur) => cur.dataValues).map((cur) => cur.name)
      : [],
  };
};

// -----------------------------------------------

// GET (ALL) USERS
const getUsers = async () => {
  //
  try {
    return await findUsers({
      // habilitado: true,
      // visible: true,
    });
    //
  } catch (e) {
    console.error(`${ERROR}getUsers --→ ${e}`);
  }
};

// -----------------------------------------------

// GET USER (BY ID) → DETAILS
const getUserById = async (id) => {
  //
  try {
    const User = Usuarios.findByPk(id, {
      include: [
        {
          model: Servicios,
          attributes: ["name"],
          through: { attributes: [] },
        },
        {
          model: Lenguajes,
          attributes: ["name"],
          through: { attributes: [] },
        },
        {
          model: Tecnologias,
          attributes: ["name"],
          through: { attributes: [] },
        },
        {
          model: Contratos,
        },
      ],
    });

    let userM = User?.dataValues;
    let nombrePais = (await Paises.findByPk(userM.paiseId))?.dataValues.name;

    userM.paiseId = nombrePais;
    userM.name = capitalize(userM.name);
    userM.lastName = capitalize(userM.lastName);
    userM.servicios = userM.servicios
      .map((cur) => cur.dataValues)
      .map((cur) => cur.name);
    userM.lenguajes = userM.lenguajes
      .map((cur) => cur.dataValues)
      .map((cur) => cur.name);
    userM.tecnologias = userM.tecnologias
      .map((cur) => cur.dataValues)
      .map((cur) => cur.name);

    return userM;
    //
  } catch (e) {
    console.error(`${ERROR}getUserById --→ ${e}`);
  }
};

// -----------------------------------------------

// GET USER (BY NAME)
const getUserByName = async (name) => {
  //
  try {
    return await findUser({
      // habilitado: true,
      // visible: true,
      name: { [Op.iLike]: `%${name}%` },
    });
    //
  } catch (e) {
    console.error(`${ERROR}getUserByName --→ ${e}`);
  }
};

// -----------------------------------------------

// GET USER (BY EMAIL)
const getByEmail = async (email) => {
  //
  try {
    return await findUser({
      email,
      // habilitado: true,
      // visible: true,
    });
    //
  } catch (e) {
    console.error(`${ERROR}getByEmail --→ ${e}`);
  }
};

// -----------------------------------------------

const postUserAuth = async (data) => {
  //
  try {
    let { email, family_name, given_name, picture } = data;

    const [row, created] = await Usuarios.findOrCreate({
      where: {
        email,
      },
      defaults: {
        name: given_name,
        lastName: family_name,
        profilePicture: picture,
        isAdmin: false,
        registrado: true,
        habilitado: true,
        visible: false,
        premium: false,
      },
    });

    if (!created) {
      throw new Error("El usuario ya existe");
    } else {
      return "Usuario creado correctamente";
    }
    //
  } catch (e) {
    console.error(`${ERROR}postUserAuth --→ ${e}`);
  }
};

// -----------------------------------------------

// SET SUBSCRIPTION ID
const setSubscriptionId = async (data) => {
  //
  try {
    const { id, subscription_id } = data;

    const user = await Usuarios.findByPk(id);
    user.subscription_id = subscription_id || null;

    await user.save();
    return `Al usuario ${user.email} le fue asignada la suscripción: ${subscription_id}`;
    //
  } catch (e) {
    console.error(`${ERROR}setSubscriptionId --→ ${e}`);
  }
};

// -----------------------------------------------

const modifyUser = async (data) => {
  //
  try {
    let {
      name,
      lastName,
      profilePicture,
      email, // No se modifica, es sólo para individualizar el usuario.
      //   isAdmin,

      city,
      webSite,
      linkedIn,
      gitHub,
      yearsOfExperience,
      dailyBudget,
      englishLevel,
      bio,

      visible,
      //   postulado,
      //   registrado,
      //   habilitado,
      //   reputacion,

      tarjeta_numero,
      tarjeta_nombreCompleto,
      tarjeta_vencimiento,
      tarjeta_codigoSeguridad,
      cbu,
      cvu,

      tecnologias,
      lenguajes,
      servicios,
      paiseId,
    } = data;

    let userMod = await Usuarios.update(
      { where: { email: email } },
      {
        name: capitalize(name) || "Anonymous",
        lastName: capitalize(lastName) || "Anonymous",
        profilePicture:
          profilePicture ||
          "https://cdn.discordapp.com/attachments/826954908258402374/1025122570074341518/anonymous.png",

        city: city || null,
        webSite: webSite || null,
        linkedIn: linkedIn || null,
        gitHub: gitHub || null,
        yearsOfExperience: yearsOfExperience || 1,
        dailyBudget: dailyBudget || 1,
        englishLevel: englishLevel || "N/A",
        bio: bio || null,

        visible,
        isAdmin: false,

        tarjeta_numero: tarjeta_numero || null,
        tarjeta_nombreCompleto: tarjeta_nombreCompleto || null,
        tarjeta_vencimiento: tarjeta_vencimiento || null,
        tarjeta_codigoSeguridad: tarjeta_codigoSeguridad || null,
        cbu: cbu || null,
        cvu: cvu || null,

        paiseId,
      }
      //
    );

    let modUsr = await Usuarios.findOne({
      where: {
        email: email,
      },
      include: [
        {
          model: Servicios,
          attributes: ["name"],
          through: { attributes: [] },
        },
        {
          model: Lenguajes,
          attributes: ["name"],
          through: { attributes: [] },
        },
        {
          model: Tecnologias,
          attributes: ["name"],
          through: { attributes: [] },
        },
      ],
    });

    modUsr.setTecnologias(tecnologias);
    modUsr.setLenguajes(lenguajes);
    modUsr.setServicios(servicios);

    return "Usuario modificado correctamente";
    //
  } catch (e) {
    //
    console.error(`${ERROR}modifyUser --→ ${e}`);
  }
};

// -----------------------------------------------

// DELETE USER
const deleteUser = async (id) => {
  try {
    let toDelete = await Usuarios.findByPk(id);
    await toDelete.destroy();
    console.log(`User (${id}) deleted successfully`);
    return `User (${id}) deleted successfully`;
  } catch (e) {
    console.error(`${ERROR}deleteUser --→ ${e}`);
  }
};

// -----------------------------------------------

module.exports = {
  getUsers,
  getUserById,
  deleteUser,
  getUserByName,
  postUserAuth,
  modifyUser,
  setSubscriptionId,
  getByEmail,
};
