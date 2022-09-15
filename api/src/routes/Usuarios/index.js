const { Router } = require("express");
const { Usuarios } = require("../../db.js");
const {
  getUsers,
  postUsers,
  getUserById,
} = require("../../controllers/Usuarios");

const router = Router();

const PATH = "/usuarios";

// -----------------------------------------------

router.get("/", async (req, res) => {
  try {
    let usuarios = await getUsers();
    res.json(usuarios);
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
});

router.get("/:id", async (req, res) => {
  try {
    let {name, lastName, profilePicture, isAdmin, email, linkedIn, gitHub, webSite, yearsOfExperience, dailyBudget, englishLevel, bio, city, tecnologias, lenguajes, servicios, paiseId} = req.body

    if(!name || !lastName || !email || !yearsOfExperience){

      res.send(400).json("Falta alguno de los campos importantes. Por favor revisar")

    }else{
      
    let usuario = await postUsers(name, lastName, profilePicture, isAdmin, email, linkedIn, gitHub, webSite, yearsOfExperience, dailyBudget, englishLevel, bio, city, tecnologias, lenguajes, servicios, paiseId)

    res.json(usuario)
    
    }
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
});

module.exports = router;
