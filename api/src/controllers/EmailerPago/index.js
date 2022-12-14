const nodemailer = require("nodemailer");
const { GMAILPW, GMAILUSER } = process.env;


async function main(mailContrado, mailContratista, IDContrato) {
    console.log("+1+1+1+1+",mailContrado, mailContratista, IDContrato,"+1+1+1+1+1+")
    let transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true, // true for 465, false for other ports
      auth: {
        user: GMAILUSER, // generated ethereal user
        pass: GMAILPW, // generated ethereal password
      },
      tls: {
        rejectUnauthorized: false,
      },
    });
    //const URL_PAGADO = `http://localhost:3000/work/contrato/${IDContrato}`;
    const URL_DEPLOY_PAGADO = `https://programax.vercel.app/contrato/${IDContrato}`
  
    // send mail with defined transport object
    let info = await transporter.sendMail({
      from: '"Programax" <appprogramax@gmail.com>', // sender address
      to: mailContrado, mailContratista, // list of receivers
      subject: "Contrato pagado!", // Subject line
      // text: `Hola! ${nombreContratista} te ha contactado! Esto es texto`, // plain text body
      // BORRAMOS EL TEXT. OJO.
      html: `<h4>¡Hola! Se ha completado el pago de tu contrato. </h4>
      <br> <br/>
      <a href=${URL_DEPLOY_PAGADO}> Contrato </a>
      `,
    });
  
    //  console.log("Message sent: %s", info.messageId);
    //   Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
    //   Preview only available when sending through an Ethereal account
    //  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    //   Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
  
    return info;
  }

  module.exports = {
    main
  };
  