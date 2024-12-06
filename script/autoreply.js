module.exports.config = {
  name: "autoreply",
  version: "1.0.0",
  role: 0,
  credits: "Modified by fbbot dude",
  description: "Auto reply to common user messages with casual responses.",
  usePrefix: false,
  commandCategory: "fun",
  usages: "auto-reply to messages",
  cooldowns: 1,
};

module.exports.run = async function ({ api, event, args }) {
  try {
    const userMessage = event.body.toLowerCase(); // Get the user's message
    let botReply = "";

    // Define casual responses
    const replies = {
      hi: "Hello! Kumusta ka?",
      hello: "Hi! Ano balita?",
      hey: "Hey there! Anong ginagawa mo?",
      kamusta: "Okay naman, ikaw?",
      goodmorning: "Good morning! Sana maganda ang araw mo!",
      goodafternoon: "Good afternoon! Chill ka lang diyan.",
      goodnight: "Good night! Sweet dreams!",
      thankyou: "Walang anuman!",
      bye: "Bye! Ingat ka lagi!"
    };

    // Check if the message matches any predefined key
    if (replies[userMessage]) {
      botReply = replies[userMessage];
    } else {
      botReply = "Zup🥳";
    }

    // Send the bot's reply
    await api.sendMessage(botReply, event.threadID, event.messageID);
  } catch (error) {
    console.error(`Error in auto-reply: ${error.message}`);
    api.sendMessage("Eyo🌼", event.threadID);
  }
};
