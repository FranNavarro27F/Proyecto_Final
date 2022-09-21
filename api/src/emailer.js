const nodemailer = require("nodemailer");
const nodemailerSendgrid = require("nodemailer-sendgrid");


const createTrans = () => {
    // const transport = nodemailer.createTransport({
    //     host: "smtp.mailtrap.io",
    //     port: 2525,
    //     auth: {
    //       user: "3040ab15b8e821",
    //       pass: "cd3cd40de7bcf3"
    //     }
    //   });
    const transport = nodemailer.createTransport(
        nodemailerSendgrid({
            // apiKey: "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"
            apiKey: "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",
        })
    );
    return transport
}

const sendMail = async (newUser) => {
    console.log(newUser, "*************")
    const transporter = createTrans()
    const info = await transporter.sendMail({
        from: '"Programax" <fran271214201211@gmail.com>',
        to: `${newUser.email}`,
        subject: `Hola ${newUser.name} bienvenido a Programax.`,
        html: "<b>Hello men </b>",
    })

    console.log("Mensaje enviado: %s", info.messageId);
    return 
}

exports.sendMail = (newUser) => sendMail(newUser);