const { Router } = require("express");
const { main } = require('../../controllers/Emailer/index.js');
const nodemailer = require("nodemailer");

const router = Router();



router.post("/", async (req, res) => {
  const {nombreContratista, mailContrado} = req.body;
    try {  
        res.json(await main(nombreContratista, mailContrado))  
    } catch (e) {
      res.status(400).send(`Error --→ ${e}`);
    }
  });


  module.exports = router;