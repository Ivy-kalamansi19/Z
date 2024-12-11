module.exports.config = {
  name: "kontra",
  version: "1.0.0",
  role: 0,
  usePrefix: false,
  commandCategory: "fun",
  usages: "kontra",
  cooldowns: 3,
};

module.exports.run = async function ({ api, event }) {
  const { threadID, messageID } = event;

  const kontraReplies = [
    "Ang kapal din ng mukha mo para sabihin yan. Edi wow. 🙄",
    "Tigilan mo nga 'yan, hindi ka nakakatawa. 🚫",
    "Hala, ang confident mo ah, pero wala namang sense. 💀",
    "Aba, ikaw na talaga. Feeling expert? Wala ka nga alam. 🥱",
    "Ikaw? Tama? Hahaha, joke of the year ka talaga. 😂",
    "Grabe ka. Ang bigat ng sinabi mo, pero ang gaan ng utak mo. 🤦‍♀️",
    "Pashare naman ng kapal ng mukha mo, nauubusan na kasi ako. 😌",
    "Alam mo, minsan ang tahimik mas okay kaya manahimik kang kupal ka. 🔇",
    "Ang galing mo ah, para kang tanga. 🤷‍♀️",
    "Edi ikaw na matalino, kami na bobo. Pahinga ka na, girl/boy. 🤐",
    "Patawad ha, pero wala ka talagang ambag. NEXT! 🛑",
    "Bakit ka ba nag-effort magsalita? Sayang laway mo eh. 😤",
    "Ang lakas ng loob mong magsalita, pero wala namang connect. 🚫",
    "Ikaw yung tipo ng tao na pwedeng wala na lang. 😂",
    "Hala sige, ikaw na bida. Bida Bida ka naman. 🎭",
    "Tama ka? Charot! Never naman nangyari yun. 😏",
    "Galing mo. Clap clap. Pero walang nakikinig. 👏",
    "Pwede bang magpahinga ka na? Napapagod na kami sa'yo. 😓",
    "Wow, may sinabi ka. Pero sana tinago mo na lang. 🤐",
    "Balita ko, ikaw daw yung perpektong example ng mali. 🚩",
    "Alam mo, sayang ang effort mo. Walang may pake. ❌",
    "Kung pagod ka na, bakit di ka pa tumigil? 🙄",
    "Sa dami ng sinabi mo, wala namang kwenta. 📝",
    "Gising ka ba? Kasi parang tulog utak mo. 🤔",
    "Wow, ikaw na ang bida! Kaya lang, wala kang audience. 🎬",
    "Ang ganda ng speech mo... sa utak mo lang. 🤯",
    "Kung iniisip mo na matalino ka, isip ka ulit. 😂",
    "Alam mo, masaya ka pa ba? Parang hindi kita feel. 🥲",
    "Ang confident mo ah. Sana madapa ka. 😏",
    "Ang dami mong alam. Sayang, walang pumapansin. 🦗",
    "Kung si Batang Yagit may theme song, ikaw may 'Basura ng Taon.' 🗑️",
    "Sana lang, next time may sense naman sinabi mo. 🙏",
    "Kapag tumahimik ka, parang nagkaroon ng peace sa mundo. 🌏",
    "Ang dami mong sinasabi pero wala naman nagtanong. 🤷‍♂️",
    "Kung may contest ng sablay, panalo ka na agad. 🏆",
    "Huwag kang mag-alala, hindi ka namin papansinin. 🙃",
    "Ang galing mo palang mang-bullsh*t. Apir! 👋",
    "Kung may bayad ang kausap, bankrupt na kami dahil sa'yo. 💸",
    "Sa sobrang dami ng alam mo, wala pa ring nagbibilang. 🤣",
    "Kung gusto mong magbida, humanap ka ng stage. Hindi dito. 🎤",
    "Ikaw ang tunay na definition ng unnecessary. 💯",
    "May utang ka pa sa mundo: ang tahimik mo. 🤫",
    "Kung may mali, sigurado ako na ikaw yun. 🤡",
    "Ikaw na matalino. Pero bakit parang sabaw ka pa rin? 🍵",
    "Balita ko, nawala utak mo. Hanap ka na lang bago ka magsalita. 🔍",
    "Kung effort lang, panalo ka na. Sa sense? Zero ka pa rin. 🏅",
    "Kapag ikaw ang topic, ang saya naming lumipat. 🤣",
    "Ikaw ang tunay na dahilan kung bakit may 'skip' button. 🎵",
  ];

  // Random kontra response
  const randomReply = kontraReplies[Math.floor(Math.random() * kontraReplies.length)];

  // Send the kontra response
  return api.sendMessage(randomReply, threadID, messageID);
};
