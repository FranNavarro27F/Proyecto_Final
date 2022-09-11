const { Router } = require("express");
const { Usuarios } = require("../db");
const { getUsers } = require("../../controllers/Usuarios");

const router = Router();

const PATH = "/usuarios";

// -----------------------------------------------

// Ejemplo 1
router.get(PATH, async (req, res) => {
  try {
  } catch (e) {
    console.error(`Error --→ ${e}`);
  }
});
