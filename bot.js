import "dotenv/config";
import OpenAI from "openai"

const client = new OpenAI({
  baseURL: "https://openrouter.ai/api/v1",
  apiKey: process.env.OPEN_ROUTER_API_KEY
})

async function bot() {
    const response = await client.responses.create({
        model: "gpt-4o-mini",
        input: "Hello, how are you?"
    });

    console.log(response.output_text);
}

bot();