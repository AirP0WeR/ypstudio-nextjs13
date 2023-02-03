import TelegramBot from "node-telegram-bot-api";

export default function Telegram(arg) {
  const token = "5762646878:AAE4u6KV6tKGsNV-nFck2tYFVEAbeemhFmE";
  const bot = new TelegramBot(token, { polling: true });

  bot.on("message", (msg) => {
    const chatId = msg.chat.id;

    // send a message to the chat acknowledging receipt of their message
    bot.sendMessage(chatId, {arg});
  });
}
