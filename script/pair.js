module.exports.run = async function ({ api, event, usersData }) {
  try {
    const { threadID, senderID } = event;
    const { participantIDs } = await api.getThreadInfo(threadID);

    console.log("Participant IDs:", participantIDs);

    const otherMembers = participantIDs.filter(id => id !== senderID);

    if (otherMembers.length === 0) {
      return api.sendMessage('Walang ibang participant na available.', threadID, event.messageID);
    }

    const randomMemberID = otherMembers[Math.floor(Math.random() * otherMembers.length)];
    const senderName = (await usersData.get(senderID)).name || "Sender";
    const randomMemberName = (await usersData.get(randomMemberID)).name || "Random Member";

    console.log("Sender:", senderName);
    console.log("Random Member:", randomMemberName);

    const compatibility = Math.floor(Math.random() * 101);
    const topLayer = "🌸🌺🌷🌹🍃💐";
    const bottomLayer = "🍃🌹🌷🌺🌸💐";

    const message = `
${topLayer}
🎉 𝗟𝗢𝗩𝗘 𝗖𝗢𝗠𝗣𝗔𝗧𝗜𝗕𝗜𝗟𝗜𝗧𝗬! 🎊  
💖 𝗣𝗮𝗿𝘁𝗻𝗲𝗿𝘀: 💞 @${senderName} 💘 @${randomMemberName} 💞  
📊 𝗖𝗼𝗺𝗽𝗮𝘁𝗶𝗯𝗶𝗹𝗶𝘁𝘆: ${compatibility}%  

💐🌸𝗺𝘂𝗸𝗵𝗮𝗻𝗴 𝗸𝗮𝘆𝗼 𝗮𝗻𝗴 𝗯𝗮𝗴𝗮𝘆! 😍  
${bottomLayer}
`;

    await api.sendMessage(
      {
        body: message,
        mentions: [
          { tag: senderName, id: senderID },
          { tag: randomMemberName, id: randomMemberID },
        ]
      },
      threadID
    );
  } catch (error) {
    console.error("Error:", error);
    api.sendMessage('Sorry, something went wrong while sending the message.', event.threadID);
  }
};
