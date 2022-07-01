const discord = require("discord.js"); //modüller
const db = require("inflames.db");

exports.run = async (client, message, args) => {
      if(!message.member.roles.cache.has('878671219367477270')) return(message.channel.send('**Bu komutu sadece yetkililer kullana bilir!**'))
    let atılacak = message.mentions.users.first();
    if(!atılacak)  return message.channel.send({
        content: "Lisansını belirleyeceğiniz kişiyi etiketleyin.",
        reply: { messageReference: message.id },
      });
      if(!args[1]) {
        var rozet1 = args[0]
      } else {
        var rozet1 = args[1] 
      }
  if(!rozet1)  return message.channel.send({
      content: "Belirlenek Lisansı yazın.",
      reply: { messageReference: message.id },
    });
    if(rozet1 !== "Uefa-Pro" && rozet1 !== "Uefa-Elit-A" && rozet1 !== "Uefa-A" && rozet1 !== "Uefa-B/A" && rozet1 !== "Uefa-B") return message.channel.send({
        content: "Böyle bir Lisans bulunmuyor.",
        reply: { messageReference: message.id },
      });
      if(rozet1 === "Uefa-Pro") var grozet1= "Uefa-Pro"
      if(rozet1 === "Uefa-Elit-A") var grozet1 = "Uefa-Elit-A"
      if(rozet1 === "Uefa-A") var groze1t = "Uefa-A"
      if(rozet1 === "Uefa-B/A") var grozet1 = "Uefa-B/A"
      if(rozet1 === "Uefa-B") var grozet1 = "Uefa-B"
    if(!db.kontrol(`rozet1_${atılacak.id}`)) {
        db.depola(`rozet1_${atılacak.id}`, grozet1) 
        return message.channel.send({
            content: `${atılacak.tag} isimli kişinin Lisansı,*${grozet1}* olarak belirlendi.`,
            reply: { messageReference: message.id },
          });
    } else {
        if(!db.bul(`rozet1_${atılacak.id}`).includes(grozet1)) {
            db.depola(`rozet1_${atılacak.id}`, grozet1) 
            return message.channel.send({
                content: `${atılacak.tag} isimli kişinin Lisansı,*${grozet1}* olarak belirlendi`,
                reply: { messageReference: message.id },
              });   
        } else {
        db.pushsil(`rozet1_${atılacak.id}`, grozet1) 
        return message.channel.send({
            content: `${atılacak.tag} isimli kişide *${grozet1}* Lisansı olduğu için Lisans geri alındı.`,
            reply: { messageReference: message.id },
          });
        }
    }
};
exports.conf = {
  enabled: true, //kullanıma açık mı değil mi
  guildOnly: true, //dmde kullanıma açık mı değil mi
  aliases: ["Lisans"], //kısayollar
  permLevel: 0, //perm level mainde karşıliklar yazar
};

exports.help = {
  name: "lisans", //komutu çalıştıracak olan kelime
  description: "", //açıklama (isteğe bağlı)
  usage: "", //kullanım (isteğe bağlı)
};