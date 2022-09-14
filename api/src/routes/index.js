const { Router } = require("express");

// Importar todos los routers;
const usuariosRouter = require("../routes/Usuarios/index.js");
const lenguajesRouter = require("../routes/Lenguajes/index.js");
const tecnologiasRouter = require("../routes/Tecnologias/index.js");
const paisesRouter = require("../routes/Paises/index.js");
const serviciosRouter = require("../routes/Servicios/index.js");
const contratosRouter = require("../routes/Contratos/index.js");

const router = Router();

// -----------------------------------------

router.use("/usuarios", usuariosRouter);
router.use("/lenguajes", lenguajesRouter);
router.use("/tecnologias", tecnologiasRouter);
router.use("/paises", paisesRouter);
router.use("/servicios", serviciosRouter);
router.use("/contratos", contratosRouter);

module.exports = router;
