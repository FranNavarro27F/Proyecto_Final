const { Router } = require("express");

const {
  postLenguajes,
  postServicios,
  borrLogicLenguaje,
  borrLogicServicios,
  postPaises,
  postTecnologias,
  borrLogicPaises,
  borrLogicTecnologias,
  borrLogicUsuario,
  toggleAdmin,
  getAdminLeng,
  getAdminTec,
  getAdminPaises,
  getAdminServ,
  getAdminUser,
} = require("../../controllers/Admin");

const router = Router();

// ------------------- POST --------------------------//

router.post("/lenguajes", async (req, res) => {
  try {
    let { name } = req.body;
    if (!name) {
      res.sendStatus(400).send(`Error --→ ${e}`);
    } else {
      let newLeng = await postLenguajes(name);

      res.status(200).json(newLeng);
    }
  } catch (e) {
    res.status(400).send(`Error --→ ${e}`);
  }
});

router.post("/servicios", async (req, res) => {
  try {
    let { name } = req.body;
    if (!name) {
      res.sendStatus(400).send(`Error --→ ${e}`);
    } else {
      let newServ = await postServicios(name);

      res.status(200).json(newServ);
    }
  } catch (e) {
    res.status(400).send(`Error --→ ${e}`);
  }
});

router.post("/tecnologias", async (req, res) => {
  try {
    const { name } = req.body;
    if (name) {
      res.status(200).json(await postTecnologias(name));
    } else {
      res.status(400).send("error debe agregar un nombre");
    }
  } catch (e) {
    res.status(404).send(`Error --→ ${e}`);
  }
});

router.post("/paises", async (req, res) => {
  try {
    const { name } = req.body;
    if (name) {
      res.status(200).json(await postPaises(name));
    } else {
      res.status(400).send("error debe agregar un nombre");
    }
  } catch (e) {
    res.status(404).send(`Error --→ ${e}`);
  }
});

//-------------- PUT - Borrado Lógico -----------------//

router.put("/tecnologias", async (req, res) => {
  try {
    const { id, habilitado } = req.body;
    if (id) {
      res.status(200).json(await borrLogicTecnologias(id, habilitado));
    } else {
      res.status(400).send("error debe enviar por body el id");
    }
  } catch (e) {
    res.status(404).send(`Error --→ ${e}`);
  }
});

router.put("/lenguajes", async (req, res) => {
  try {
    res.status(200).json(await borrLogicLenguaje(req.body));
  } catch (e) {
    res.status(400).send(`Error --→ ${e}`);
  }
});

router.put("/paises", async (req, res) => {
  try {
    const { id, habilitado } = req.body;
    if (id) {
      res.status(200).json(await borrLogicPaises(id, habilitado));
    } else {
      res.status(400).send("error debe enviar por body el id");
    }
  } catch (e) {
    res.status(404).send(`Error --→ ${e}`);
  }
});

router.put("/servicios", async (req, res) => {
  try {
    res.status(200).json(await borrLogicServicios(req.body));
  } catch (e) {
    res.status(400).send(`Error --→ ${e}`);
  }
});

router.put("/usuarios", async (req, res) => {
  try {
    res.status(200).json(await borrLogicUsuario(req.body));
  } catch (e) {
    res.status(400).send(`Error --→ ${e}`);
  }
});

// TOGGLE ADMIN
router.put("/admin/:id", async (req, res) => {
  //
  try {
    const { id } = req.params;
    const { admin } = req.body;
    const updatedUser = await toggleAdmin(id, admin);

    return await res.send(updatedUser);
    //
  } catch (e) {
    res.status(400).send(`Error --→ ${e}`);
  }
});

//------------------ GET info as Admin -----------------//

router.get("/lenguajes", async (req, res) => {
  try {
    res.status(200).json(await getAdminLeng());
  } catch (e) {
    res.status(400).send(`Error --→ ${e}`);
  }
});

router.get("/tecnologias", async (req, res) => {
  try {
    res.status(200).json(await getAdminTec());
  } catch (e) {
    res.status(400).send(`Error --→ ${e}`);
  }
});

router.get("/paises", async (req, res) => {
  try {
    res.status(200).json(await getAdminPaises());
  } catch (e) {
    res.status(400).send(`Error --→ ${e}`);
  }
});

router.get("/servicios", async (req, res) => {
  try {
    res.status(200).json(await getAdminServ());
  } catch (e) {
    res.status(400).send(`Error --→ ${e}`);
  }
});

router.get("/usuarios", async (req, res) => {
  try {
    res.status(200).json(await getAdminUser());
  } catch (e) {
    res.status(400).send(`Error --→ ${e}`);
  }
});

// -----------------------------------------------

module.exports = router;
