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
    res.status(400).send(`Error --→ ${e}`);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    res.json(await getUserById(id));
  } catch (e) {
    res.status(404).send(`Error --→ ${e}`);
  }
});

router.post("/", async (req, res) => {
  try {
    let { name, lastName, email, yearsOfExperience, paiseId } = req.body;

<<<<<<< HEAD
    if(!name || !lastName || !email || !paiseId || !yearsOfExperience){
=======
    if (!name || !lastName || !email || !paiseId || !yearsOfExperience) {
      res.sendStatus(400)
        // .json("Falta alguno de los campos importantes. Por favor revisar");
    } else {
      let usuario = await postUsers(req.body);
>>>>>>> ba15329779b62af8b5db70bde408e180af2c1541

      res.json(usuario);
    }
  } catch (e) {
    res.status(400).send(`Error --→ ${e}`);
  }
});

module.exports = router;
