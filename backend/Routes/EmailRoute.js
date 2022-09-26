require("dotenv").config();
const express = require("express");
const nodemailer = require("nodemailer");

const app = express.Router();

//------Send Email Route
app.post("/email", (req, res) => {
  var transporter = nodemailer.createTransport({
    host: "smtp-mail.outlook.com",
    secureConnection: false,
    port: 587,
    tls: {
      rejectUnauthorized: false,
    },
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASSWORD,
    },
  });

  var mailOptions = {
    from: process.env.MAIL_FROM, // sender address
    to: req.body.to, // list of receivers
    subject: req.body.subject, // Subject line
    text: req.body.description,

    html: `
        <div style="width: 100%; background-color: #f3f9ff; padding: 5rem 0">
        <div style="max-width: 700px; background-color: white; margin: 0 auto">
        <div style="width: 100%; background-color: #00efbc; padding: 20px 0">
        <div style="width: 100%; gap: 10px; padding: 30px 0; display: grid">
        <p style="font-weight: 800; font-size: 1.2rem; padding: 0 30px">
        Green Hotel
        </p>
        <div style="font-size: .8rem; margin: 0 30px">
        
        
            <p>Email: ${req.body.to}</p>
            <p>Subject: ${req.body.subject}</p>
            <p>Message: ${req.body.description}</p>
        
        </div>
        </div>
        </div>
        </div>
        </div>
        `,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
      res.json({ status: true, respMesg: "Email Sent is not Successful" });
    } else {
      res.json({ status: true, respMesg: "Email Sent Successfully" });
    }
  });
});

module.exports = app;
