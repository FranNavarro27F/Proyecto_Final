const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const usuariosRouter = require('../routes/Usuarios/index.js')
const lenguajesRouter = require('../routes/Lenguajes/index.js')
const tecnologiasRouter= require('../routes/Tecnologias/index.js')
const paisesRouter= require('../routes/Paises/index.js')
const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use('/usuarios', usuariosRouter)
router.use('/lenguajes', lenguajesRouter)
router.use('/tecnologias', tecnologiasRouter)
router.use('/paises',  paisesRouter)

module.exports = router;
