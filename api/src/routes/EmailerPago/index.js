const { Router } = require("express");
const nodemailer = require("nodemailer");
const { main } = require("../../controllers/EmailerPago");
const router = Router();


router.post("/", async (req, res) => {
  try {
    const { mailContrado, mailContratista, IDContrato } = req.body;
    res.json(await main(mailContrado, mailContratista, IDContrato));
  } catch (e) {
    res.status(400).send(`Error --→ ${e}`);
  }
});


module.exports = router;
