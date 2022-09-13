const { Router } = require("express");
const { Usuarios } = require("../../db.js");
const { getUsers, postUsers } = require("../../controllers/Usuarios");

const router = Router();

const PATH = "/usuarios";

// -----------------------------------------------


router.get('/', async (req, res) => {
  try {
  } catch (e) {
    console.error(`Error --→ ${e}`);
  }
});


router.post('/', async (req, res)=>{

  try {
    let {name, lastName, profilePicture, isAdmin, email, linkedIn, gitHub, webSite, yearsOfExperience, dailyBudget, englishLevel, bio, country, city, tecnologias, lenguajes} = req.body

    let usuario = await postUsers(name, lastName, profilePicture, isAdmin, email, linkedIn, gitHub, webSite, yearsOfExperience, dailyBudget, englishLevel, bio, country, city, tecnologias, lenguajes)

    res.json(usuario)
    
  } catch (e) {
    res.status(400).json({error: e.message});
  }

})

module.exports = router;