import "dotenv/config";
import OpenAI from "openai"
import readline from "readline/promises"
import { stdin as input, stdout as output } from "node:process"

const rl = readline.createInterface({ input, output });

const client = new OpenAI({
  baseURL: "https://openrouter.ai/api/v1",
  apiKey: process.env.OPEN_ROUTER_API_KEY
})
const messages = [
    {role: "system", content: "You are a helpful AI assistant."}
];
async function bot() {
    while (true) {
        const userInput = await rl.question("\nYou: ");
        messages.push({role: "user", content: userInput});
        const response = await client.responses.create({
        model: "gpt-4o-mini",
        input: messages
    });

    console.log("AI: " + response.output_text);
    messages.push({role: "assistant", content: response.output_text});
    }
    rl.close();
}

bot();