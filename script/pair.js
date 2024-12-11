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
    const topLayer = "ðŸŒ¸ðŸŒ¼ðŸŒ¿ðŸŒºðŸƒðŸ’";
    const bottomLayer = "ðŸƒðŸŒºðŸŒ¼ðŸŒ¿ðŸŒ¸ðŸ’";

    const message = `
${topLayer}
ð—–ð—¼ð—»ð—´ð—¿ð—®ð˜ð˜‚ð—¹ð—®ð˜ð—¶ð—¼ð—»ð˜€! ðŸŽ‰  
ð—£ð—®ð—¶ð—¿ð—²ð—±: ðŸ’ž @${senderName} ðŸ’“ @${randomMemberName} ðŸ’ž  
ð—–ð—¼ð—ºð—½ð—®ð˜ð—¶ð—¯ð—¶ð—¹ð—¶ð˜ð˜†: ${compatibility}%  

ðŸ’ðŸŒ¸ ð—ªð—¶ð˜€ð—µð—¶ð—»ð—´ ð˜†ð—¼ð˜‚ ð—¯ð—¼ð˜ð—µ ð—® ð—³ð˜‚ð—¹ð—¹ ð—¹ð—¼ð˜ƒð—² ð—®ð—»ð—± ð—µð—®ð—½ð—½ð—¶ð—»ð—²ð˜€ð˜€ ð—¶ð—» ð˜ð—µð—² ð—·ð—¼ð˜‚ð—¿ð—»ð—²ð˜† ð—¼ð—³ ð—¹ð—¼ð˜ƒð—². ðŸ’–  
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