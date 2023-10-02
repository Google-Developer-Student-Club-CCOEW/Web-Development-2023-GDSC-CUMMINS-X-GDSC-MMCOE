const mongoose = require("mongoose");
const VerifiedUserSchema = new mongoose.Schema({
  Userid: {
    type: String,
    required: true,
  },
  UniqueString: {
    type: String,
    required: true,
  },
  CreatedAt: {
    type: Date,
    default: Date.now(),
  },
});
const VerifedUser = new mongoose.model("VerifiedUser", VerifiedUserSchema);
module.exports = VerifedUser;
