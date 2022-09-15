const { Router } = require("express");
const { Tecnologias } = require("../../db");
const {todasLasTecnologias, guardarTecnologiasDB, eliminarTecnologia}= require("../../controllers/Tecnologias/index.js");

// const { saveTechnologies } = require("../../controllers/Tecnologias");

const router = Router();

// -----------------------------------------------


router.post("/", async (req, res)=>{
  try {
    let {tecnologias}= req.body;
    res.json(await guardarTecnologiasDB(tecnologias))
  } catch (e) {
    console.log(e)
    res.status(400).json({error: e.message});
  }
});

router.get("/", async (req, res)=>{
  try {
    res.json(await todasLasTecnologias())
  } catch (e) {
    res.status(400).json({error: e.message})
  }
});

router.delete("/", async (req, res)=>{
  try {
    let {id}= req.params;
    res.json(eliminarTecnologia(id))
  } catch (e) {
    res.status(400).send(e);
  }
})



module.exports = router; 
