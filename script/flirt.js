const axios = require('axios');

module.exports.config = {
  name: 'flirt',
  version: '1.0.0',
  role: 0,
  hasPermission: 0,
  usePrefix: false,
  aliases: ['flirt'],
  description: "Delivers a sequence of flirtatious or humorous lines with emojis.",
  usages: "flirt on",
  credits: 'Developer',
  cooldowns: 5,
};

module.exports.run = async function({ api, event, args }) {
  const input = args.join(' ').toLowerCase();

  if (input !== 'on') {
    return api.sendMessage(`Type the command "𝗳𝗹𝗶𝗿𝘁 𝗼𝗻" to activate.`, event.threadID, event.messageID);
  }

  const lines = [
    "😂 Oh mahal kong nilalangit nilalangaw pati pwet. 💩",
    "😍 Kung sa ganda mo ako'y samba, sa utot mo ako'y tumba. 💨",
    "✨ Kung sa langit ika'y tala, sa lupa ika'y tekla. 😂",
    "💁‍♀️ Buhok mo'y paalon-alon, kuto mo'y patalon-talon. 🐜",
    "👀 Mata mo'y singkit, muta mo'y dikit-dikit. 😅",
    "👃 Ilong mong matangos, sipon mo'y umaagos. 💦",
    "😁 Ngipin mo'y pantay-pantay, hininga mo'y amoy patay. 💀",
    "💕 Paano na ang buhay, kung sa'yo ako'y mamatay. 😢"
  ];

  for (let i = 0; i < lines.length; i++) {
    setTimeout(() => {
      api.sendMessage(lines[i], event.threadID);
    }, i * 3000); // Sends a line every 3 seconds
  }
};
