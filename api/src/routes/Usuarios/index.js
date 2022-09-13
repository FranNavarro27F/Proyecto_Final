const { Router } = require("express");
const { Usuarios } = require("../../db.js");
const { getUsers } = require("../../controllers/Usuarios");

const router = Router();

const PATH = "/usuarios";

// -----------------------------------------------


router.get('/', async (req, res) => {
  try {
  } catch (e) {
    console.error(`Error --→ ${e}`);
  }
});


module.exports = router;