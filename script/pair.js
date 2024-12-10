const axios = require("axios");

module.exports = {
  config: {
    name: "pair",
    aliases: [],
    version: "1.2",
    countDown: 5,
    role: 0,
    category: "fun",
    guide: "{pn}"
  },

  onStart: async function({ api, event, usersData }) {
    const { threadID, messageID, senderID } = event;
    const { participantIDs } = await api.getThreadInfo(threadID);

    // Get sender name
    const senderName = (await usersData.get(senderID)).name;

    // Filter other participants excluding bot and sender
    const botID = api.getCurrentUserID();
    const otherParticipants = participantIDs.filter(
      id => id !== botID && id !== senderID
    );

    // Select a random participant
    const randomID = otherParticipants[Math.floor(Math.random() * otherParticipants.length)];
    const pairedName = (await usersData.get(randomID)).name;

    // Mentions array
    const mentions = [
      { id: senderID, tag: senderName },
      { id: randomID, tag: pairedName }
    ];

    // Compatibility percentage
    const compatibility = Math.floor(Math.random() * 101);

    // Wedding-themed emoji message
    const message = `
🌼💖🌸✨💝💐✨🌸💖🌼
𝗖𝗼𝗻𝗴𝗿𝗮𝘁𝘂𝗹𝗮𝘁𝗶𝗼𝗻𝘀! 🎉  
𝗣𝗮𝗶𝗿𝗲𝗱: 💞 @${senderName} 💓 @${pairedName} 💞  
𝗖𝗼𝗺𝗽𝗮𝘁𝗶𝗯𝗶𝗹𝗶𝘁𝘆: ${compatibility}%  

🌹𝗪𝗶𝘀𝗵𝗶𝗻𝗴 𝘆𝗼𝘂 𝗯𝗼𝘁𝗵 𝗮 𝗳𝘂𝗹𝗹 𝗹𝗼𝘃𝗲 𝗮𝗻𝗱 𝗵𝗮𝗽𝗽𝗶𝗻𝗲𝘀𝘀 𝗶𝗻 𝘁𝗵𝗲 𝗷𝗼𝘂𝗿𝗻𝗲𝘆 𝗼𝗳 𝗹𝗼𝘃𝗲. 💖  
🌼💖🌸✨💝💐✨🌸💖🌼
`;

    // Send message with mentions
    return api.sendMessage(
      { body: message, mentions },
      threadID,
      messageID
    );
  }
};
