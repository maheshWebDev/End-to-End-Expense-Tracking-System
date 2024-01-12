const User = require("../models/userModel");

exports.registerUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    // Check if the email already exists in the database
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: "Email already in use" });
    }

    // Create a new user
    await User.create({
      username,
      email,
      password,
    });

    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    res
      .status(500)
      .json({ error: "Registration failed", details: error.message });
  }
};

exports.loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if the user exists in the database using their email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ error: "User not found" });
    }

    // Match the provided password with the stored password
    if (password === user.password) {
      res.status(200).json({ message: "User logged in successfully" });
    } else {
      res.status(401).json({ error: "Incorrect password" });
    }
  } catch (error) {
    res.status(500).json({ error: "Login failed", details: error.message });
  }
};
