const { Usuarios, Tecnologias, Lenguajes, Paises } = require("../../db.js");
// const { Op } = require("sequelize");

const ERROR = "Error @ controllers/Usuarios";

// -----------------------------------------------


const getUsers = async () => {
  try {

    let usuarios = await Usuarios.findAll({
      include:[{
        model: Tecnologias,
        attributes: ['name'],
        through:{
          attributes: []
      }
      },{
        model: Lenguajes,
        attributes: ['name'],
        through:{
          attributes: []
      }
      }]
    })

    return usuarios

  } catch (e) {}
};


const postUsers = async (name, lastName, profilePicture, isAdmin, email, linkedIn, gitHub, webSite, yearsOfExperience, dailyBudget, englishLevel, bio, country, city, tecnologias, lenguajes, paiseId) =>{

    
    const [row, created] = await Usuarios.findOrCreate({where: {
      email, 
      linkedIn,
      gitHub

    }, defaults:{
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
      paiseId
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
