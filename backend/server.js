const express = require("express");
const cors = require("cors");

const dotenv = require("dotenv");
dotenv.config();

const port = process.env.PORT || 4000;

const app = express();

app.use(cors());

app.get("/", (req, res) => {
  res.json({ message: "hello world" });
});

app.listen(port, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
