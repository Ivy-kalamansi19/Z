module.exports.config = {
  name: "pair",
  version: "1.0.0",
  role: 0,
  description: "Pair sender with a random member in the group with floral-themed messages.",
  usePrefix: false,
  commandCategory: "fun",
  usages: "pair",
  cooldowns: 1,
};

module.exports.run = async function ({ api, event, usersData }) {
  try {
    const { threadID, senderID } = event;
    const { participantIDs } = await api.getThreadInfo(threadID);

    // Exclude the sender from the pool of potential pair members
    const otherMembers = participantIDs.filter(id => id !== senderID);

    // Randomly select a member to pair with the sender
    const randomMemberID = otherMembers[Math.floor(Math.random() * otherMembers.length)];
    const randomMemberName = (await usersData.get(randomMemberID)).name;
    const senderName = (await usersData.get(senderID)).name;

    // Random compatibility percentage
    const compatibility = Math.floor(Math.random() * 101);

    // Multi-layered floral theme borders
    const topLayer = "🌸🌼🌿🌺🍃💐";
    const bottomLayer = "🍃🌺🌼🌿🌸💐";

    // Message Content
    const message = `
${topLayer}  
𝗖𝗼𝗻𝗴𝗿𝗮𝘁𝘂𝗹𝗮𝘁𝗶𝗼𝗻𝘀! 🎉  
𝗣𝗮𝗶𝗿𝗲𝗱: 💞 @${senderName} 💓 @${randomMemberName} 💞  
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
          id: senderID,
          fromIndex: message.indexOf(senderName),
          toIndex: message.indexOf(senderName) + senderName.length,
        },
        {
          tag: randomMemberName,
          id: randomMemberID,
          fromIndex: message.indexOf(randomMemberName),
          toIndex: message.indexOf(randomMemberName) + randomMemberName.length,
        },
      ]
    }, threadID, event.messageID);

  } catch (error) {
    console.error(`Error: ${error.message}`);
    api.sendMessage('Sorry, something went wrong while sending the message.', event.threadID);
  }
};
