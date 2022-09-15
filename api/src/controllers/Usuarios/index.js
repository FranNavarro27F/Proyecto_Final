const {
  Usuarios,
  Tecnologias,
  Lenguajes,
  Servicios,
  Paises,
} = require("../../db.js");
// const { Op } = require("sequelize");

const ERROR = "Error @ controllers/Usuarios";

// -----------------------------------------------

const getUsers = async () => {
  try {
    let usuarios = await Usuarios.findAll({
      include: [
        {
          model: Tecnologias,
          attributes: ["name"],
          through: { attributes: [] },
        },
        {
          model: Lenguajes,
          attributes: ["name"],
          through: { attributes: [] },
        },
        {
          model: Servicios,
          attributes: ["name"],
          through: { attributes: [] },
        },
      ],
    });

    let users = usuarios.map((curr) => {
      return {
        id: curr.id,
        profilePicture: curr.profilePicture ? curr.profilePicture : null,
        isAdmin: curr.isAdmin,
        name: curr.name,
        lastName: curr.lastName,
        email: curr.email,
        // country: curr.country,
        country: curr.paiseId,
        city: curr.city ? curr.city : null,
        linkedIn: curr.linkedIn ? curr.linkedIn : null,
        gitHub: curr.gitHub ? curr.gitHub : null,
        webSite: curr.webSite ? curr.webSite : null,
        yearsOfExperience: curr.yearsOfExperience,
        dailyBudget: curr.dailyBudget ? curr.dailyBudget : null,
        englishLevel: curr.englishLevel ? curr.englishLevel : null,
        bio: curr.bio ? curr.bio : null,
        tecnologias: curr.tecnologias?.map((curr) => curr.name),
        lenguajes: curr.lenguajes?.map((curr) => curr.name),
        servicios: curr.servicios?.map((curr) => curr.name),
      };
    });
    return users;
  } catch (e) {
    console.error(`ERROR @ controllers/getUsers --→ ${e}`);
  }
};

const postUsers = async (data) => {
  try {
    const {
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
      country,
      city,
      tecnologias,
      lenguajes,
      servicios,
      paiseId,
    } = data;

    const [row, created] = await Usuarios.findOrCreate({
      where: {
        email,
        linkedIn,
        gitHub,
      },
      defaults: {
        name,
        lastName,
        profilePicture,
        isAdmin,
        webSite,
        yearsOfExperience,
        dailyBudget,
        englishLevel,
        bio,
        country,
        city,
        paiseId,
      },
    });

    row.addTecnologias(tecnologias);
    row.addLenguajes(lenguajes);
    row.addServicios(servicios);

    if (!created) {
      throw new Error("El usuario ya existe");
    } else {
      return "Usuario creado correctamente";
    }
  } catch (e) {
    console.error(`ERROR @ controllers/postUsers --→ ${e}`);
  }
};

const getUserById = async (id) => {
  try {
    return await Usuarios.findByPk(id, {
      include: [
        {
          model: Tecnologias,
          attributes: ["name"],
          through: { attributes: [] },
        },
        {
          model: Lenguajes,
          attributes: ["name"],
          through: { attributes: [] },
        },
        {
          model: Servicios,
          attributes: ["name"],
          through: { attributes: [] },
        },
      ],
    });
  } catch (e) {
    console.error(`ERROR @ controllers/getUserById --→ ${e}`);
  }
};

module.exports = { getUsers, postUsers, getUserById };
