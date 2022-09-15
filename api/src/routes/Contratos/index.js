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
    console.error(`Error --→ ${e}`);
  }
});

//hacer el delete por req.query

module.exports = router;