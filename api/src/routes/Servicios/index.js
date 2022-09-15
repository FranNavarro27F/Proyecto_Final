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
    res.status(404).send(`Error --→ ${e}`);
  }
});

router.get("/", async (req, res) => {
  try {
    res.json(await todosLosServicios());
  } catch (e) {
    res.status(404).send(`Error --→ ${e}`);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    res.json(await deleteService(id));
  } catch (e) {
    res.status(404).send(`Error --→ ${e}`);
  }
});
// const deleteUser = async (id) => {
//   try {
//     let toDelete= await Usuarios.findByPk(id);
//     await toDelete.destroy();
//     console.log(`User (${id}) deleted successfully`);
//     return `User (${id}) deleted successfully`;
//   } catch (e) {
//     console.error(`ERROR @ controllers/getUserById --→ ${e}`);
//   }
// }

module.exports = router;
