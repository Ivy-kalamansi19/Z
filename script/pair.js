module.exports.config = {
  name: "pair",
  version: "1.0.0",
  role: 0,
  description: "Pair users with a floral-themed message.",
  usePrefix: false,
  commandCategory: "fun",
  usages: "pair @mention",
  cooldowns: 1,
};

module.exports.run = async function ({ api, event, args, usersData }) {
  try {
    const mention = Object.keys(event.mentions);

    if (mention.length !== 1) {
      api.sendMessage('Please mention only one user to pair.', event.threadID, event.messageID);
      return;
    }

    const mentionName = event.mentions[mention[0]];
    const senderName = (await usersData.get(event.senderID)).name;

    // Define compatibility percentage
    const compatibility = Math.floor(Math.random() * 101);

    // Multi-layered floral theme borders
    const topLayer = "🌸🌼🌿🌺🍃💐🌼❤️";
    const bottomLayer = "🍃🌺🌼🌿🌸💐🌼✨";

    // Message Content
    const message = `
${topLayer}  
𝗖𝗼𝗻𝗴𝗿𝗮𝘁𝘂𝗹𝗮𝘁𝗶𝗼𝗻𝘀! 🎉  
𝗣𝗮𝗶𝗿𝗲𝗱: 💞 @${senderName} 💓 @${mentionName} 💞  
𝗖𝗼𝗺𝗽𝗮𝘁𝗶𝗯𝗶𝗹𝗶𝘁𝘆: ${compatibility}%  

💐🌸 𝗪𝗶𝘀𝗵𝗶𝗻𝗴 𝘆𝗼𝘂 𝗯𝗼𝘁𝗵 𝗮 𝗳𝘂𝗹𝗹 𝗹𝗼𝘃𝗲 𝗮𝗻𝗱 𝗵𝗮𝗽𝗽𝗶𝗻𝗲𝘀𝘀 𝗶𝗻 𝘁𝗵𝗲 𝗷𝗼𝘂𝗿𝗻𝗲𝘆 𝗼𝗳 𝗹𝗼𝘃𝗲. 💖  
${bottomLayer}
`;

    // Send message with mentions
    await api.sendMessage({
      body: message,
      mentions: [
        {
          tag: senderName,
          id: event.senderID,
          fromIndex: message.indexOf(senderName),
          toIndex: message.indexOf(senderName) + senderName.length,
        },
        {
          tag: mentionName,
          id: mention[0],
          fromIndex: message.indexOf(mentionName),
          toIndex: message.indexOf(mentionName) + mentionName.length,
        },
      ]
    }, event.threadID, event.messageID);

  } catch (error) {
    console.error(`Error: ${error.message}`);
    api.sendMessage('Sorry, something went wrong while sending the message.', event.threadID);
  }
};
