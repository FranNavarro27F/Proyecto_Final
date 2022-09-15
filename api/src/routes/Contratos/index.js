const { Router } = require("express");
const { Contratos } = require("../../db");
const { getContratos } = require("../../controllers/Contratos");

const router = Router();

const PATH = "/contratos";

// -----------------------------------------------

// Ejemplo 1
router.get(PATH, async (req, res) => {
  try {
    
  } catch (e) {
    res.status(404).send(`Error --→ ${e}`);
  }
});

//hacer el delete por req.params

module.exports = router;
