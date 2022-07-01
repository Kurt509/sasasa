const discord = require("discord.js"); //modüller
const db = require("inflames.db");

exports.run = async (client, message, args) => {
      if(!message.member.roles.cache.has('878671219367477270')) return(message.channel.send('**Bu komutu sadece yetkililer kullana bilir!**'))
    let atılacak = message.mentions.users.first();
    if(!atılacak)  return message.channel.send({
        content: "Mesleğini belirleyeceğiniz kişiyi etiketleyin..",
        reply: { messageReference: message.id },
      });
      if(!args[1]) {
        var rozet = args[0]
      } else {
        var rozet = args[1] 
      }
  if(!rozet)  return message.channel.send({
      content: "Belirlenek mesleği yazın.",
      reply: { messageReference: message.id },
    });
    if(rozet !== "Teknik-Yardımcı" && rozet !== "Menejer" && rozet !== "Yatırımcı" && rozet !== "Scout" && rozet !== "Spiker" && rozet !== "Spor-Yorumcusu" && rozet !== "Kulüp-Başkanı") return message.channel.send({
        content: "Böyle bir meslek bulunmuyor.",
        reply: { messageReference: message.id },
      });
      if(rozet === "Teknik-Yardımcı") var grozet = "Teknik Yardımcı"
      if(rozet === "Menejer") var grozet = "Menejer"
      if(rozet === "Yatırımcı") var grozet = "Yatırımcı"
      if(rozet === "Scout") var grozet = "Scout"
      if(rozet === "Spiker") var grozet = "Spiker"
      if(rozet === "Spor-Yorumcusu") var grozet = "Spor Yorumcusu"
      if(rozet === "Kulüp-Başkanı") var grozet = "Kulüp Başkanı"
    if(!db.kontrol(`rozet_${atılacak.id}`)) {
        db.depola(`rozet_${atılacak.id}`, grozet) 
        return message.channel.send({
            content: `${atılacak.tag} isimli kişinin mesleği,*${grozet}* olarak belirlendi.`,
            reply: { messageReference: message.id },
          });
    } else {
        if(!db.bul(`rozet_${atılacak.id}`).includes(grozet)) {
            db.depola(`rozet_${atılacak.id}`, grozet) 
            return message.channel.send({
                content: `${atılacak.tag} isimli kişinin mesleği,*${grozet}* olarak belirlendi`,
                reply: { messageReference: message.id },
              });   
        } else {
        db.pushsil(`rozet_${atılacak.id}`, grozet) 
        return message.channel.send({
            content: `${atılacak.tag} isimli kişide *${grozet}* mesleği olduğu için meslek geri alındı.`,
            reply: { messageReference: message.id },
          });
        }
    }
};
exports.conf = {
  enabled: true, //kullanıma açık mı değil mi
  guildOnly: true, //dmde kullanıma açık mı değil mi
  aliases: ["Rozet"], //kısayollar
  permLevel: 0, //perm level mainde karşıliklar yazar
};

exports.help = {
  name: "rozet", //komutu çalıştıracak olan kelime
  description: "", //açıklama (isteğe bağlı)
  usage: "", //kullanım (isteğe bağlı)
};