import "dotenv/config";
import { OpenRouter } from "@openrouter/sdk";

const client = new OpenRouter({
  apiKey: process.env.OPEN_ROUTER_API_KEY
});

async function bot(){
    const response = await client.responses.send({
        responsesRequest: {
        model: 'gpt-4o-mini',
        input: 'What is the meaning of life?',
  }
    })
    if (!('output' in response)) {
  throw new Error('Expected a non-streaming response');
}
if (response.status !== 'completed') {
  throw new Error(response.error?.message ?? `Response ended as ${response.status}`);
}
const message = response.output.find((item) => item.type === 'message');
console.log(message?.content.find((part) => part.type === 'output_text')?.text);
}

bot();