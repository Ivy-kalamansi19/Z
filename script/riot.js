const axios = require('axios');

module.exports.config = {
  name: 'riot',
  version: '1.0.0',
  role: 0,
  hasPermission: 0,
  usePrefix: false,
  aliases: ['riot'],
  description: "Triggers a sequence of 62 aggressive messages when 'riot on' is used.",
  usages: "riot on",
  credits: 'Developer',
  cooldowns: 5,
};

module.exports.run = async function({ api, event, args }) {
  const input = args.join(' ').toLowerCase();

  if (input !== 'on') {
    return api.sendMessage(`Type the command "🔥riot on🔥" to activate.`, event.threadID, event.messageID);
  }

  const messages = [
    "⚔️ Putangina mo, tapang mo sa chat, pero duwag sa personal!",
    "💥 Ano, kaya mo ba 'to o puro ka lang dakdak?",
    "🏹 Hoy gago, asan ka na? Huwag kang magtago d'yan!",
    "🔥 Ang yabang mo kanina, ngayon parang daga ka!",
    "🛡️ Eh di wow, ang hina mo pala eh! Kahit anong angas mo wala ka namang binatbat!",
    "🎯 Target locked, ikaw na pinaka-palatandaan ng kahinaan!",
    "😤 Ang lakas ng bibig mo, pero sa gawa wala kang kwenta!",
    "🧠 Sabog utak mo? Akala mo siguro matatakot ako sa'yo, gago!",
    "🪓 Wala kang kwenta, parang plastik na madaling basagin!",
    "💣 Ayan na, pasabog na para sa'yo! Tanga ka kasing kausap eh!",
    "🛑 Drama mo gago, wala kang panalo rito!",
    "🥱 Ang boring mo, parang sirang plaka na walang kwenta!",
    "😎 Ang lakas mo magpasikat, pero wala kang ambag sa buhay!",
    "😂 Tanga ka talaga, parang clown na pinagtatawanan ng lahat!",
    "👍 Subukan mo pa gago, baka masaktan ka na ng todo!",
    "🤦 Ang dami mong drama, parang batang umiiyak sa playground!",
    "💀 Wala kang pag-asa, para kang lata na walang laman!",
    "🔥 Gago ka ba o sadyang bobo lang? Hindi ka nakakatakot!",
    "🏃‍♂️ Takbo pa, gago! Talo ka na naman!",
    "🐒 Isa kang malaking epal, wala kang ginawa kundi manggulo!",
    "🔪 Puro yabang ka, pero wala kang kaya! Kahit kutsilyo hindi mo magamit!",
    "👀 Ayaw mo na? Aba, duwag ka pala!",
    "🤡 Ang corny mo, parang tangang nagpapatawa!",
    "💥 Eh ano ngayon kung galit ka? Wala kang epekto sakin!",
    "🛡️ Anong depensa mo? Mukhang latang lata ka na ah!",
    "🔥 Laban? Wala kang binatbat, gago ka lang talaga!",
    "😒 Talo ka na nga, ang kapal pa ng mukha mo!",
    "🦌 Commander daw, pero mukha kang pobols!",
    "💥 Eto na ang karma mo, gago ka kasi!",
    "🪓 Ay nako, wala kang kwenta, ang dami mo pang sinasabi!",
    "🛑 Stop na? Eh di wow, loser ka talaga!",
    "😏 Ano, suko ka na? Parang batang umiiyak lang!",
    "🏹 Halatang fake ang tapang mo, parang papel na madaling mapunit!",
    "💢 Drama king, ikaw na talaga ang ultimate talunan!",
    "🗣️ Putangina ka, akala mo ba nakakatakot ka? Hindi!",
    "😑 Eh ano ngayon kung magalit ka? Wala akong pake!",
    "🔥 Ang yabang mo pero bobo ka naman!",
    "🛡️ Gamit ka pa ng tools, pero wala kang kaya kahit anong gawin mo!",
    "🤔 Nasa'n na yung yabang mo kanina? Parang wala na!",
    "🔔 Alert! May nagpakabobo na naman!",
    "🏆 Kahit anong gawin mo, talo ka na, gago!",
    "🌪️ Ikaw na ang pinakamalaking kalokohan sa buhay ng pamilya mo!",
    "💨 Tabi d'yan, ang bobo mo na ang gulo mo pa!",
    "🐒 Tapos ka na, wala ka nang maipakita!",
    "⚔️ Puro angas ka, pero wala kang napatunayan!",
    "🕒 Sige, magtago ka na lang, duwag!",
    "👍 Suntukan daw? Eh parang ikaw pa ang unang tatakbo!",
    "😂 Nakakatawa ka, parang kang malaking bwakanang shet!",
    "⚔️ Putangina mo, ang tapang-tapangan mo pero duwag ka rin naman!",
    "💥 Ang kapal ng mukha mo, wala kang silbi!",
    "🏹 Hoy gago, lumabas ka na para makita mo kung paano kita mapaiyak!",
    "🔥 Ang yabang mo? Aba, parang hangin lang na walang laman!",
    "🛡️ Ang hina mo, parang basag na salamin na madaling durugin!",
    "😤 Ang dami mong dada, pero walang binatbat, gago!",
    "🐒 Isa kang basura na walang silbi pwe!",
    "🤡 Tangina mo, ang corny mo talaga!!",
    "🛑 Tumigil ka na, ang drama mo ay parang sirang plaka na wala nang kwenta!",
    "🪓 Anong kaya mo? Walang kwenta, parang plastik na nagkatawang tae este tao!",
    "🦌 Duwag ka, puro ka dakdak pero walang gawa!",
    "🏹 Mukhang artista ka sa chat, pero sa labas, mukha kang homeless na tanga!",
    "🎯 Ayan, ikaw na ang hari ng mga tanga! Congrats!"
  ];

  for (let i = 0; i < messages.length; i++) {
    setTimeout(() => {
      api.sendMessage(messages[i], event.threadID);
    }, i * 5000); // Sends a message every 5 seconds
  }
};
