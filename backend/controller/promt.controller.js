import OpenAI from 'openai';
import Promt from '../model/promt.model.js';

const openai = new OpenAI({
  baseURL: 'https://openrouter.ai/api/v1',
  apiKey: process.env.OPENAI_API_KEY,
});

console.log(openai.apiKey);

export const sendPromt = async (req, res) => {
  const { content } = req.body;
  const userId=req.userId;

  if (!content || content.trim() === "") {
    return res.status(400).json({ error: "Prompt content is required" });
  }

  try {
    // Save user prompt
    const userPrompt = await Promt.create({
      userId,
      role: "user",
      content
    });

    // Send to OpenAI
    const completion = await openai.chat.completions.create({
      messages: [{ role: "user", content }],
      model: 'openai/gpt-4o',
      max_tokens: 500 
    });

    const aiContent = completion.choices[0].message.content;

    // Save assistant response
    const aiMessage = await Promt.create({
      userId,
      role: "assistant",
      content: aiContent,
    });

    return res.status(200).json({ reply: aiContent });

  } catch (error) {
    console.error("Error in Prompt:", error);
    return res.status(500).json({ error: "Error in Prompt" });
  }
};
