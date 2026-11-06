# 🤖 CLI AI Chatbot

A lightweight command-line AI chatbot built with **Node.js**, the **OpenAI SDK**, and **OpenRouter**. Chat with an AI assistant directly from your terminal with full conversation memory — no framework, no clutter, just one file.

---

## ✨ Features

- 💬 **Interactive CLI** — powered by Node.js `readline/promises` for clean async input
- 🧠 **Conversation memory** — maintains message history so the AI remembers context
- 🔌 **OpenRouter API** — access any model available on OpenRouter via the OpenAI-compatible SDK
- 🔐 **Environment variables** — API key kept safe with `dotenv`
- 📦 **Minimal setup** — a single `index.js` file, zero boilerplate
- ⚡ **Quick start** — run instantly with `npm run dev`

---

## 🛠️ Tech Stack

- **Node.js** (ES Modules)
- **OpenAI SDK** (pointed at OpenRouter's API)
- **readline/promises** for terminal I/O
- **dotenv** for config

---

## 🚀 Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/zohaibwebdev/AI-chatbot.git
cd your-repo
```

### 2. Install dependencies

```bash
npm install
```

### 3. Set up environment variables

Create a `.env` file in the project root:

```env
OPEN_ROUTER_API_KEY=your_api_key_here
```

> 🔑 Get your API key from [OpenRouter](https://openrouter.ai/keys).

### 4. Run the bot

```bash
npm run dev
```

---

## 📖 Usage

Once running, just type your message and hit **Enter**:

```
You: Hello!
AI: Hi there! How can I help you today?

You: What's the capital of Japan?
AI: The capital of Japan is Tokyo.
```

The bot keeps track of the conversation history until you exit with `Ctrl + C`.

---

## 📁 Project Structure

```
.
├── bot.js        # The entire chatbot (single file)
├── package.json
├── .env            # Your API key (not committed)
└── README.md
```

---

## 🔧 Customization

- **Change the AI's personality** — edit the `system` message in the `messages` array:
  ```js
  const messages = [
    { role: "system", content: "You are a sarcastic pirate AI." }
  ];
  ```

- **Use a different provider** — swap the `baseURL` in the `OpenAI` client config to point at OpenAI, Groq, Together, or any OpenAI-compatible API.

- **Pick a specific model** — pass a `model` parameter to your completion call:
  ```js
  const response = await client.chat.completions.create({
    model: "openai/gpt-4o-mini",
    messages
  });
  ```

- **Reset memory** — restart the app, or add a `/clear` command to reset the `messages` array.

---

## 📜 Available Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the chatbot |

---

## ⚠️ Notes

- Make sure your `.env` file is listed in `.gitignore` so your API key never gets committed.
- This project uses **ES Modules** — your `package.json` should include `"type": "module"`.

---

## 🤝 Contributing

Pull requests and ideas are welcome! Feel free to fork the repo, open an issue, or submit a PR.

---

## 📄 License

[MIT](LICENSE) — free to use, modify, and share.

---

## ⭐ Show your support

If you found this project helpful, give it a ⭐ on GitHub — it means a lot!
