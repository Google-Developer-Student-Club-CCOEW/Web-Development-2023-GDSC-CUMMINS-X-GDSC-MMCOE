require("dotenv").config();
require("../src/db/connection")
const express = require("express");
const app = express();
app.use(express.json())
app.use(express.urlencoded({ extended: false }));
const router = require("../src/router/authRoute");
const PORT = process.env.PORT || 8080;
app.use("/api", router);

app.listen(PORT, () => {
  console.log(`Running on port ${PORT}`);
});
