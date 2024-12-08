module.exports.config = {
    name: "oy",
  version: "1.0.0",
    hasPermssion: 0,
    credits: "jas", 
    description: "oy (text)",
    commandCategory: "Simsimi",
    usages: "(text)",
  cooldowns: 2, 
}
module.exports.run = async ({ api, event, args }) => { 
    const senku = global.nodemodule.axios
    let Jas = args.join(' ')
    const gen = await senku.get(
    'https://api.phamvandien.xyz/sim?type=ask&ask=' + Jas
)
    var tsukasa = gen.data.answer
    return api.sendMessage('' + tsukasa, event.threadID, event.messageID)
  }