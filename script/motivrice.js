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

module.exports.run = async function({ api, event, args }) {
  const input = args.join(' ').toLowerCase();

  if (input !== 'on') {
    return api.sendMessage(`Type the command "ð— ð—¼ð˜ð—¶ð˜ƒð—®ð˜ð—¶ð—¼ð—»ð—®ð—¹ð—¥ð—¶ð—°ð—² ð—¼ð—»" to activate.`, event.threadID, event.messageID);
  }

  const lines = [
    "ðŸŒ¾ Alam mo may pinagdadaanan ka... pero bakit do'n ka dumaan? Ang sikip kaya! ðŸš§",
    "âœ¨ Hindi lahat ng umiiyak ay malungkot. Minsan, naiiyak ka kasi masyado kang gutom. ðŸš",
    "ðŸ’ª Kaya mo 'yan! Kung kinaya mong maghintay ng delivery na 2 hours, kakayanin mo rin ang buhay. ðŸ›µ",
    "ðŸ‹ï¸â€â™‚ï¸ Huwag kang susuko! Kung yung bigas nga naluluto, ikaw pa kaya? ðŸ”¥",
    "ðŸ›¤ï¸ Kapag nahulog ka, bumangon ka agad. Baka madaganan ka pa ng tren! ðŸš‚",
    "ðŸŒŸ Walang mahirap sa taong determinado. Pero kung tamad ka, sorry na lang. ðŸ˜…",
    "â³ Huwag mong madaliin ang tagumpay, parang sinaing 'yan, mas masarap kung dahan-dahan. ðŸ²",
    "ðŸ¤” Kung hindi mo alam ang gagawin, tandaan mo: kahit ang tubig, nakakahanap ng daan pababa. ðŸŒŠ",
    "ðŸƒ Huwag kang mag-alala kung binabato ka ng problema, baka naman hinog ka na. ðŸŒ³",
    "ðŸ”¥ Kapag mainit ang paligid, kalma lang. Ganyan talaga kapag nasa rice cooker ka. ðŸ¥µ",
    "ðŸŽ¯ Hindi mo kailangang maging perpekto. Ang mahalaga, ginagawa mo ang best mo kahit lutang ka. ðŸš€",
    "ðŸ’¡ Kapag iniwan ka ng iba, isipin mo: baka hindi sila deserving sa tagumpay mo. ðŸ†",
    "ðŸŒˆ Ang ulan ay hindi hadlang para sumikat ang araw. Pero huwag kang magbabad, baka magkasakit ka. â˜”",
    "ðŸ•µï¸â€â™‚ï¸ Kapag naghahanap ka ng inspirasyon, huwag mong kalimutang tumingin sa salamin. Ang gwapo/ganda mo kaya! ðŸªž",
    "ðŸš´â€â™‚ï¸ Kung nadapa ka, bumangon ka. Walang rider na nakarating sa destinasyon nang hindi tumayo. ðŸš´",
    "ðŸ£ Ang itlog nga, pinapaitlog pa muna bago maging sisiw. Ikaw pa ba? Maghintay ka lang sa panahon mo. ðŸ•Šï¸",
    "ðŸ›‘ Huwag kang sumuko. Kung yung labada nga nalalabhan, ang problema mo pa kaya? ðŸ§º",
    "ðŸšª Kapag sarado na ang pintuan, hanapin mo yung bintana. Kung wala pa rin, sumilip ka sa butas ng pinto. ðŸ•³ï¸",
    "ðŸ”ï¸ Kahit mabigat ang problema, tandaan mo: hindi ka nag-iisa. May backpack ka, d'yan mo ilagay! ðŸŽ’",
    "ðŸ˜Ž Walang imposible sa taong handang kumilos. Pero kung nasa kama ka lang, sorry, tulog ka talaga. ðŸ›Œ" ,
    " YUN LANG SANA MAY NATUTUNANAN KANG KUPAL KA!"
  ];

  for (let i = 0; i < lines.length; i++) {
    setTimeout(() => {
      api.sendMessage(lines[i], event.threadID);
    }, i * 5000); // Sends a line every 5 seconds
  }
};