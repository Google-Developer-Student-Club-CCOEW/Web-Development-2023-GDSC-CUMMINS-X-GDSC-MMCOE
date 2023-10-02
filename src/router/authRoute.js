const express = require("express");
const { signup, login, verification } = require("../Controller/Auth");
const auth = require("../middleware/authorization");
const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.get("/verify/:Userid/:UniqueString", verification);
router.get("/verified", auth, (req, res) => {
  res.status(201).json({
    Status: "Verified",
    Message: "You can write any logic for the verified page here",
  });
});

module.exports = router;
