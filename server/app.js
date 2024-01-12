// app.js
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const userRouter = require("./routes/userRouter");

const app = express();
const port = 8000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Hello, this is your Express server!");
});

app.use(userRouter);

// Database Connection
mongoose
  .connect(process.env.DB_CONNECTION_STRING, {
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("DB connection successful....");
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch((error) => {
    console.error(error.message);
  });
