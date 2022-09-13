const { Router } = require("express");
const { Tecnologias } = require("../../db");
const { saveTechnologies } = require("../../controllers/Tecnologias");

const router = Router();

// -----------------------------------------------

// Guardar Tecnologias en la DB
router.get("/tecnologias", async (req, res) => {
  try {
    const { Technologies } = req.body;
    const save = await saveTechnologies(Technologies);
    return res.json(save);
  } catch (e) {
    console.error(`Error --→ ${e}`);
  }
});


module.exports = router;