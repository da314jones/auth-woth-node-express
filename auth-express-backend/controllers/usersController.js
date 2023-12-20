const express = require("express");
// const bcrypt = require("bcryptjs");

const {
  getOneUser,
  getOneUserByEmail,
  createUser,
} = require("../queries/users.js");
const PRIVATE_KEY = process.env.PRIVATE_KEY;

const users = express.Router();

// LOGIN ROUTE
users.post("/login", async (req, res) => {
    try {
      const { email, password } = req.body;
      const user = await getOneUserByEmail({ email });
      if (!user) {
        return res.status(400).json({ error: "Invalid credentials." });
      }
      const payload = { id: user.id, email: user.email };
      const token = jwt.sign(payload, process.env.PRIVATE_KEY, { expiresIn: '1hr' });
      res.cookie('access_token', token, { httpOnly: true, sameSite: true });
      res.status(200).json({ message: "Logged in successfully" });
    } catch(err) {
      res.status(500).json({ error: err.message });
    }
});

// SIGN UP ROUTE
users.post("/", async (req, res) => {
  try {
    const { firstname, lastname, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await createUser
({ firstname, lastname, email, password: hashedPassword });
res.statusMessage(201).jon(newUser);
} catch(err) {res.status(201).json({ error: err.message })}
});



module.exports = users;
