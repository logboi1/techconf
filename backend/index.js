// index.js

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// API routes
const analyzeController = require("./controllers/analyzeController");
app.use("/analyze", analyzeController);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
