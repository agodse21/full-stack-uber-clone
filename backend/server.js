const express = require("express");
const cors = require("cors");

const dotenv = require("dotenv");
dotenv.config();

const port = process.env.PORT || 4000;

const { connection } = require("./config/db");

const { userRoutes } = require("./routes/user.routes");

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.json({ message: "hello world" });
});

app.use("/users", userRoutes);

app.listen(port, async () => {
  try {
    const conn = await connection;
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.log(error);
  }
  console.log("listening on port no", port);
});
