const { Router } = require("express");
const { Lenguajes } = require("../db");
const { saveLanguages } = require("../../controllers/Lenguajes");

const router = Router();

const PATH = "/lenguajes";

// -----------------------------------------------

// Guardar Lenguajes Iniciales en la DB
router.post(PATH, async (req, res) => {
  try {
    const { Languages } = req.body;
    const save = await saveLanguages(Languages);
    return res.json(save);
  } catch (e) {
    console.error(`Error --→ ${e}`);
  }
});

// Guardar un nuevo lenguaje en la DB
router.post(PATH, async (req, res) => {});

// Ver JSON de todos los lenguajes de programación
router.get(PATH, async (req, res) => {});

// Modificar un lenguaje de la DB
router.put(`${PATH}/:id`, async (req, res) => {});

// Eliminar un lenguaje de la DB
router.delete(`${PATH}/:id`, async (req, res) => {});
