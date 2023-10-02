const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  verified: {
    type: Boolean,
  },
});
UserSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 10);
  }
  next();
});
UserSchema.statics.comparePassword = async function (email, password) {
  const person = await User.findOne({ email });
  if (!person) {
    throw Error("No such User");
  }

  const Match = await bcrypt.compare(password, person.password);
  if (Match) {
    return person;
  }
  throw Error("Password Did not match");
};
const User = new mongoose.model("User", UserSchema);
module.exports = User;
