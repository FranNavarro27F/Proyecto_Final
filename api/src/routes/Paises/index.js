const { Router } = require("express");
const {
  getPaises,
  getCountryByName,
  postPaises,
  deletePaises,
  putPaises,
  traerPaisPorId,
} = require("../../controllers/Paises/index");
const { paises } = require("../../json/Data");

const router = Router();

// -----------------------------------------------

// GET COUNTRIES (ALL / BY NAME)
router.get("/", async (req, res) => {
  //
  try {
    const { name } = req.query;
    let result;

    if (name) result = await getCountryByName(name);
    else result = await getPaises();

    res.json(result);
    //
  } catch (e) {
    res.status(404).send(`Error --→ ${e}`);
  }
});

// -----------------------------------------------

// GET COUNTRY BY ID
router.get("/:id", async (req, res) => {
  //
  try {
    let { id } = req.params;
    res.json(await traerPaisPorId(id));
    //
  } catch (e) {
    res.status(404).send(`Error --→ ${e}`);
  }
});

// -----------------------------------------------

// POST NEW COUNTRY
router.post("/", async (req, res) => {
  //
  try {
    const { name } = req.body;
    if (name) {
      res.status(200).json(await postPaises(name));
    } else {
      res.status(400).send("error debe agregar un nombre");
    }
    //
  } catch (e) {
    res.status(404).send(`Error --→ ${e}`);
  }
});

// -----------------------------------------------

// DELETE COUNTRY
router.delete("/:id", async (req, res) => {
  //
  try {
    const { id } = req.params;
    if (id) {
      res.status(200).json(await deletePaises(id));
    } else {
      res
        .status(400)
        .send("error debe enviar por body el id del pais a borrar");
    }
    //
  } catch (e) {
    res.status(404).send(`Error --→ ${e}`);
  }
});

// -----------------------------------------------

// MODIFY (EXISTING) COUNTRY
router.put("/", async (req, res) => {
  //
  try {
    const { id, name } = req.body;
    if (id) {
      res.status(200).json(await putPaises(id, name));
    } else {
      res
        .status(400)
        .send("error debe enviar por body el id del pais para actualizar");
    }
    //
  } catch (e) {
    res.status(404).send(`Error --→ ${e}`);
  }
});

// -----------------------------------------------

module.exports = router;
