// app.js
const express = require("express");
const app = express();
const port = 8000; // You can change the port if needed

app.get("/", (req, res) => {
  res.send("Hello, this is your Express server!");
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
