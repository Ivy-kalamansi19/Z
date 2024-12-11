module.exports.config = {
  name: "confess",
  version: "1.0.0",
  role: 0,
  description: "Use it to impress the girls (now with Tagalog and English lines)",
  usePrefix: false,
  commandCategory: "fun",
  usages: "confess @mention",
  cooldowns: 1,
};

module.exports.run = async function ({ api, event, args }) {
  try {
    const mention = Object.keys(event.mentions);

    if (mention.length !== 1) {
      api.sendMessage('Please mention one girl to confess.', event.threadID, event.messageID);
      return;
    }

    const mentionName = event.mentions[mention[0]].replace('@', '');

    // List of pickup lines (English and Tagalog)
    const pickupLines = [
      // English Pickup Lines
      "Are you a magician? Because whenever I look at you, everyone else disappears.",
      "Are you French? Because Eiffel for you.",
      "Do you have a map? I keep getting lost in your eyes.",
      "Are you a time traveler? Because I see you in my future.",
      "Is your name Google? Because you have everything I'm searching for.",
      "Are you a camera? Every time I look at you, I smile.",
      "Do you believe in love at first sight, or should I walk by again?",
      "If beauty were time, you'd be eternity.",
      "Is it hot in here, or is it just you?",
      "Are you an angel? Because heaven is missing one.",

      // Tagalog Pickup Lines
      "Parang traffic light kaâ€”kasi tumitigil ako tuwing nakikita kita.",
      "May lahi ka bang keyboard? Kasi type na type kita.",
      "Parang kape ka, ang init mo kasi.",
      "Ang pangalan mo ba ay WiFi? Kasi nararamdaman ko ang koneksyon natin.",
      "Mataas ba ang grade mo sa Math? Kasi solution kita sa mga problema ko.",
      "Parang asukal kaâ€”pampatamis ng buhay ko.",
      "Alam mo bang may magnet ka? Kasi hinahatak mo ako palapit sa'yo.",
      "Parang kulang ang oras ko kapag di kita kausap.",
      "Parang tubig kaâ€”hindi ako mabubuhay kung wala ka.",
      "Nakakapagod bang maging maganda? Kasi parang ikaw ang dahilan ng pagod ko araw-araw."
    ];

    // Randomly select a pickup line
    const pickupLine = pickupLines[Math.floor(Math.random() * pickupLines.length)];
    const message = `${mentionName}, ${pickupLine} ðŸ’`;

    await api.sendMessage({
      body: message,
      mentions: [{
        tag: mentionName,
        id: mention[0],
        fromIndex: message.indexOf(mentionName),
        toIndex: message.indexOf(mentionName) + mentionName.length,
      }],
    }, event.threadID, event.messageID);

  } catch (error) {
    console.error(`Failed to send pickup line: ${error.message}`);
    api.sendMessage('Sorry, something went wrong while trying to tell a line. Please try again.', event.threadID);
  }
};