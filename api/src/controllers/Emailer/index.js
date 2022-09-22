const nodemailer = require("nodemailer");
const {
    GMAILPW,
    GMAILUSER
} = process.env;

console.log( GMAILPW, GMAILUSER)
async function main(nombreContratista, mailContrado) {

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: GMAILUSER, // generated ethereal user
      pass: GMAILPW // generated ethereal password
    },
    tls: {
      rejectUnauthorized: false
  }
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: '"Programax 👻" <appprogramax@gmail.com>', // sender address
    to: mailContrado, // list of receivers
    subject: "Hello ✔", // Subject line
    // text: `Hola! ${nombreContratista} te ha contactado! Esto es texto`, // plain text body
    html: `<b>Hola! ${nombreContratista} te ha contactado! Esto es HTML</b>`, // html body
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...

  return info;
}

module.exports = {
    main,
}