const { Router } = require("express");
const { Tecnologias } = require("../../db");
const {
  todasLasTecnologias,
  guardarTecnologiasDB,
  eliminarTecnologia,
} = require("../../controllers/Tecnologias/index.js");

const router = Router();

// -----------------------------------------------

router.post("/", async (req, res) => {
  //
  try {
    let { tecnologias } = req.body;
    res.json(await guardarTecnologiasDB(tecnologias));
    //
  } catch (e) {
    res.status(404).send(`Error --→ ${e}`);
  }
});

// -----------------------------------------------

router.get("/", async (req, res) => {
  //
  try {
    res.json(await todasLasTecnologias());
    //
  } catch (e) {
    res.status(404).send(`Error --→ ${e}`);
  }
});

// -----------------------------------------------

router.delete("/:id", async (req, res) => {
  //
  try {
    let { id } = req.params;
    res.json(await eliminarTecnologia(id));
    //
  } catch (e) {
    res.status(404).send(`Error --→ ${e}`);
  }
});

// -----------------------------------------------

module.exports = router;
