const nodemailer = require("nodemailer");
const nodemailerSendgrid = require("nodemailer-sendgrid");

const {
    Usuarios,
  } = require("../../db.js");

  const createTrans = () => {
    const transport = nodemailer.createTransport(
        nodemailerSendgrid({
            // apiKey: "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"
            apiKey: "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",
        })
    );
    return transport
  }

  const sendMail = async (email) => {
    const transporter = createTrans()
    const info = await transporter.sendMail({
        from: '"Programax" <fran271214201211@gmail.com>',
        to: `${email}`,
        subject: `Hola ${email} bienvenido a Programax.`,
        html: "<b>Hello men </b>",
    })
    sendMail("duduesperguin1@gmail.com")

    console.log("Mensaje enviado: %s", info.messageId);
    return 
}

  const emailerContact = async (email) => {

    try {
        return sendMail()

    } catch(e) {
        console.error(`ERROR @ controllers/emailer --→ ${e}`)
    }
  } 

  module.exports = {
    emailerContact,
  }