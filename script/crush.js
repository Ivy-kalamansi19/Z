const axios = require('axios');

module.exports.config = {
  name: 'crush',
  version: '1.0.0',
  role: 0,
  hasPermission: 0,
  usePrefix: false,
  aliases: ['crush'],
  description: "Delivers fun and comedic lines about crushes.",
  usages: "crush on",
  credits: 'Developer',
  cooldowns: 5,
};

module.exports.run = async function({ api, event, args }) {
  const input = args.join(' ').toLowerCase();

  if (input !== 'on') {
    return api.sendMessage(`Type the command "💖💘💋💕💞 💖💗" to activate.`, event.threadID, event.messageID);
  }

  const lines = [
    "😍 Crush, wag ka magagalit ha... pero bagay sayo yung uniform ng Jollibee. Pang service crew? Kasi gusto kong magpa-serve sayo. 🥰",
    "😂 Sabi nila huwag daw maghintay sa wala... pero okay lang, kasi kahit wala ka, hihintayin kita. 💖💏",
    "😜 Crush, ikaw ba yung tinapay sa bakery? Kasi ang sarap mong pagmasdan kahit walang palaman. 🍞",
    "🥰 Kung pag-ibig lang ang tanong, ikaw lang ang sagot. Pero kung Math, sorry bagsak ako dun. ➖",
    "😇 Crush, may narinig ako... sabi daw ng langit, ikaw daw ang pinakamaganda sa batch ng mga anghel. 😇",
    "💖 Crush, para kang kape, kasi kahit mapait ang buhay, sumasarap dahil sayo. ☕",
    "😳 'Di ka ba napapagod? Eh kasi buong araw ka na sa isip ko. 💡 ",
    "😂 Crush, ikaw ba si Google? Kasi lahat ng hinahanap ko, nasa’yo. 🌐",
    "😌 Alam mo crush, para kang test paper... hindi kita masagutan pero paulit-ulit pa rin akong bumabalik sayo. 📝",
    "🤩 Crush, ikaw ba ang bahaghari? Kasi sumaya ang mundo ko nang makita ka. 🌈",
    "🤤 Kapag kasama kita, parang may pag-asa pa ang buhay ko... kahit sabaw ako! 🍜",
    "😍 Alam mo crush, parang kang alarm clock... kasi ginigising mo yung puso ko araw-araw. ⏰",
    "😕 'Di mo ba napapansin? Para akong chicharon kapag nakita ka... kasi nagka-crush! 🐷",
    "❤️ Crush, kung magiging halaman ako, ikaw na ang araw ko... kasi kailangan kita para mabuhay. 🌞",
    "😚 Crush, bakit ang gwapo mo/ganda mo? Napapansin mo bang unfair sa iba? Pero okay lang, kasi sa akin ka naman! 😘",
    "😎 Ikaw lang ang nagagawa kong excuse para ngumiti kahit bad trip na ako buong araw. 😏",
    "🤷‍♀️ Crush, gusto kita... hindi dahil perfect ka, kundi dahil sa flaws mo na perfect para sakin. 😌",
    "😂 Sabi nila, dapat daw hindi ako nagpapakatanga... pero paano? Ang tanga ko sayo eh! 😩",
    "😅 Crush, pagod ka na ba? Eh kasi naman, ang bigat mo sa puso ko. 💓"
  ];

  for (let i = 0; i < lines.length; i++) {
    setTimeout(() => {
      api.sendMessage(lines[i], event.threadID);
    }, i * 5000); // Sends a line every 5 seconds
  }
};
