// app.js
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });

const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const mongoose = require("mongoose");
const userRouter = require("./routes/userRouter");
const expenseRouter = require("./routes/expenseRouter");
const leaderboardRouter = require("./routes/leaderboardRouter");
const { authenticateUser } = require("./middleware/authMiddleware");
const { checkPremiumUser } = require("./middleware/premiumUserMiddleware");
const premiumRouter = require("./routes/premiumRouter");

const app = express();
const port = 8000;

// Middleware
const corsOptions = {
  origin: "http://localhost:3000",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true,
  optionsSuccessStatus: 204,
};

app.use(cors(corsOptions));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(helmet());

app.get("/", (req, res) => {
  res.send("Hello, this is your Express server!");
});

app.use(userRouter);

// Expense routes
app.use("/api", authenticateUser, expenseRouter);

app.use("/api", authenticateUser, premiumRouter);

// Use the leaderboard router
app.use("/api", authenticateUser, checkPremiumUser, leaderboardRouter);
// Database Connection
mongoose
  .connect(process.env.DB_CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB connection successful....");
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch((error) => {
    console.error("DB connection failed:", error.message);
  });
