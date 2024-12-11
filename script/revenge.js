const axios = require('axios');

module.exports.config = {
  name: 'revenge',
  version: '1.0.0',
  role: 0,
  hasPermission: 0,
  usePrefix: false,
  aliases: ['revenge'],
  description: "Roasts anyone who calls others jejemon or corny.",
  usages: "revenge on",
  credits: 'Developer',
  cooldowns: 5,
};

module.exports.run = async function({ api, event, args }) {
  const input = args.join(' ').toLowerCase();

  if (input !== 'on') {
    return api.sendMessage(`Type the command \"ð—¥ð—²ð˜ƒð—²ð—»ð—´ð—² ð—¼ð—»\" to activate.`, event.threadID, event.messageID);
  }

  const lines = [
    "ðŸ˜‚ Jejemon daw? Eh kahit jejemon, mas creative pa sa'yo, gago ka ba?",
    "ðŸ¤£ Corny daw? Aba, ikaw ang corny, parang joke na luma na di na nakakatawa!",
    "ðŸ¤” Bakit, ikaw ba? Perpekto? Eh mukha ka ngang meme na di na-upload!",
    "ðŸ”¥ Puro ka lang reklamo, eh anong ambag mo? Mas maganda pa sulat ng nanay ko kesa sa utak mo!",
    "ðŸ˜¤ Sinong jejemon? Ako? Ikaw nga parang robot na walang personality!",
    "ðŸ’¥ Corny raw, eh ikaw? Parang papel na wala nang laman, puro ka na lang reklamo!",
    "ðŸ§  Mas okay pa yung jejemon, kasi may effort. Eh ikaw? Puro ka paasa sa utak mo na wala naman!",
    "âš¡ Jejemon ang banat mo? Eh mukha ka ngang di marunong gumamit ng cellphone.",
    "ðŸ¤¡ Corny daw? Aba, parang mukha mo lang na walang kwenta kahit saang anggulo!",
    "ðŸ”ª Jejemon pa raw, eh mas creative pa mga kanta ng batang marunong mag-rap kesa sayo!",
    "ðŸ’£ Anong jejemon? Eh ikaw, ang emoji mo nga parang tinangay ng bagyo!",
    "ðŸ¤£ Ang corny daw ng jejemon? Eh ang corny ng buhay mo, walang plot twist!",
    "ðŸ¤·â€â™‚ï¸ Ang yabang mo magsalita, pero wala ka namang ambag kahit sa GC.",
    "ðŸ’” Bakit ikaw, mukha kang nanlilimos ng attention kahit sa internet!",
    "âš”ï¸ Jejemon raw? Aba, ikaw nga parang walang pinag-aralan sa gawi mo magsalita!",
    "ðŸ—‘ï¸ Sino bang mas corny? Yung jejemon o yung nagrereklamo na ikaw mismo?",
    "ðŸ¤£ Corny ba kamo? Eh ikaw, parang trailer na mas pangit pa sa actual movie!",
    "ðŸ’€ Jejemon raw? At least sila, marunong mag-spell! Eh ikaw, spelling bee dropout ka lang!",
    "ðŸ”¥ Sino ang corny? Yung jejemon o yung tao na puro reklamo pero wala namang talent?",
    "ðŸ˜… Ang bobo mo, kahit jejemon kayang lampasan utak mo!",
    "ðŸ¤– Jejemon daw? Aba, ang utak mo parang chatbot na sira!",
    "ðŸ’« Jejemon na daw ako? Eh ikaw, parang AI na walang AI - Automatic Idiot lang!",
    "ðŸŽ¯ Anong jejemon? Mas mukhang meme yung pagkatao mo kaysa sa message ko!",
    "ðŸ¤¡ Jejemon daw? Aba, ikaw na lang ata di updated na jejemon is a vibe!",
    "âš¡ Feeling cool ka ba? Eh kahit emoji di mo kayang gamitin nang tama!",
    "ðŸŽ¤ Sino bang nagpasikat ng jejemon? At least sila kilala, ikaw hindi!",
    "ðŸ˜‚ Ang taas ng standard mo sa jejemon, pero sarili mo hindi mo makita na sablay ka na!",
    "ðŸ¤·â€â™‚ï¸ Jejemon? Eh ikaw nga parang recycled na joke!",
    "ðŸ”¥ Anong jejemon? At least sila nag-effort mag-text, ikaw kaya, nag-effort na ba kahit minsan?",
    "ðŸ˜¡ Puro ka reklamo sa jejemon, pero mukha mo nga parang failed experiment!",
    "ðŸ¤¦ Corny daw ang jejemon? Eh ikaw, walang ambag kahit saan!",
    "ðŸŽ¤ Ang ingay mo sa jejemon, pero sa real life tahimik ka naman, coward!",
    "ðŸ˜… Jejemon daw? Eh ikaw nga hindi mahanapan ng talent kahit pilitin!",
    "ðŸ˜‚ Jejemon daw? Aba, ikaw ang poster child ng irrelevance!",
    "ðŸ’€ At least jejemon may content, ikaw kaya, anong content ng utak mo? Error 404?",
    "ðŸ¤£ Corny ba kamo? Eh ikaw, the corniest of them all!",
    "ðŸ˜’ Ang daming reklamo, pero ikaw mas nakakahiya pa kesa jejemon!",
    "ðŸ”¥ Jejemon raw? Aba, ang drama mo parang teleserye pero walang nanonood!",
    "ðŸ¤– Sino mas okay? Yung jejemon na creative o ikaw na parang generic chatbot lang?",
    "ðŸ¤· Jejemon ang hanap mo? Eh mukha mo nga parang application na na-delete sa Playstore!",
    "ðŸ˜‚ Jejemon daw? Aba ikaw, walang text kasi hindi marunong gumamit ng phone!",
    "ðŸ¤£ Jejemon na daw ako? Eh ikaw, automatic deleted sa utak ko!",
    "ðŸ¤¡ Feeling superior ka? Eh kahit jejemon mas maraming fans kaysa sa'yo!",
    "ðŸ§  Corny raw ang jejemon? At least may utak sila, ikaw kaya?",
    "ðŸ¤” Bakit jejemon? Kasi gusto namin maging creative! Eh ikaw, bakit ka boring?",
    "ðŸ’¥ Ang dami mong sinasabi sa jejemon, eh ikaw nga parang kasalanan sa fonts!",
    "ðŸ’€ Corny daw ang jejemon? Aba, ikaw ang mismong definition ng boredom!",
    "ðŸ¤¦ Ang lakas mong mang-reklamo, pero hanggang dun ka lang!",
    "ðŸ¤£ Jejemon daw? Aba ikaw, parang meme na walang laugh track!",
    "âš¡ Jejemon ba kamo? At least kami masaya, ikaw kaya, kailan ka huling sumaya?",
    "ðŸ˜¤ Sino bang jejemon dito? Eh ikaw nga mukha kang default profile picture!",
    "ðŸ˜‚ Ang jejemon, cool pa rin. Ikaw kaya, may relevance ka ba kahit saang angle?",
    "ðŸ˜… Jejemon daw? Aba ikaw, irrelevant pa rin kahit anong anggulo!",
    "ðŸ¤– Jejemon raw? At least mas may creativity sila kaysa sa boring mong jokes!",
    "ðŸ”¥ Anong jejemon? Mas mukha ka pang jejemon sa pagkatao mo!",
    "ðŸ¤¡ Ang bobo mo, kahit jejemon kayang lampasan IQ mo!",
    "ðŸ¤– Jejemon ang tawag mo? Eh ikaw mukhang beta tester ng kakulangan ng utak!",
    "ðŸ’¥ Ang jejemon creative, ikaw kaya? Creative ba ang pagiging boring?"
  ];

  for (let i = 0; i < lines.length; i++) {
    setTimeout(() => {
      api.sendMessage(lines[i], event.threadID);
    }, i * 9000); // Sends a line every 9 seconds
  }
};