const { Router } = require("express");
const {} = require("../../controllers/Tecnologias");
const { Tecnologias } = require("../db");
const { saveTechnologies } = require("../../controllers/Tecnologias");

const router = Router();

// -----------------------------------------------

// Guardar Tecnologias en la DB
router.get("/tecnologias", async (req, res) => {
  try {
    const { Lenguajes } = req.body;
    const save = await saveTechnologies(Lenguajes);
    return res.json(save);
  } catch (e) {
    console.error(`Error --→ ${e}`);
  }
});
