import { createGroq } from "@ai-sdk/groq";

const groq = createGroq({
  apiKey: process.env.GROQ_API_KEY,
});

export const model = groq("openai/gpt-oss-20b");

export const systemPrompt = `
You are a helpful AI assistant inside a frontend AI engineering project.

Answer clearly and concisely.
Maintain context across the conversation.
Use Markdown when it improves readability.
`;