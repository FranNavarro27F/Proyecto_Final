const {
  Usuarios,
  Tecnologias,
  Lenguajes,
  Servicios,
  Paises,
  Contratos,
} = require("../../db.js");

const { traerPaisPorId } = require("../Paises");

const { Op } = require("sequelize");

const ERROR = "Error @ controllers/Usuarios/";

// -----------------------------------------------

// **** UTILS ****

// const capitalize = (nombre) => {
//   return nombre[0].toUpperCase() + nombre.slice(1).toLowerCase();
// };

// Capitalize retorna un string con cada palabra capitalizada
// Ej: jUaN pErEz --> Juan Perez
const capitalize = (str) => {
  return str
    .trim()
    .toLowerCase()
    .split(" ")
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(" ");
};

// const findUsers = async (props) => {
//   let usuarios = await Usuarios.findAll({
//     where: props,
//     include: [
//       {
//         model: Paises,
//         attributes: ["name"],
//       },
//       {
//         model: Servicios,
//         attributes: ["name"],
//         through: { attributes: [] },
//       },
//       {
//         model: Lenguajes,
//         attributes: ["name"],
//         through: { attributes: [] },
//       },
//       {
//         model: Tecnologias,
//         attributes: ["name"],
//         through: { attributes: [] },
//       },
//     ],
//   });
//   //
//   return usuarios.map((u) => {
//     const { dataValues: d } = u;
//     // let country = Paises.findByPk(u.paiseId)?.d.name;
//     //
//     return {
//       id: d.id,
//       profilePicture:
//         d.profilePicture ||
//         "https://cdn.discordapp.com/attachments/826954908258402374/1025122570074341518/anonymous.png",
//       name: capitalize(d.name) || "Anonymous",
//       lastName: capitalize(d.lastName) || "Anonymous",
//       email: d.email,
//       // isAdmin: d.isAdmin,

//       // city: d.city,
//       linkedIn: d.linkedIn,
//       gitHub: d.gitHub,
//       webSite: d.webSite,

//       yearsOfExperience: d.yearsOfExperience,
//       dailyBudget: d.dailyBudget,
//       englishLevel: d.englishLevel,
//       bio: d.bio,

//       // postulado: d.postulado,
//       // registrado: d.registrado,
//       visible: d.visible,
//       habilitado: d.habilitado,
//       premium: d.premium,
//       reputacion: d.reputacion,

//       // tarjeta_numero: d.tarjeta_numero,
//       // tarjeta_nombreCompleto: d.tarjeta_nombreCompleto,
//       // tarjeta_vencimiento: d.tarjeta_vencimiento,
//       // tarjeta_codigoSeguridad: d.tarjeta_codigoSeguridad,
//       // cbu: d.cbu,
//       // cvu: d.cvu,

//       paiseId: d.paiseId || "",
//       servicios: d.servicios
//         ? d.servicios.map((cur) => cur.dataValues).map((cur) => cur.name)
//         : [],
//       lenguajes: d.lenguajes
//         ? d.lenguajes.map((cur) => cur.dataValues).map((cur) => cur.name)
//         : [],
//       tecnologias: d.tecnologias
//         ? d.tecnologias.map((cur) => cur.dataValues).map((cur) => cur.name)
//         : [],
//     };
//   });
// };

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

  //   let country = Paises.findByPk(u.paiseId).d.name;
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

    paiseId: d.paiseId || "",
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
  try {
    let usuarios = await Usuarios.findAll({
      where: {
        habilitado: true,
        visible: true,
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

    let arrUsers = usuarios.map((cur) => cur.dataValues);
    let arrUsersListo = arrUsers.map(async (cur) => {
      return {
        id: cur.id,
        profilePicture: cur.profilePicture,
        isAdmin: cur.isAdmin,
        name: cur.name ? (cur.name = capitalize(cur.name)) : (cur.name = []),
        lastName: cur.lastName
          ? (cur.lastName = capitalize(cur.lastName))
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
        premium: cur.premium,
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

    return await Promise.all(arrUsersListo);
    //
  } catch (e) {
    console.error(`${ERROR}getUsers --→ ${e}`);
  }
};

// -----------------------------------------------

// GET PREMIUM USERS
const getPremiumUsers = async () => {
  //
  try {
    let usuarios = await Usuarios.findAll({
      where: {
        habilitado: true,
        visible: true,
        premium: true,
      },
      include: [
        {
          model: Servicios,
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
        name: cur.name ? (cur.name = capitalize(cur.name)) : (cur.name = []),
        lastName: cur.lastName
          ? (cur.lastName = capitalize(cur.lastName))
          : (cur.lastName = []),
        email: cur.email,
        linkedIn: cur.linkedIn,
        gitHub: cur.gitHub,
        webSite: cur.webSite,
        servicios: cur.servicios
          ? cur.servicios.map((cur) => cur.dataValues).map((cur) => cur.name)
          : [],
      };
    });

    return await Promise.all(arrUsersListo);
    //
  } catch (e) {
    console.error(`${ERROR}getPremiumUsers --→ ${e}`);
  }
};

// -----------------------------------------------

// GET USER (BY ID) → DETAILS
const getUserById = async (id) => {
  //
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
    userM.contratos = userM.contratos.filter((cur) => {
      if (cur.habilitado === true) {
        return true;
      }
      if (cur.habilitado === false) {
        return false;
      }
    });

    //-----esta funcion se encarga de calcular el promedio de puntuacion de un usuario--
    const promedio = (arrContratos) => {
      let contratos_con_puntuacion = arrContratos.length
        ? arrContratos.filter((cur) => {
            if (cur.comentario && cur.comentario.length) {
              return true;
            }
          })
        : [];

      if (contratos_con_puntuacion.length) {
        let cantidad_de_puntuaciones = contratos_con_puntuacion.length;
        let array_de_puntuaciones = contratos_con_puntuacion.map(
          (cur) => cur.puntuacion
        );
        let suma_de_puntuaciones = array_de_puntuaciones.reduce(
          (acc, cur) => acc + cur
        );

        return suma_de_puntuaciones / cantidad_de_puntuaciones;
        //si quieren numero redondo-->
        //return Math.round(suma_de_puntuaciones / cantidad_de_puntuaciones)
      } else {
        return 1.0;
      }
    };

    userM.reputacion = promedio(userM.contratos);

    return userM;
    //
  } catch (e) {
    console.error(`ERROR @ controllers/getUserById --→ ${e}`);
  }
};

// -----------------------------------------------

// GET USER (BY NAME)
const getUserByName = async (name) => {
  //
  try {
    return await findUser({
      habilitado: true,
      visible: true,
      name: { [Op.iLike]: `%${name}%` },
    });
    //
  } catch (e) {
    console.error(`${ERROR}getUserByName --→ ${e}
Causa probable del error: El usuario no se encuentra visible y/o habilitado.`);
  }
};

// -----------------------------------------------

// GET USER (BY EMAIL)
const getByEmail = async (email) => {
  //
  try {
    let User = await Usuarios.findOne({
      where: {
        email,
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
    console.error(`${ERROR}getByEmail --→ ${e}`);
  }
};

// -----------------------------------------------

// POST USER WITH AUTH0 CREDENTIALS
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
const setSubscriptionId = async (id, subscription_id, status) => {
  //
  try {
    const user = await Usuarios.findByPk(id);
    user.subscription_id = subscription_id || null;
    if (!subscription_id) status = null;
    user.premium = status === "authorized" ? true : false;

    await user.save();
    return `Al usuario ${user.email} le fue asignada la suscripción: ${subscription_id}`;
    //
  } catch (e) {
    console.error(`${ERROR}setSubscriptionId --→ ${e}`);
  }
};

// -----------------------------------------------

// SET VISIBLE
const setVisible = async (id, visible) => {
  //
  try {
    typeof visible === "boolean";
    const user = await Usuarios.findByPk(id);
    user.visible = visible;

    await user.save();
    return `El usuario ${user.email} ahora es ${
      visible ? "visible" : "invisible"
    }.`;
    //
  } catch (e) {
    typeof visible !== "boolean"
      ? console.error(`"visible" debe ser un boolean.`)
      : console.error(`${ERROR}setVisible --→ ${e}`);
  }
};

// -----------------------------------------------

const modifyUser = async (email, data) => {
  //
  try {
    const {
      profilePicture,
      //   isAdmin,
      name,
      lastName,
      city,
      linkedIn,
      gitHub,
      webSite,
      yearsOfExperience,
      dailyBudget,
      englishLevel,
      bio,
      postulado,
      tarjeta_numero,
      tarjeta_nombreCompleto,
      tarjeta_vencimiento,
      tarjeta_codigoSeguridad,
      cbu,
      cvu,
      //   visible,
      //   postulado,
      paiseId,
      servicios,
      lenguajes,
      tecnologias,
    } = data;

    // --------------------------------------------

    // SI EL FORMULARIO DEL FRONT NO TOMA VALORES PREVIOS:
    // ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓

    const u = await getByEmail(email);

    await Usuarios.update(
      {
        profilePicture: profilePicture ?? u.profilePicture,
        // isAdmin: isAdmin ?? u.isAdmin,
        name: name,
        lastName: lastName,
        city: city ?? u.city,
        linkedIn: linkedIn ?? u.linkedIn,
        gitHub: gitHub ?? u.gitHub,
        webSite: webSite ?? u.webSite,
        yearsOfExperience: yearsOfExperience ?? u.yearsOfExperience,
        dailyBudget: dailyBudget ?? u.dailyBudget,
        englishLevel: englishLevel ?? u.englishLevel,
        bio: bio ?? u.bio,
        postulado: postulado ?? u.postulado,
        tarjeta_numero: tarjeta_numero ?? u.tarjeta_numero,
        tarjeta_nombreCompleto:
          tarjeta_nombreCompleto?.toUpperCase() ?? u.tarjeta_nombreCompleto,
        tarjeta_vencimiento: tarjeta_vencimiento ?? u.tarjeta_vencimiento,
        tarjeta_codigoSeguridad:
          tarjeta_codigoSeguridad ?? u.tarjeta_codigoSeguridad,
        cbu: cbu ?? u.cbu,
        cvu: cvu ?? u.cvu,
        // visible,
        // postulado,
        paiseId,
        // paiseId: paiseId ?? c.id,
      },
      {
        where: { email },
      }
    );

    // --------------------------------------------

    // SI EL FORMULARIO DEL FRONT TOMA VALORES PREVIOS:
    // ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓

    // await Usuarios.update(
    //   {
    //     profilePicture: profilePicture ?? null,
    //     isAdmin: isAdmin ?? null,
    //     name: name,
    //     lastName: lastName,
    //     city: city ?? null,
    //     linkedIn: linkedIn ?? null,
    //     gitHub: gitHub ?? null,
    //     webSite: webSite ?? null,
    //     yearsOfExperience: yearsOfExperience ?? null,
    //     dailyBudget: dailyBudget ?? null,
    //     englishLevel: englishLevel ?? null,
    //     bio: bio ?? null,
    //     tarjeta_numero: tarjeta_numero ?? null,
    //     tarjeta_nombreCompleto:
    //       tarjeta_nombreCompleto?.toUpperCase() ?? null,
    //     tarjeta_vencimiento: tarjeta_vencimiento ?? null,
    //     tarjeta_codigoSeguridad:
    //       tarjeta_codigoSeguridad ?? null,
    //     cbu: cbu ?? null,
    //     cvu: cvu ?? null,
    //     // visible,
    //     // postulado,
    //     paiseId,
    //     // paiseId: paiseId ?? c.id,
    //   },
    //   {
    //     where: { email },
    //   }
    // );

    // // --------------------------------------------

    let modUsr = await Usuarios.findOne({
      where: {
        email,
      },
      include: [
        {
          model: Servicios,
          attributes: ["id"],
          through: { attributes: [] },
        },
        {
          model: Lenguajes,
          attributes: ["id"],
          through: { attributes: [] },
        },
        {
          model: Tecnologias,
          attributes: ["id"],
          through: { attributes: [] },
        },
      ],
    });

    if (servicios) modUsr.setServicios(servicios);
    if (lenguajes) modUsr.setLenguajes(lenguajes);
    if (tecnologias) modUsr.setTecnologias(tecnologias);

    return modUsr;
    //
  } catch (e) {
    console.error(`${ERROR}modifyUser --→ ${e}`);
  }
};
// -----------------------------------------------

// DELETE USER

const deleteUser = async (id) => {
  //
  try {
    let toDelete = await Usuarios.findByPk(id);
    await toDelete.destroy();
    return `User (${id}) deleted successfully`;
    //
  } catch (e) {
    console.error(`${ERROR}deleteUser --→ ${e}`);
  }
};

// -----------------------------------------------

module.exports = {
  getUsers,
  getPremiumUsers,
  getUserById,
  deleteUser,
  getUserByName,
  postUserAuth,
  modifyUser,
  setSubscriptionId,
  setVisible,
  getByEmail,
};
