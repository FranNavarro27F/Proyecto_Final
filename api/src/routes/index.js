const { Router } = require("express");

// Importar todos los routers;
const usuariosRouter = require("../routes/Usuarios/index.js");
const lenguajesRouter = require("../routes/Lenguajes/index.js");
const tecnologiasRouter = require("../routes/Tecnologias/index.js");
const paisesRouter = require("../routes/Paises/index.js");
const serviciosRouter = require("../routes/Servicios/index.js");
const contratosRouter = require("../routes/Contratos/index.js");
const stripeRouter = require("../routes/Stripe/Stripe");
const emailerRouter = require("../routes/Emailer/index");
const mercadopagoRouter = require("../routes/MercadoPago/MercadoPago");
const adminRouter = require("../routes/Admin/index");
const emailerPagoRouter= require("../routes/EmailerPago/index")
const router = Router();

// -----------------------------------------

router.use("/usuarios", usuariosRouter);
router.use("/lenguajes", lenguajesRouter);
router.use("/tecnologias", tecnologiasRouter);
router.use("/paises", paisesRouter);
router.use("/servicios", serviciosRouter);
router.use("/contratos", contratosRouter);
router.use("/checkout", stripeRouter);
router.use("/emailer", emailerRouter);
router.use("/emailerPago", emailerPagoRouter);
router.use("/pago", mercadopagoRouter);
router.use("/admin", adminRouter);

// -----------------------------------------

module.exports = router;
