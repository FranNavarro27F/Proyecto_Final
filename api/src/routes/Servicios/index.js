const { Router } = require("express");
const {} = require("../../controllers/Servicios");
const { Servicios } = require("../../db");

const router = Router();

const PATH = "/servicios";

// -----------------------------------------------

// Ejemplo 1
router.get(PATH, async (req, res) => {
  try {
  } catch (e) {
    console.error(`Error --→ ${e}`);
  }
});



module.exports = router;