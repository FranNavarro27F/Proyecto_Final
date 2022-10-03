const { Router } = require("express");

const {
  getUsers,
  getPremiumUsers,
  getUserById,
  deleteUser,
  getUserByName,
  modifyUser,
  setSubscriptionId,
  setVisible,
  postUserAuth,
  getByEmail,
} = require("../../controllers/Usuarios");

const router = Router();

// -----------------------------------------------

// GET ALL USERS
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

// GET ALL PREMIUM USERS
router.get("/premium", async (req, res) => {
  //
  try {
    const premiumUsers = await getPremiumUsers();
    return res.json(premiumUsers);
    //
  } catch (e) {
    res.status(400).send(`Error --→ ${e}`);
  }
});

// -----------------------------------------------

// GET USER BY ID
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

// MODIFY USER
router.put("/", async (req, res) => {
  try {
    const { email } = req.query;
    await modifyUser(email, req.body);
    console.log("*****", email, "******");
    console.log("body", req.body, "******");
    res.send(`Usuario ${email} modificado con éxito.`);
  } catch (e) {
    res.status(400).send(`Error --→ ${e}`);
  }
});

// -----------------------------------------------

// Set SUBSCRIPTION ID
router.put("/sub/:id", async (req, res) => {
  //
  try {
    const { id } = req.params;
    const { subscription_id, status } = req.body;
    const updatedUser = await setSubscriptionId(id, subscription_id, status);

    return await res.send(updatedUser);
    //
  } catch (e) {
    res.status(400).send(`Error --→ ${e}`);
  }
});

// -----------------------------------------------

// Set VISIBLE
router.put("/visible/:id", async (req, res) => {
  //
  try {
    const { id } = req.params;
    const { visible } = req.body;
    const updatedUser = await setVisible(id, visible);

    return await res.send(updatedUser);
    //
  } catch (e) {
    res.status(400).send(`Error --→ ${e}`);
  }
});

// -----------------------------------------------

// CREATE USER FROM AUTH0 LOGIN
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

// DELETE USER
router.delete("/:id", async (req, res) => {
  //
  try {
    let { id } = req.params;
    await deleteUser(id);
    res.send(`User (${id}) deleted successfully`);
    //
  } catch (e) {
    res.status(404).send(`Error --→ ${e}`);
  }
});

// -----------------------------------------------

module.exports = router;
