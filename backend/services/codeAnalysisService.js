// services/codeAnalysisService.js
// import OpenAI from "openai";
const openai = require("openai");

// // Initialize OpenAI with your API key
// const openaiInstance = new openai.OpenAIAPI({ key: "your-openai-api-key" });
const openaiInstance = new openai.OpenAI({
  apiKey:
    process.env.OPENAI_API_KEY ||
    "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",
});

async function analyzeCode(code) {
  try {
    // // Placeholder values for demonstration
    // const analysisResult = {
    //   solution,
    //   explanation,
    // };

    console.log(
      "Code analysis result:",
      `Code: ${code}\nExplain and fix with sample, be brief:`
    );

    // GPT integration using OpenAI's GPT API
    const gptResponse = await openaiInstance.completions.create({
      model: "gpt-3.5-turbo", // Choose the appropriate GPT model
      prompt: `Code: ${code}\n fix with sample, less than 450 words:`,
      max_tokens: 150, // Adjust as needed
    });

    console.log("GPT response:", gptResponse);

    const gptExplanation = gptResponse.data.choices[0].text.trim();

    // Combine the results
    const { solution, explanation } = analysisResult;
    const finalExplanation = `${explanation}\n\n${gptExplanation}`;

    return { solution, explanation: finalExplanation };
  } catch (error) {
    console.error("Error in code analysis service:", error);
    throw error;
  }
}

module.exports = {
  analyzeCode,
};
