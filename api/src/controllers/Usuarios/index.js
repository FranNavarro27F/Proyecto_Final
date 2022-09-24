const {
  Usuarios,
  Tecnologias,
  Lenguajes,
  Servicios,
  Paises,
} = require("../../db.js");

const { Op } = require("sequelize");

const ERROR = "Error @ controllers/Usuarios";

// -----------------------------------------------

const getUsers = async () => {
  try {
    let usuarios = await Usuarios.findAll({
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
      city,
      tecnologias,
      lenguajes,
      servicios,
      paiseId,
    } = data;

    const [row, created] = await Usuarios.findOrCreate({
      where: {
        email,
        linkedIn: linkedIn !== "" ? linkedIn : null,
        gitHub: gitHub !== "" ? gitHub : null,
      },
      defaults: {
        name,
        lastName,
        profilePicture: profilePicture !== "" ? profilePicture : null,
        isAdmin: false,
        webSite: webSite !== "" ? webSite : null,
        yearsOfExperience,
        dailyBudget: dailyBudget !== "" ? dailyBudget : null,
        englishLevel: englishLevel !== "" ? englishLevel : null,
        bio: bio !== "" ? bio : null,
        paiseId,
        city: city !== "" ? city : null,
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
      ],
    });

    let userM = User.dataValues;
    let nombrePais = (await Paises.findByPk(userM.paiseId)).dataValues.name;
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

    console.log(userM);

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
    console.error(`ERROR @ controllers/getUserById --→ ${e}`);
  }
};

const getUserByName = async (name) => {
  try {
    let userByName = await Usuarios.findAll({
      where: {
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

const postUserAuth = async (data)=>{
    try {
      
      let {email, family_name, given_name, picture, isAdmin} = data

      const [row, created] = await Usuarios.findOrCreate({
        where: {
          email
        },
        defaults: {
          name: given_name,
          lastName: family_name,
          profilePicture: picture,
          isAdmin: isAdmin
        }
      })

      if (!created) {
        throw new Error("El usuario ya existe");
      } else {
        return "Usuario creado correctamente";
      }

    } catch (e) {
      console.error(`ERROR @ controllers/postUserAuth --→ ${e}`);
    }
}


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
      city,
      tecnologias,
      lenguajes,
      servicios,
      paiseId} = data


      // let userMod = await Usuarios.findByPk(idUs)

      // if(name) userMod.name = name
      // if(lastName) userMod.lastName = lastName
      // if(profilePicture) userMod.profilePicture = profilePicture
      // if(linkedIn) userMod.linkedIn = linkedIn
      // if(gitHub) userMod.gitHub = gitHub
      // if(webSite) userMod.webSite = webSite
      // if(yearsOfExperience) userMod.yearsOfExperience = yearsOfExperience
      // if(dailyBudget) userMod.dailyBudget = dailyBudget
      // if(englishLevel) userMod.englishLevel = englishLevel
      // if(bio) userMod.bio = bio
      // if(city) userMod.city = city
      // if(paiseId) userMod.paiseId = paiseId
     
      let userMod = await Usuarios.update({
        name: name ? name = toUperCase(name) : name = [],
        lastName: lastName ? lastName = toUperCase(lastName) : lastName = [],
        profilePicture,
        isAdmin,
        linkedIn,
        gitHub,
        webSite,
        yearsOfExperience,
        dailyBudget,
        englishLevel,
        bio,
        city,
        paiseId
      }, {where: {email: email}})

      // userMod.addLenguajes(lenguajes)
      // userMod.addServicios(servicios)
      // userMod.addTecnologias(tecnologias)

      return userMod
  } catch (e) {
    console.error(`ERROR @ controllers/modifUser --→ ${e}`);
  }


}


const getByEmail = async (email) => {
  try {
    let userEmail = await Usuarios.findOne({
      where: {
        email: email,
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

    return await userEmail
  } catch (e) {
    console.error(`ERROR @ controllers/getUserByName --→ ${e}`);
  }
}


module.exports = {
  getUsers,
  postUsers,
  getUserById,
  deleteUser,
  getUserByName,
  postUserAuth,
  modifUser,
  getByEmail
};

