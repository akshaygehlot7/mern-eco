const nodeMailer = require("nodemailer");
const SMPT_HOST="smtp.gmail.com";
// const SMPT_PORT="";
// const SMPT_SERVICE = "gmail";
const SMPT_MAIL = "anilgehlot003@gmail.com";
const SMPT_PASS = "xkpr fdjx skii lwwq";
// const SMPT_PASS = "gehlot/583";
// gehlot/583
// gehlotanil583@gmail.com

// "email":"akshaygehlot003@gmail.com",
    // "password":"akshay003" 00000000

const sendEmail = async (options) => {
  const transporter = nodeMailer.createTransport({
    host: SMPT_HOST,
    port: 587,
    secure: true,
    require: true,
    service: "gmail",
    auth: {
      user: SMPT_MAIL,
      pass: SMPT_PASS
    },
  });

  const mailOptions = {
    from: SMPT_MAIL,
    to: options.email,
    subject: options.subject,
    text: options.message,
  };
  await transporter.sendMail(mailOptions)
//   await transporter.sendMail(mailOptions, function(error, info){
//     if (error) {
//       console.log(error);
//     } else {
//       console.log('Email sent: ' + info.response);
//     }
//   });
};


module.exports = sendEmail;
