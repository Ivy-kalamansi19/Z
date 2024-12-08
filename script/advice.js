const axios = require('axios');

module.exports.config = {
  name: 'Advice',
  version: '1.0.0',
  role: 0,
  hasPermission: 0,
  usePrefix: false,
  aliases: ['Advice'],
  description: "Delivers hilariously bad advice in a sequence of 50 messages when triggered.",
  usages: "advice on",
  credits: 'Developer',
  cooldowns: 5,
};

module.exports.run = async function({ api, event, args }) {
  const input = args.join(' ').toLowerCase();

  if (input !== 'on') {
    return api.sendMessage(`Type the command "𝗔𝗱𝘃𝗶𝗰𝗲 𝗼𝗻" to activate.`, event.threadID, event.messageID);
  }

  const messages = [
    "🛑 Gutom ka? Tumitig ka lang sa harap ng ref, baka mapuno yan ng magic!",
    "🧠 Feeling stressed? Subukan mong sumigaw sa tenga ng kapitbahay mo. Effective na stress reliever daw yan!",
    "🚗 Hindi marunong magmaneho? Subukan mong sumakay ng kotse habang nakapikit. Spontaneous adventure!",
    "💵 Problema sa pera? Print mo na lang sa papel. DIY millionaire vibes!",
    "🏃 Pagod ka? Huwag na magpahinga. Malay mo, sa sunod na buhay mo, tulog ka na lang forever.",
    "🎤 Naiwan ka ng crush mo? Sumulat ka ng kanta para sa kanya. Tapos ipadala mo sa karaoke machine.",
    "🌧️ Umiiyak ka? Lumabas ka na lang sa ulan. Libre nang hugas ng mukha.",
    "🐕 Feeling lonely? Kaibiganin mo yung aso ng kapitbahay mo. Malay mo, magtaksil siya sayo.",
    "📞 Wala kang kausap? Tawagan mo ex mo, masarap mag-away kahit walang dahilan.",
    "🌋 Naiinip ka? Subukan mong sumigaw sa bunganga ng bulkan. Travel goals!",
    "📱 Gusto mo magpaka-mysterious? Itapon mo cellphone mo para wala na contact sayo.",
    "🎉 Nalulungkot ka? Magparty ka mag-isa sa banyo. Mga tiles lang ang kailangan mong audience.",
    "📚 Ayaw mong mag-aral? Subukan mong tikman ang libro mo. Baka masarap pala!",
    "👀 Feeling mo pangit ka? Sumilip ka sa salamin sa gabi. Malay mo, gumanda ka bigla.",
    "🏢 Ayaw mo sa trabaho? Maghanap ka ng puno at doon mag-apply bilang shade provider.",
    "🛏️ Nahihirapan kang makatulog? Subukan mong magbilang ng kalokohan na nagawa mo sa buhay.",
    "🕶️ Feeling cool? Mag-sunglasses ka kahit nasa dilim. Yung tipong wala kang makita.",
    "🍔 Gusto mong makatipid? Kumain ka ng hangin. Healthy pa raw yan sabi ng doktor mo.",
    "💌 May gusto ka sa isang tao? Sulatan mo ng love letter na walang laman. Para mysterious.",
    "🎭 May kaaway ka? Bigyan mo ng regalo, pero lagyan mo ng trap sa loob. Surprise bonding!"
  ];

  for (let i = 0; i < messages.length; i++) {
    setTimeout(() => {
      api.sendMessage(messages[i], event.threadID);
    }, i * 5000); // Sends a message every 5 seconds
  }
};
