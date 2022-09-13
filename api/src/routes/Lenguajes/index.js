const { Router } = require("express");
const { Lenguajes } = require("../../db");
const { saveLanguages, getLanguages } = require("../../controllers/Lenguajes");

const router = Router();

const PATH = "/lenguajes";

// -----------------------------------------------

// Guardar Lenguajes Iniciales en la DB
router.post('/', async (req, res) => {
  try {
    const { languages } = req.body;
    res.json(await saveLanguages(languages));

  } catch (e) {
    res.status(400).json({error: e.message});
   
  }
});

// Guardar un nuevo lenguaje en la DB
router.post('/', async (req, res) => {});

// Ver JSON de todos los lenguajes de programación
router.get('/', async (req, res) => {

  try {
    
    let lenguajes = await getLanguages()
    res.json(lenguajes)

  } catch (e) {
    console.error(`Error --→ ${e}`);
  }

});

// Modificar un lenguaje de la DB
router.put('/:id', async (req, res) => {});

// Eliminar un lenguaje de la DB
router.delete('/:id', async (req, res) => {});


module.exports = router;