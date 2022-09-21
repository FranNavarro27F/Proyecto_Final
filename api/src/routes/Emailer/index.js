const { Router } = require("express");
const { sendEmail } = require('../../controllers/Emailer/index.js');
const nodemailer = require("nodemailer");

const router = Router();



router.get("/", async (req, res) => {
    // const { user } = req.body;

    try {

          res.json(await sendEmail)

    } catch (e) {
      res.status(400).send(`Error --→ ${e}`);
    }
  });


  module.exports = router;