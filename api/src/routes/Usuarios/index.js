const { Router } = require("express");

const {
  getUsers,
  getUserById,
  deleteUser,
  getUserByName,
  modifyUser,
  setSubscriptionId,
  postUserAuth,
  getByEmail,
} = require("../../controllers/Usuarios");

const router = Router();

// -----------------------------------------------

router.get("/", async (req, res) => {
  //
  try {
    let { name, email } = req.query;

    let user;
    if (name) {
      user = await getUserByName(name);
    } else if (email) {
      user = await getByEmail(email);
    } else {
      return res.json(await getUsers());
    }
    return res.send(user);
    //
  } catch (e) {
    res.status(400).send(`Error --→ ${e}`);
  }
});

// -----------------------------------------------

router.get("/:id", async (req, res) => {
  //
  try {
    const { id } = req.params;
    res.json(await getUserById(id));
    //
  } catch (e) {
    res.status(404).send(`Error --→ ${e}`);
  }
});

// -----------------------------------------------

// router.put("/", async (req, res) => {
//   //
//   try {
//     // let { email, paiseId } = req.body;

//     // if (!email || !paiseId) {
//     //   res.sendStatus(400).send(`Error --→ ${e}`);
//     // .send("Falta alguno de los campos importantes. Por favor revisar");
//     // } else {

//     let usuario = await modifyUser(req.body);
//    console.log(usuario);
//     res.status(201).json(usuario);
//     // }
//     //
//   } catch (e) {
//     res.status(400).send(`Error --→ ${e}`);
//   }
// });

// -----------------------------------------------

router.put("/", async (req, res) => {
  try {
   res.status(200).json(await modifyUser(req.body));
  } catch (e) {
    res.status(400).send(`Error --→ ${e}`);
  }
});
// Set SUBSCRIPTION ID
router.put("/sub/:id", async (req, res) => {
  //
  try {
    const { id } = req.params;
    const { subscription_id, status } = req.body;
    console.log(req.body, "BODYYYYYYYYYYYYYYYYY");
    // const { subscription_id, status } = req.body;
    const updatedUser = await setSubscriptionId(id, subscription_id, status);

    return await res.send(updatedUser);
    //
  } catch (e) {
    res.status(400).send(`Error --→ ${e}`);
  }
});

// -----------------------------------------------

router.post("/", async (req, res) => {
  //
  try {
    // let { email, family_name, given_name, picture } = req.body;
    // if (!family_name || !given_name || !email) {
    //   res.sendStatus(400);
    // } else {
    let usuario = await postUserAuth(req.body);
    res.json(usuario);
    // }
    //
  } catch (e) {
    res.sendStatus(400).send(`Error --→ ${e}`);
  }
});

// -----------------------------------------------

router.delete("/:id", async (req, res) => {
  //
  try {
    let { id } = req.params;
    res.json(await deleteUser(id));
    //
  } catch (e) {
    res.status(404).send(`Error --→ ${e}`);
  }
});

// -----------------------------------------------

module.exports = router;
