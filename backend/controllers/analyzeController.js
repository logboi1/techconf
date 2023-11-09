// controllers/analyzeController.js

const express = require("express");
const router = express.Router();
const codeAnalysisService = require("../services/codeAnalysisService");

// POST /analyze
router.post("/", async (req, res) => {
  const { code } = req.body;

  try {
    // Call the code analysis service
    const { solution, explanation } = await codeAnalysisService.analyzeCode(
      code
    );

    // Send the results back to the client
    res.json({ solution, explanation });
  } catch (error) {
    console.error("Error analyzing code:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
