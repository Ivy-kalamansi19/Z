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
    return api.sendMessage(`Type the command "ð—¥ð—¶ð—¼ð˜ ð—¼ð—»" to activate.`, event.threadID, event.messageID);
  }

  const messages = [
    "âš”ï¸ Putangina mo, tapang mo sa chat, pero duwag sa personal!",
    "ðŸ’¥ Ano, kaya mo ba 'to o puro ka lang dakdak?",
    "ðŸ¹ Hoy gago, asan ka na? Huwag kang magtago d'yan!",
    "ðŸ”¥ Ang yabang mo kanina, ngayon parang daga ka!",
    "ðŸ›¡ï¸ Eh di wow, ang hina mo pala eh! Kahit anong angas mo wala ka namang binatbat!",
    "ðŸŽ¯ Target locked, ikaw na pinaka-palatandaan ng kahinaan!",
    "ðŸ˜¤ Ang lakas ng bibig mo, pero sa gawa wala kang kwenta!",
    "ðŸ§¨ Sabog utak mo? Akala mo siguro matatakot ako sa'yo, gago!",
    "ðŸ—¡ï¸ Wala kang kwenta, parang plastik na madaling basagin!",
    "ðŸ’£ Ayan na, pasabog na para sa'yo! Tanga ka kasing kausap eh!",
    "ðŸ›‘ Drama mo gago, wala kang panalo rito!",
    "ðŸ¥± Ang boring mo, parang sirang plaka na walang kwenta!",
    "ðŸ˜Ž Ang lakas mo magpasikat, pero wala kang ambag sa buhay!",
    "ðŸ˜‚ Tanga ka talaga, parang clown na pinagtatawanan ng lahat!",
    "ðŸ‘Š Subukan mo pa gago, baka masaktan ka na ng todo!",
    "ðŸ¤¦ Ang dami mong drama, parang batang umiiyak sa playground!",
    "ðŸ’€ Wala kang pag-asa, para kang lata na walang laman!",
    "ðŸ”¥ Gago ka ba o sadyang bobo lang? Hindi ka nakakatakot!",
    "ðŸƒâ€â™‚ï¸ Takbo pa, gago! Talo ka na naman!",
    "ðŸª“ Isa kang malaking epal, wala kang ginawa kundi manggulo!",
    "ðŸ”ª Puro yabang ka, pero wala kang kaya! Kahit kutsilyo hindi mo magamit!",
    "ðŸ‘€ Ayaw mo na? Aba, duwag ka pala!",
    "ðŸ¤¡ Ang corny mo, parang tangang nagpapatawa!",
    "ðŸ’¥ Eh ano ngayon kung galit ka? Wala kang epekto sakin!",
    "ðŸ›¡ï¸ Anong depensa mo? Mukhang latang lata ka na ah!",
    "ðŸ”¥ Laban? Wala kang binatbat, gago ka lang talaga!",
    "ðŸ˜’ Talo ka na nga, ang kapal pa ng mukha mo!",
    "ðŸª– Commander daw, pero mukha kang pobols!",
    "ðŸ’¥ Eto na ang karma mo, gago ka kasi!",
    "ðŸ©¸ Ay nako, wala kang kwenta, ang dami mo pang sinasabi!",
    "ðŸ›‘ Stop na? Eh di wow, loser ka talaga!",
    "ðŸ˜ Ano, suko ka na? Parang batang umiiyak lang!",
    "ðŸ¹ Halatang fake ang tapang mo, parang papel na madaling mapunit!",
    "ðŸ’¢ Drama king, ikaw na talaga ang ultimate talunan!",
    "ðŸ¤¬ Putangina ka, akala mo ba nakakatakot ka? Hindi!",
    "ðŸ™„ Eh ano ngayon kung magalit ka? Wala akong pake!",
    "ðŸ”¥ Ang yabang mo pero bobo ka naman!",
    "ðŸ› ï¸ Gamit ka pa ng tools, pero wala kang kaya kahit anong gawin mo!",
    "ðŸ¤” Nasa'n na yung yabang mo kanina? Parang wala na!",
    "ðŸ”” Alert! May nagpakabobo na naman!",
    "ðŸ† Kahit anong gawin mo, talo ka na, gago!",
    "ðŸŒªï¸ Ikaw na ang pinakamalaking kalokohan sa buhay ng pamilya mo!",
    "ðŸ’¨ Tabi d'yan, ang bobo mo na ang gulo mo pa!",
    "ðŸª“ Tapos ka na, wala ka nang maipakita!",
    "âš”ï¸ Puro angas ka, pero wala kang napatunayan!",
    "ðŸ•³ï¸ Sige, magtago ka na lang, duwag!",
    "ðŸ‘Š Suntukan daw? Eh parang ikaw pa ang unang tatakbo!",
    "ðŸ˜‚ Nakakatawa ka, parang kang malaking bwakanang shet!",
    "âš”ï¸ Putangina mo, ang tapang-tapangan mo pero duwag ka rin naman!",
    "ðŸ’¥ Ang kapal ng mukha mo, wala kang silbi!",
    "ðŸ¹ Hoy gago, lumabas ka na para makita mo kung paano kita mapaiyak!",
    "ðŸ”¥ Ang yabang mo? Aba, parang hangin lang na walang laman!",
    "ðŸ›¡ï¸ Ang hina mo, parang basag na salamin na madaling durugin!",
    "ðŸ˜¤ Ang dami mong dada, pero walang binatbat, gago!",
    "ðŸª“ Isa kang basura na walang silbi pwe!",
    "ðŸ¤¡ Tangina mo, ang corny mo talaga!!",
    "ðŸ›‘ Tumigil ka na, ang drama mo ay parang sirang plaka na wala nang kwenta!",
    "ðŸ—¡ï¸ Anong kaya mo? Walang kwenta, parang plastik na nagkatawang tae este tao!",
    "ðŸª– Duwag ka, puro ka dakdak pero walang gawa!",
    "ðŸ¹ Mukhang artista ka sa chat, pero sa labas, mukha kang homeless na tanga!",
    "ðŸ‘‘ Ayan, ikaw na ang hari ng mga tanga! Congrats!"
  ];

  for (let i = 0; i < messages.length; i++) {
    setTimeout(() => {
      api.sendMessage(messages[i], event.threadID);
    }, i * 5000); // Sends a message every 5 seconds
  }
};