const { Router } = require("express");
const { getCountries, postCountries } = require("../../controllers/Paises/index");

const router = Router();



router.get('/', getCountries);
router.post('/',postCountries);




module.exports = router;