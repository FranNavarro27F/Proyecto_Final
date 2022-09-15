const { Router } = require("express");
const {
  guardarServiciosEnDB,
  todosLosServicios,
  deleteService,
} = require("../../controllers/Servicios");
const { Servicios } = require("../../db");

const router = Router();

// ----------------------------------

router.post("/", async (req, res) => {
  try {
    res.json(await guardarServiciosEnDB());
  } catch (e) {
    res.status(400).send(e);
  }
});

router.get("/", async (req, res) => {
  try {
    res.json(await todosLosServicios());
  } catch (e) {
    res.status(400).send(e);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await deleteService(id);
    res.send(`Service deleted successfully`);
  } catch (e) {
    res.status(400).send(e);
  }
});

module.exports = router;
