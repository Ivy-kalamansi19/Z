const axios = require('axios');

module.exports.config = {
  name: 'battle',
  version: '1.0.0',
  role: 0,
  hasPermission: 0,
  usePrefix: false,
  aliases: ['battle'],
  description: "Triggers a sequence of brutal battle messages.",
  usages: "battle on",
  credits: 'Developer',
  cooldowns: 5,
};

module.exports.run = async function({ api, event, args }) {
  const input = args.join(' ').toLowerCase();

  if (input !== 'on') {
    return api.sendMessage(`Type the command "⚔️ Battle on" to activate.`, event.threadID, event.messageID);
  }

  const messages = [
    "Walang silbi ang yabang mo, mukha kang basahan na pinulot sa kalsada.",
    "Ang kapal ng mukha mong magtapang-tapangan, pero wala ka namang maipakita.",
    "Kung utak ang puhunan, bankrupt ka na simula pagkasilang mo.",
    "Kung pagiging tanga ay sport, sigurado kang Olympic champion ka.",
    "Puro ka satsat, para kang sirang radyo na walang nakikinig.",
    "Mukha kang itinapon na tae na pilit gumagapang pabalik.",
    "Alam mo kung bakit ka walang kaibigan? Kasi puro ka basura.",
    "Kung utak ay pera, pulubi ka na sa buong mundo.",
    "Angas mo sa chat, pero sa personal parang kang asong ulol na natatakot.",
    "Mukha kang salamin na nabasag, walang direksyon ang buhay mo.",
    "Akala mo siguro matapang ka, pero utak mo wala sa lugar.",
    "Para kang lumang damit, wala nang may gustong magsuot sa’yo.",
    "Kung kahihiyan ang puhunan, milyonaryo ka na sigurado.",
    "Puro yabang, pero hanggang salita ka lang. Walang laman ang ulo mo.",
    "Kung kabobohan may award, ikaw na ang hall of famer.",
    "Hindi mo kailangang magpanggap na matalino, halatang bobo ka talaga.",
    "Alam mo ba ang pinakamalaking joke? Mukha mo.",
    "Parang kang papel na napunit—walang halaga at madaling itapon.",
    "Kung buhay mo pelikula, siguradong horror dahil mukha mo lang ang nakakatakot.",
    "Ang tapang mo sa harapan ng keyboard, pero pagharap, parang daga ka.",
    "Pangarap mo sigurong maging tao, pero hanggang ngayon, mukhang palaka ka pa rin.",
    "Kung pagiging bobo ay karera, sigurado akong unang tapos ka.",
    "Mukha kang sinukuan na ng Diyos, pati anghel tinamad kang tulungan.",
    "Huwag kang magtangkang magyabang, baka tuluyan kang matauhan sa realidad.",
    "Para kang librong walang laman, hindi kapaki-pakinabang.",
    "Ang hangin mo, parang kanal na umaalingasaw—walang kwenta.",
    "Mukha kang luma’t basag na laruan na wala nang gustong maglaro.",
    "Hindi kita masisisi kung bobo ka—baka wala ka talagang pinanggalingan.",
    "Paano ka lumaki ng ganyan? Parang ikaw na pinakamalaking joke ng mundo.",
    "Ang yabang mo, pero ang mukha mo parang kahapon na pinagsisihan ng mundo."
  ];

  for (let i = 0; i < messages.length; i++) {
    setTimeout(() => {
      api.sendMessage(messages[i], event.threadID);
    }, i * 5000); // Sends a message every 5 seconds
  }
};
