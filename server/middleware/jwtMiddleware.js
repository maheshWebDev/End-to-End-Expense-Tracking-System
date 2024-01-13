const jwt = require("jsonwebtoken");

// Function to generate a JWT
function generateToken(payload) {
  console.log(process.env.JWT_SECRET_KEY);
  return jwt.sign(payload, process.env.JWT_SECRET_KEY, { expiresIn: "1h" });
}

module.exports = { generateToken };
