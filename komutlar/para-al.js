const discord = require("discord.js"); //modüller
const db = require("inflames.db");

exports.run = async (client, message, args) => {
      if(!message.member.roles.cache.has('878671219367477270')) return(message.channel.send('**Bu komutu sadece yetkililer kullana bilir!**'))
  let atılacak = message.mentions.users.first();
  if (!atılacak)
    return message.channel.send({
      content: "Kime para atmak istiyorsun?",
      reply: { messageReference: message.id },
    });
  let para = args[1];
  if (!para)
    return message.channel.send({
      content: "Ne kadar para atmak istiyorsun?",
      reply: { messageReference: message.id },
    });
  if (isNaN(para) === "true")
    return message.channel.send({
      content: "Atılacak parayı belirt.",
      reply: { messageReference: message.id },
    });
  if (!db.kontrol(`para_${atılacak.id}`)) {
    db.yaz(`para_${atılacak.id}`, parseInt(para));
  } else {
    db.çıkar(`para_${atılacak.id}`, parseInt(para));
  }
  message.channel.send({
    content: `${atılacak.tag} isimli kişiden, ${para} para alındı.`,
    reply: { messageReference: message.id },
  });
};
exports.conf = {
  enabled: true, //kullanıma açık mı değil mi
  guildOnly: true, //dmde kullanıma açık mı değil mi
  aliases: ["pl", "paraal"], //kısayollar
  permLevel: 0, //perm level mainde karşıliklar yazar
};

exports.help = {
  name: "para-al", //komutu çalıştıracak olan kelime
  description: "", //açıklama (isteğe bağlı)
  usage: "", //kullanım (isteğe bağlı)
};
