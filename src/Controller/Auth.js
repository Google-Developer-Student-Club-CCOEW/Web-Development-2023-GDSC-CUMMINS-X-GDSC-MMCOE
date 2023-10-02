const User = require("../db/model/UserSchema");
const VerifedUser = require("../db/model/VerifiedUser");
const bcrypt = require("bcryptjs");
const createToken = require("../middleware/jwt");
const { transporter, sendVerificationEmail } = require("./transporter");

const signup = async (req, res) => {
  try {
    transporter;
    const newUser = new User({
      email: req.body.email,
      password: req.body.password,
      verified: req.body.verified,
    });
    await newUser.save();

    _id = newUser._id.toString();
    UserEmail = newUser.email.toString();
    console.log(UserEmail);

    sendVerificationEmail({ _id, email: UserEmail }, res);
  } catch (e) {
    res.status(401).send(e.message);
  }
};
const login = async (req, res) => {
  try {
    const email = req.body.email;
    const password = req.body.password;
    console.log(password);
    const user = await User.comparePassword(email, password);
    if (!user.verified) {
     return res.status(201).json({ message: "Email Not verified" });
    }
    const token = createToken({ email: email, _id: user._id });

    res.status(200).json({
      message: "Succses",
      token: token,
    });
  } catch (e) {
    res.status(401).send(e.message);
    console.log(e);
  }
};
const verification = async (req, res) => {
  try {
    let { Userid, UniqueString } = req.params;
    const verUser = await VerifedUser.findOne({ Userid });
    console.log(verUser.UniqueString);

    if (verUser) {
      const result = await bcrypt.compare(UniqueString, verUser.UniqueString);
      if (result) {
        await User.updateOne({ _id: Userid }, { verified: true });
        return res.status(200).json({
          status: "Verified",
          message: "You can log in now using your email and password",
        });
      } else {
        return res.status(401).send("Verification Failed");
      }
    }
    return res.status(401).send("No such User exists");
  } catch (e) {
    res.status(401).send(e.message);
    console.log(e);
  }
};

module.exports = { signup, login, verification };
