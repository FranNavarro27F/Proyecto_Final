const nodemailer = require("nodemailer");
const {GMAILPW, GMAILUSER} = process.env;


const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: GMAILUSER, // generated ethereal user
      pass: GMAILPW, // generated ethereal password
    },
  });

  transporter.verify().then (() => {
    console.log("Listo para mandar mail")
  })

  const sender = async () => {
 
  let info = await transporter.sendMail({

    from: '"Programax. 👻" <appprogramax@gmail.com>', // sender address
    to: "duduesperguin1@gmail.com", // list of receivers
    subject: "Alguien quiere contactarte! ✔", // Subject line
    text: "Hello world?", // plain text body
    html: "<b>Hello world?</b>", // html body
    
});
    return info
}


  module.exports = { sender };