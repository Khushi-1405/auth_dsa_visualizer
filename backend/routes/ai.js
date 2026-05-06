// routes/ai.js
const express = require("express");
const router = express.Router();
const OpenAI = require("openai");

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

router.post("/explain", async (req, res) => {
  const { algorithm } = req.body;

  const response = await client.chat.completions.create({
    model: "gpt-4.1-mini",
    messages: [
      {
        role: "user",
        content: `Explain ${algorithm} in simple terms with steps, example, and time complexity`
      }
    ]
  });

  res.json({ explanation: response.choices[0].message.content });
});

module.exports = router;