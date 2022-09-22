const { Router } = require("express");
const { main } = require('../../controllers/Emailer/index.js');
const nodemailer = require("nodemailer");

const router = Router();



router.get("/", async (req, res) => {
    
    try {
        const { nombreContratista, mailContrado } = req.body;
        console.log(nombreContratista, mailContrado, "******")
        
        res.json(await main(nombreContratista, mailContrado))
        
    } catch (e) {
      res.status(400).send(`Error --→ ${e}`);
    }
  });


  module.exports = router;