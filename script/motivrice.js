const axios = require('axios');

module.exports.config = {
  name: 'motivationalRice',
  version: '1.0.0',
  role: 0,
  hasPermission: 0,
  usePrefix: false,
  aliases: ['rice', 'motivation'],
  description: "Sends humorous yet motivational lines.",
  usages: "motivationalRice on",
  credits: 'Developer',
  cooldowns: 5,
};

module.exports.run = async function ({ api, event, args }) {
  const { threadID, messageID } = event;
  const input = args.join(' ').toLowerCase();

  if (input !== 'on') {
    return api.sendMessage(
      `Type the command "motivationalRice on" to activate.`,
      threadID,
      messageID
    );
  }

  const lines = [
    "🌾 Alam mo may pinagdadaanan ka... pero bakit do'n ka dumaan? Ang sikip kaya! 🚧",
    "✨ Hindi lahat ng umiiyak ay malungkot. Minsan, naiiyak ka kasi masyado kang gutom. 🍴",
    "💪 Kaya mo 'yan! Kung kinaya mong maghintay ng delivery na 2 hours, kakayanin mo rin ang buhay. 🛵",
    "👨‍🍳 Huwag kang susuko! Kung yung bigas nga naluluto, ikaw pa kaya? 🔥",
    "🤔 Kapag nahulog ka, bumangon ka agad. Baka madaganan ka pa ng tren! 🚂",
    "🌟 Walang mahirap sa taong determinado. Pero kung tamad ka, sorry na lang. 😂",
    "⏳ Huwag mong madaliin ang tagumpay, parang sinaing 'yan, mas masarap kung dahan-dahan. 🍚",
    "🌊 Kung hindi mo alam ang gagawin, tandaan mo: kahit ang tubig, nakakahanap ng daan pababa. 💧",
    "🍃 Huwag kang mag-alala kung binabato ka ng problema, baka naman hinog ka na. 🌳",
    "🔥 Kapag mainit ang paligid, kalma lang. Ganyan talaga kapag nasa rice cooker ka. 🍚",
    "🎯 Hindi mo kailangang maging perpekto. Ang mahalaga, ginagawa mo ang best mo kahit lutang ka. 🚀",
    "💡 Kapag iniwan ka ng iba, isipin mo: baka hindi sila deserving sa tagumpay mo. 🏆",
    "☔ Ang ulan ay hindi hadlang para sumikat ang araw. Pero huwag kang magbabad, baka magkasakit ka. 🌞",
    "🪞 Kapag naghahanap ka ng inspirasyon, huwag mong kalimutang tumingin sa salamin. Ang gwapo/ganda mo kaya! 🤩",
    "🚴‍♂️ Kung nadapa ka, bumangon ka. Walang rider na nakarating sa destinasyon nang hindi tumayo. 🚲",
    "🥚 Ang itlog nga, pinapaitlog pa muna bago maging sisiw. Ikaw pa ba? Maghintay ka lang sa panahon mo. 🐣",
    "🧺 Huwag kang sumuko. Kung yung labada nga nalalabhan, ang problema mo pa kaya? 🧼",
    "🔑 Kapag sarado na ang pintuan, hanapin mo yung bintana. Kung wala pa rin, sumilip ka sa butas ng pinto. 🪟",
    "🎒 Kahit mabigat ang problema, tandaan mo: hindi ka nag-iisa. May backpack ka, d'yan mo ilagay! 🎒",
    "😎 Walang imposible sa taong handang kumilos. Pero kung nasa kama ka lang, sorry, tulog ka talaga. 🛌",
    "YUN LANG SANA MAY NATUTUNANAN KANG KUPAL KA!"
  ];

  for (let i = 0; i < lines.length; i++) {
    setTimeout(() => {
      api.sendMessage(lines[i], threadID);
    }, i * 5000); // Sends a line every 5 seconds
  }
};
