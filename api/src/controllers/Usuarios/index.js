const { Usuarios, Tecnologias, Lenguajes } = require("../../db.js");
// const { Op } = require("sequelize");

const ERROR = "Error @ controllers/Usuarios";

// -----------------------------------------------


const getUsers = async () => {
  try {



  } catch (e) {}
};


const postUsers = async (name, lastName, profilePicture, isAdmin, email, linkedIn, gitHub, webSite, yearsOfExperience, dailyBudget, englishLevel, bio, country, city, tecnologias, lenguajes) =>{

    
    const [row, created] = await Usuarios.findOrCreate({where: {
      email, 
      linkedIn,
      gitHub,
      webSite,
    }, defaults:{
      name,
      lastName,
      profilePicture,
      isAdmin,
      yearsOfExperience,
      dailyBudget,
      englishLevel,
      bio,
      country,
      city
    }})

    row.addTecnologias(tecnologias)
    row.addLenguajes(lenguajes)

    if(!created){
      throw new Error("El usuario ya existe")
    }else{
    return "Usuario creado correctamente"
  }

}


module.exports = { getUsers, postUsers };
