const {
  Usuarios,
  Tecnologias,
  Lenguajes,
  Servicios,
  Paises,
  Contratos
} = require("../../db.js");

const { Op } = require("sequelize");

const ERROR = "Error @ controllers/Usuarios";

// -----------------------------------------------

const getUsers = async () => {
  try {
    let usuarios = await Usuarios.findAll({
      //     where: {
      //     habilitado: true,
      //     visible: true,
      //   },
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

    let arrUsers = usuarios.map((cur) => cur.dataValues);
    let arrUsersListo = arrUsers.map(async (cur) => {
      return {
        id: cur.id,
        profilePicture: cur.profilePicture,
        isAdmin: cur.isAdmin,
        name: cur.name ? (cur.name = toUperCase(cur.name)) : (cur.name = []),
        lastName: cur.lastName
          ? (cur.lastName = toUperCase(cur.lastName))
          : (cur.lastName = []),
        email: cur.email,
        city: cur.city,
        linkedIn: cur.linkedIn,
        gitHub: cur.gitHub,
        webSite: cur.webSite,
        yearsOfExperience: cur.yearsOfExperience,
        dailyBudget: cur.dailyBudget,
        englishLevel: cur.englishLevel,
        bio: cur.bio,
        visible: cur.visible,
        postulado: cur.postulado,
        registrado: cur.registrado,
        habilitado: cur.habilitado,
        tarjeta_numero: cur.tarjeta_numero,
        tarjeta_nombreCompleto: cur.tarjeta_nombreCompleto,
        tarjeta_vencimiento: cur.tarjeta_vencimiento,
        tarjeta_codigoSeguridad: cur.tarjeta_codigoSeguridad,
        cbu: cur.cbu,
        cvu: cur.cvu,
        reputacion: cur.reputacion,
        paiseId: cur.paise ? cur.paise.dataValues.name : "",
        servicios: cur.servicios
          ? cur.servicios.map((cur) => cur.dataValues).map((cur) => cur.name)
          : [],
        lenguajes: cur.lenguajes
          ? cur.lenguajes.map((cur) => cur.dataValues).map((cur) => cur.name)
          : [],
        tecnologias: cur.tecnologias
          ? cur.tecnologias.map((cur) => cur.dataValues).map((cur) => cur.name)
          : [],
      };
    });
    console.log(Promise.all(arrUsersListo), "******");
    return await Promise.all(arrUsersListo);
  } catch (e) {
    console.error(`ERROR @ controllers/getUsers --→ ${e}`);
  }
};

const postUsers = async (data) => {
  // try {
  //   const {
  //     name,
  //     lastName,
  //     profilePicture,
  //     isAdmin,
  //     email,
  //     linkedIn,
  //     gitHub,
  //     webSite,
  //     yearsOfExperience,
  //     dailyBudget,
  //     englishLevel,
  //     bio,
  //     city,
  //     tecnologias,
  //     lenguajes,
  //     servicios,
  //     paiseId,
  //     registrado,
  //     visible,
  //     postulado,
  //     reputacion,
  //   } = data;
  //   const [row, created] = await Usuarios.findOrCreate({
  //     where: {
  //       email,
  //       linkedIn: linkedIn !== "" ? linkedIn : null,
  //       gitHub: gitHub !== "" ? gitHub : null,
  //     },
  //     defaults: {
  //       name,
  //       lastName,
  //       profilePicture: profilePicture !== "" ? profilePicture : null,
  //       isAdmin,
  //       webSite: webSite !== "" ? webSite : null,
  //       yearsOfExperience,
  //       dailyBudget: dailyBudget !== "" ? dailyBudget : null,
  //       englishLevel: englishLevel !== "" ? englishLevel : null,
  //       bio: bio !== "" ? bio : null,
  //       paiseId,
  //       city: city !== "" ? city : null,
  //       registrado,
  //       visible,
  //       postulado,
  //       reputacion,
  //     },
  //   });
  //   row.addTecnologias(tecnologias);
  //   row.addLenguajes(lenguajes);
  //   row.addServicios(servicios);
  //   if (!created) {
  //     throw new Error("El usuario ya existe");
  //   } else {
  //     return "Usuario creado correctamente";
  //   }
  //   //
  // } catch (e) {
  //   console.error(`ERROR @ controllers/postUsers --→ ${e}`);
  // }
};

const toUperCase = (nombre) => {
  let nombree = nombre[0].toUpperCase() + nombre.slice(1);
  return nombree;
};

const getUserById = async (id) => {
  try {
    let User = await Usuarios.findByPk(id, {
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
        }
      ],
    });

    let userM = User?.dataValues;

    let nombrePais = (await Paises.findByPk(userM.paiseId))?.dataValues.name;
  
    userM.paiseId = nombrePais;
    userM.name = toUperCase(userM.name);
    userM.lastName = toUperCase(userM.lastName);
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
  } catch (e) {
    console.error(`ERROR @ controllers/getUserById --→ ${e}`);
  }
};

const deleteUser = async (id) => {
  try {
    let toDelete = await Usuarios.findByPk(id);
    await toDelete.destroy();
    console.log(`User (${id}) deleted successfully`);
    return `User (${id}) deleted successfully`;
  } catch (e) {
    console.error(`ERROR @ controllers/deleteUser --→ ${e}`);
  }
};

const getUserByName = async (name) => {
  try {
    let userByName = await Usuarios.findAll({
      where: {
        // habilitado: true,
        // visible: true,
        name: { [Op.iLike]: `%${name}%` },
      },
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

    let arrUsers = userByName.map((cur) => cur.dataValues);
    let arrUsersListo = arrUsers.map(async (cur) => {
      return {
        id: cur.id,
        profilePicture: cur.profilePicture,
        isAdmin: cur.isAdmin,
        name: cur.name ? (cur.name = toUperCase(cur.name)) : (cur.name = []),
        lastName: cur.lastName
          ? (cur.lastName = toUperCase(cur.lastName))
          : (cur.lastName = []),
        email: cur.email,
        city: cur.city,
        linkedIn: cur.linkedIn,
        gitHub: cur.gitHub,
        webSite: cur.webSite,
        yearsOfExperience: cur.yearsOfExperience,
        dailyBudget: cur.dailyBudget,
        englishLevel: cur.englishLevel,
        bio: cur.bio,
        visible: cur.visible,
        postulado: cur.postulado,
        registrado: cur.registrado,
        reputacion: cur.reputacion,
        paiseId: cur.paise ? cur.paise.dataValues.name : "",
        servicios: cur.servicios
          ? cur.servicios.map((cur) => cur.dataValues).map((cur) => cur.name)
          : [],
        lenguajes: cur.lenguajes
          ? cur.lenguajes.map((cur) => cur.dataValues).map((cur) => cur.name)
          : [],
        tecnologias: cur.tecnologias
          ? cur.tecnologias.map((cur) => cur.dataValues).map((cur) => cur.name)
          : [],
      };
    });
    return await Promise.all(arrUsersListo);
  } catch (e) {
    console.error(`ERROR @ controllers/getUserByName --→ ${e}`);
  }
};

const postUserAuth = async (data) => {
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
      },
    });

    if (!created) {
      throw new Error("El usuario ya existe");
    } else {
      return "Usuario creado correctamente";
    }
  } catch (e) {
    console.error(`ERROR @ controllers/postUserAuth --→ ${e}`);
  }
};

const modifUser = async (data) => {
  try {
    let {
      name,
      lastName,
      profilePicture,
      isAdmin,
      email,
      linkedIn,
      gitHub,
      webSite,
      yearsOfExperience,
      dailyBudget,
      englishLevel,
      bio,
      visible,
      postulado,
      registrado,
      habilitado,
      reputacion,
      city,
      tecnologias,
      lenguajes,
      servicios,
      paiseId,
    } = data;

    let userMod = await Usuarios.update(
      {
        name: name ? (name = toUperCase(name)) : (name = []),
        lastName: lastName
          ? (lastName = toUperCase(lastName))
          : (lastName = []),
        linkedIn: linkedIn !== "" ? linkedIn : null,
        gitHub: gitHub !== "" ? gitHub : null,
        profilePicture: profilePicture !== "" ? profilePicture : null,
        isAdmin,
        webSite: webSite !== "" ? webSite : null,
        yearsOfExperience: yearsOfExperience !== "" ? yearsOfExperience : 1,
        dailyBudget: dailyBudget !== "" ? dailyBudget : 1,
        englishLevel: englishLevel !== "" ? englishLevel : null,
        bio: bio !== "" ? bio : null,
        paiseId,
        city: city !== "" ? city : null,
        registrado,
        habilitado: habilitado ? habilitado : true,
        visible,
        postulado,
        reputacion: reputacion !== "" ? reputacion : 1,
      },
      { where: { email: email } }
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
    console.error(`ERROR @ controllers/modifUser --→ ${e}`);
  }
};

const getByEmail = async (email) => {
  try {
    let userEmail = await Usuarios.findOne({
      where: {
        email,
        // habilitado: true,
      },
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

    let useEmail = (await userEmail).dataValues;

    return {
      id: useEmail.id,
      profilePicture: useEmail.profilePicture,
      isAdmin: useEmail.isAdmin,
      name: useEmail.name,
      lastName: useEmail.lastName,
      email: useEmail.email,
      city: useEmail.city,
      linkedIn: useEmail.linkedIn,
      gitHub: useEmail.gitHub,
      webSite: useEmail.webSite,
      yearsOfExperience: useEmail.yearsOfExperience,
      dailyBudget: useEmail.dailyBudget,
      englishLevel: useEmail.englishLevel,
      bio: useEmail.bio,
      visible: useEmail.visible,
      postulado: useEmail.postulado,
      registrado: useEmail.registrado,
      reputacion: useEmail.reputacion,
      paiseId: useEmail.paise ? useEmail.paise.dataValues.name : "",
      servicios: useEmail.servicios
        ? useEmail.servicios.map((cur) => cur.dataValues).map((cur) => cur.name)
        : [],
      lenguajes: useEmail.lenguajes
        ? useEmail.lenguajes.map((cur) => cur.dataValues).map((cur) => cur.name)
        : [],
      tecnologias: useEmail.tecnologias
        ? useEmail.tecnologias
            .map((cur) => cur.dataValues)
            .map((cur) => cur.name)
        : [],
    };
  } catch (e) {
    console.error(`ERROR @ controllers/getByEmail --→ ${e}`);
  }
};

module.exports = {
  getUsers,
  postUsers,
  getUserById,
  deleteUser,
  getUserByName,
  postUserAuth,
  modifUser,
  getByEmail,
};
