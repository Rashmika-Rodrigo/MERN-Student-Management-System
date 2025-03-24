const express = require("express");
const mongoose = require("mongoose");
const router = require("./router/studentRouter");
const cors = require("cors");
require("dotenv").config();

const app = express();

// Middleware
app.use(express.json());
app.use(cors());
app.use("/students", router);

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("Connected to MongoDB"))
  .then(() => {
    app.listen(5000, () => console.log("Server running on port 5000"));
  })
  .catch((err) => console.error(err));

// Admin register
require("./model/admin");
const user = mongoose.model("admin");

app.post("/register", async (req, res) => {
  const { name, username, password, repassword } = req.body;
  try {
    await user.create({
      name,
      username,
      password,
      repassword,
    });
    res.send({ status: "ok" });
  } catch (err) {
    res.send({ status: "err" });
  }
});

// Admin login
app.post("/login", async (req, res) => {
  const { username, password } = req.body;
  try {
    const admin = await user.findOne({ username });
    if (!admin) {
      return res.json({ status: "User not found!.." });
    }
    if (admin.password === password) {
      return res.json({ status: "ok" });
    } else {
      return res.json({ status: "Incorrect password!.." });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ err: "Server error!.." });
  }
});
