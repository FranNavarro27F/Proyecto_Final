const { Router } = require("express");
const { main } = require("../../controllers/Emailer/index.js");
const nodemailer = require("nodemailer");
const router = Router();

router.post("/", async (req, res) => {
  try {
    const { nombreContratista, mailContrado, IDContratado } = req.body;
    res.json(await main(nombreContratista, mailContrado, IDContratado));
  } catch (e) {
    res.status(400).send(`Error --→ ${e}`);
  }
});

router.post("/pagado", async (req, res) => {
  try {
    const { mailContrado, mailContratista, IDContrato } = req.body;
    res.json(await main(mailContrado, mailContratista, IDContrato ));
  } catch (e) {
    res.status(400).send(`Error --→ ${e}`);
  }
});


module.exports = router;
