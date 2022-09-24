const { Router } = require("express");
const { getContratos, postContratos, putContratos, deleteContratos } = require("../../controllers/Contratos");

const router = Router();

const PATH = "/";

// -----------------------------------------------

// Ejemplo 1
router.get(PATH, async (req, res) => {
  try {
    res.status(200).json(await getContratos())
  } catch (e) {
    res.status(404).send(`Error --→ ${e}`);
  }
});
router.post(PATH, async (req, res) => {
  try {
    const { employer, developer, description, date, expiration_date, status, precio } = req.body;
    if (employer && developer && description && date && expiration_date && status && precio) {
      console.log(expiration_date)
      res.status(200).json(await postContratos(req.body))
    } else {
    
      res.sendStatus(400)
    }
  } catch (e) {
    res.status(404).send(`Error --→ ${e}`);
  }
});
router.put(PATH, async (req, res) => {
  try {
    const {id, employer, developer, description, date, expiration_date, status, precio } = req.body;
    if (id && employer && developer && description && date && expiration_date && status && precio) {
      res.status(200).json(await putContratos(req.body))
    } else {
      res.sendStatus(400)
    }
  } catch (e) {
    res.status(404).send(`Error --→ ${e}`);
  }
});
router.delete('/:id', async (req, res) => {
  try {
    const {id}=req.params
    res.status(200).json(await deleteContratos(id))
  } catch (e) {
    res.status(404).send(`Error --→ ${e}`);
  }
});
//hacer el delete por req.params

module.exports = router;
