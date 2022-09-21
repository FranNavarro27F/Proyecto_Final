const { Router } = require("express");
const { emailerContact } = require("../../controllers/Emailer");
const { Lenguajes } = require("../../db");

const router = Router();

router.get("/", async (req, res) => {
    try {
        const { email } = req.body;
        res.json(await emailerContact(email))

    } catch (e) {
      res.status(400).send(`Error --→ ${e}`);
    }
  });

module.exports = router;