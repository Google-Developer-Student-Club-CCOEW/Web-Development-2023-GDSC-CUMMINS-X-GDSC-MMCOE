require("dotenv").config();
const VerifiedUser = require("../db/model/VerifiedUser");
const bcrypt = require("bcryptjs");
const nodemailer = require("nodemailer");
const { v4: uuidv4 } = require("uuid");

let transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.AUTH_EMAIL,
    pass: process.env.AUTH_PASSWORD,
  },
});

transporter.verify((error, succes) => {
  if (error) {
    console.log(error);
  }
  console.log(succes);
});
const sendVerificationEmail = async ({ _id, email }, res) => {
  try {
    console.log(email);
    const currentUrl = "http://localhost:8000/";
    const uniqueString = _id + uuidv4();
    const mailOptions = {
      from: process.env.AUTH_EMAIL,
      to: email,
      subject: "Verify Email",
      html: `<p>Verify your email address to complete signup and login into your account</p><p>This link <b>expires in 6 hours</b>.</p><p>Press <a href="${currentUrl}api/verify/${_id}/${uniqueString}">here</a> to proceed</p>`,
    };
    const hashedString = await bcrypt.hash(uniqueString, 10);
    const userverified = new VerifiedUser({
      Userid: _id,
      UniqueString: hashedString,
      createdAt: Date.now(),
    });
    await userverified.save();
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        res.status(500).json({ error: "Failed to send email" });
        console.log(error);
      } else {
        console.log("Email sent: " + info.response);
        res.json({
          status: "pending email sent",
        });
      }
    });
  } catch (e) {
    res.send(e.message);
  }
};

module.exports = { transporter, sendVerificationEmail };
