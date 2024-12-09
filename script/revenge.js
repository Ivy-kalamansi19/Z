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
    return api.sendMessage(`Type the command \"𝗥𝗲𝘃𝗲𝗻𝗴𝗲 𝗼𝗻\" to activate.`, event.threadID, event.messageID);
  }

  const lines = [
    "😂 Jejemon daw? Eh kahit jejemon, mas creative pa sa'yo, gago ka ba?",
    "🤣 Corny daw? Aba, ikaw ang corny, parang joke na luma na di na nakakatawa!",
    "🤔 Bakit, ikaw ba? Perpekto? Eh mukha ka ngang meme na di na-upload!",
    "🔥 Puro ka lang reklamo, eh anong ambag mo? Mas maganda pa sulat ng nanay ko kesa sa utak mo!",
    "😤 Sinong jejemon? Ako? Ikaw nga parang robot na walang personality!",
    "💥 Corny raw, eh ikaw? Parang papel na wala nang laman, puro ka na lang reklamo!",
    "🧠 Mas okay pa yung jejemon, kasi may effort. Eh ikaw? Puro ka paasa sa utak mo na wala naman!",
    "⚡ Jejemon ang banat mo? Eh mukha ka ngang di marunong gumamit ng cellphone.",
    "🤡 Corny daw? Aba, parang mukha mo lang na walang kwenta kahit saang anggulo!",
    "🔪 Jejemon pa raw, eh mas creative pa mga kanta ng batang marunong mag-rap kesa sayo!",
    "💣 Anong jejemon? Eh ikaw, ang emoji mo nga parang tinangay ng bagyo!",
    "🤣 Ang corny daw ng jejemon? Eh ang corny ng buhay mo, walang plot twist!",
    "🤷‍♂️ Ang yabang mo magsalita, pero wala ka namang ambag kahit sa GC.",
    "💔 Bakit ikaw, mukha kang nanlilimos ng attention kahit sa internet!",
    "⚔️ Jejemon raw? Aba, ikaw nga parang walang pinag-aralan sa gawi mo magsalita!",
    "🗑️ Sino bang mas corny? Yung jejemon o yung nagrereklamo na ikaw mismo?",
    "🤣 Corny ba kamo? Eh ikaw, parang trailer na mas pangit pa sa actual movie!",
    "💀 Jejemon raw? At least sila, marunong mag-spell! Eh ikaw, spelling bee dropout ka lang!",
    "🔥 Sino ang corny? Yung jejemon o yung tao na puro reklamo pero wala namang talent?",
    "😅 Ang bobo mo, kahit jejemon kayang lampasan utak mo!",
    "🤖 Jejemon daw? Aba, ang utak mo parang chatbot na sira!",
    "💫 Jejemon na daw ako? Eh ikaw, parang AI na walang AI - Automatic Idiot lang!",
    "🎯 Anong jejemon? Mas mukhang meme yung pagkatao mo kaysa sa message ko!",
    "🤡 Jejemon daw? Aba, ikaw na lang ata di updated na jejemon is a vibe!",
    "⚡ Feeling cool ka ba? Eh kahit emoji di mo kayang gamitin nang tama!",
    "🎤 Sino bang nagpasikat ng jejemon? At least sila kilala, ikaw hindi!",
    "😂 Ang taas ng standard mo sa jejemon, pero sarili mo hindi mo makita na sablay ka na!",
    "🤷‍♂️ Jejemon? Eh ikaw nga parang recycled na joke!",
    "🔥 Anong jejemon? At least sila nag-effort mag-text, ikaw kaya, nag-effort na ba kahit minsan?",
    "😡 Puro ka reklamo sa jejemon, pero mukha mo nga parang failed experiment!",
    "🤦 Corny daw ang jejemon? Eh ikaw, walang ambag kahit saan!",
    "🎤 Ang ingay mo sa jejemon, pero sa real life tahimik ka naman, coward!",
    "😅 Jejemon daw? Eh ikaw nga hindi mahanapan ng talent kahit pilitin!",
    "😂 Jejemon daw? Aba, ikaw ang poster child ng irrelevance!",
    "💀 At least jejemon may content, ikaw kaya, anong content ng utak mo? Error 404?",
    "🤣 Corny ba kamo? Eh ikaw, the corniest of them all!",
    "😒 Ang daming reklamo, pero ikaw mas nakakahiya pa kesa jejemon!",
    "🔥 Jejemon raw? Aba, ang drama mo parang teleserye pero walang nanonood!",
    "🤖 Sino mas okay? Yung jejemon na creative o ikaw na parang generic chatbot lang?",
    "🤷 Jejemon ang hanap mo? Eh mukha mo nga parang application na na-delete sa Playstore!",
    "😂 Jejemon daw? Aba ikaw, walang text kasi hindi marunong gumamit ng phone!",
    "🤣 Jejemon na daw ako? Eh ikaw, automatic deleted sa utak ko!",
    "🤡 Feeling superior ka? Eh kahit jejemon mas maraming fans kaysa sa'yo!",
    "🧠 Corny raw ang jejemon? At least may utak sila, ikaw kaya?",
    "🤔 Bakit jejemon? Kasi gusto namin maging creative! Eh ikaw, bakit ka boring?",
    "💥 Ang dami mong sinasabi sa jejemon, eh ikaw nga parang kasalanan sa fonts!",
    "💀 Corny daw ang jejemon? Aba, ikaw ang mismong definition ng boredom!",
    "🤦 Ang lakas mong mang-reklamo, pero hanggang dun ka lang!",
    "🤣 Jejemon daw? Aba ikaw, parang meme na walang laugh track!",
    "⚡ Jejemon ba kamo? At least kami masaya, ikaw kaya, kailan ka huling sumaya?",
    "😤 Sino bang jejemon dito? Eh ikaw nga mukha kang default profile picture!",
    "😂 Ang jejemon, cool pa rin. Ikaw kaya, may relevance ka ba kahit saang angle?",
    "😅 Jejemon daw? Aba ikaw, irrelevant pa rin kahit anong anggulo!",
    "🤖 Jejemon raw? At least mas may creativity sila kaysa sa boring mong jokes!",
    "🔥 Anong jejemon? Mas mukha ka pang jejemon sa pagkatao mo!",
    "🤡 Ang bobo mo, kahit jejemon kayang lampasan IQ mo!",
    "🤖 Jejemon ang tawag mo? Eh ikaw mukhang beta tester ng kakulangan ng utak!",
    "💥 Ang jejemon creative, ikaw kaya? Creative ba ang pagiging boring?"
  ];

  for (let i = 0; i < lines.length; i++) {
    setTimeout(() => {
      api.sendMessage(lines[i], event.threadID);
    }, i * 9000); // Sends a line every 9 seconds
  }
};
