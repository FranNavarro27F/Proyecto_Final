const { Router } = require("express");
const { guardarServiciosEnDB, todosLosServicios } = require("../../controllers/Servicios");
const { Servicios } = require("../../db");

const router = Router();

const PATH = "/servicios";


router.post('/', async (req, res)=>{
  try {
    res.json(await guardarServiciosEnDB())
  } catch (e) {
    res.status(400).json({error: e.message})
  }
});

router.get('/', async (req, res) => {
  try {
    res.json(await todosLosServicios());
  } catch (e) {
    res.status(400).json({error: e.message});
  }
});



module.exports = router;