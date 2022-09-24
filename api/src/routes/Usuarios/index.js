const { Router } = require("express");
const { Usuarios } = require("../../db.js");
const {
  getUsers,
  postUsers,
  getUserById,
  deleteUser,
  getUserByName,
  modifUser,
  postUserAuth,
  getByEmail

} = require("../../controllers/Usuarios");

const router = Router();

// -----------------------------------------------

router.get("/", async (req, res) => {
  try {
    let {name, email}=req.query;
    if(name){
      res.json(await getUserByName(name))
    }else if(email){
      res.json(await getByEmail(email))
    }else{
      res.json(await getUsers());
    }
  } catch (e) {
    res.status(400).send(`Error --→ ${e}`);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    res.json(await getUserById(id));
  } catch (e) {
    res.status(404).send(`Error --→ ${e}`);
  }
});

// router.post("/", async (req, res) => {
//   try {
//     let { name, lastName, email, yearsOfExperience, paiseId } = req.body;

//     if (!name || !lastName || !email || !paiseId || !yearsOfExperience) {
//       res.sendStatus(400)
//         // .json("Falta alguno de los campos importantes. Por favor revisar");
//     } else {
//       let usuario = await postUsers(req.body);

//       res.json(usuario);
//     }
//   } catch (e) {
//     res.status(400).send(`Error --→ ${e}`);
//   }
// });


router.put("/", async (req, res) => {
  try {

    let { name, lastName, email, yearsOfExperience, paiseId } = req.body;

    if (!name || !lastName || !email || !paiseId || !yearsOfExperience) {
      res.sendStatus(400).send(`Error --→ ${e}`);
        // .json("Falta alguno de los campos importantes. Por favor revisar");
    } else {
      let usuario = await modifUser(req.body);

      res.status(201).json(usuario);
    }
  } catch (e) {
    res.status(400).send(`Error --→ ${e}`);
  }
});


router.post("/", async(req, res)=>{
  try {

    let {email, family_name, given_name, picture} = req.body

    if(!family_name || !given_name || !email){
      res.sendStatus(400)
    }else{
      let usuario = await postUserAuth(req.body)
      res.json(usuario)
    }
    
  } catch (e) {
    res.sendStatus(400).send(`Error --→ ${e}`)
  }
})


router.delete("/:id", async (req, res) => {
  try {
    let { id } = req.params;
    res.json(await deleteUser(id));
  } catch (e) {
    res.status(404).send(`Error --→ ${e}`);
  }
});

module.exports = router;
