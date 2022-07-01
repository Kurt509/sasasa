const discord = require('discord.js'); //modüller
const db = require("inflames.db");
const ms = require("parse-ms");

exports.run = async (client, message, args) => {
if(!message.member.roles.cache.has("992496591145545748") && !message.member.roles.cache.has("878671219367477270")) return message.channel.send(`**Bunu sadece Yüksek maaşlı kişiler kullana bilir.**`)
    if(!db.kontrol(`depo_${message.author.id}`)) return message.channel.send({ content: "Depo olmadan para kazanamazsın.", reply: { messageReference: message.id }});
    let times = await db.fetch(`ağaçkesmesüresi_${message.author.id}`);
    let saat = 150000 * 30;
    if (times !== null && saat - (Date.now() - times) > 0) {
      let time = ms(saat - (Date.now() - times));
      let mesaj = message.channel.send({ content: `Maaşını tekrar almak için**${time.hours ? time.hours + "ay" : ""} ${time.hours ? time.hours + "gün" : ""} ${time.hours ? time.hours + "saat" : ""} ${time.minutes ? time.minutes + "dakika" : "00"}** beklemelisin!`, reply: { messageReference: message.id } }).then(msg => setTimeout(() => msg.delete(), time.seconds * 50000));
      return;
    }
    let depo = db.bul(`depo_${message.author.id}`)
    if(depo === "Küçük-Depo") {
       var Covid = Math.floor(Math.random() * 5000) + 2500;
    db.topla(`para_${message.author.id}`, Covid)
    db.yaz(`ağaçkesmesüresi_${message.author.id}`, Date.now());
    message.channel.send({ content: `1 ay boyunca Küçük depodan **${Covid}**Euro para kazandın.`, reply: { messageReference: message.id }})
   } else if(depo === "Standart-Depo") {
       var Covid = Math.floor(Math.random() * 6000) + 2750;
    db.topla(`para_${message.author.id}`, Covid)
    db.yaz(`ağaçkesmesüresi_${message.author.id}`, Date.now());
    message.channel.send({ content: `1 ay boyunca Standart depodan **${Covid}**Euro para kazandın.`, reply: { messageReference: message.id }})
   } else if(depo === "Büyük-Depo") {
       var Covid = Math.floor(Math.random() * 7000) + 2850;
    db.topla(`para_${message.author.id}`, Covid)
    db.yaz(`ağaçkesmesüresi_${message.author.id}`, Date.now());
    message.channel.send({ content: `1 ay boyunca Büyük depodan **${Covid}**Euro para kazandın.`, reply: { messageReference: message.id }})
   } else if(depo === "Devasa-Depo") {
       var Covid = Math.floor(Math.random() * 8000) + 2950;
    db.topla(`para_${message.author.id}`, Covid)
    db.yaz(`ağaçkesmesüresi_${message.author.id}`, Date.now());
    message.channel.send({ content: `1 ay boyunca Devasa depodan **${Covid}**Euro para kazandın.`, reply: { messageReference: message.id }})
   }
}
exports.conf = {
  enabled: true, //kullanıma açık mı değil mi
  guildOnly: true, //dmde kullanıma açık mı değil mi
  aliases: ["Maaş1","maaş1","mş1"], //kısayollar
  permLevel: 0 //perm level mainde karşıliklar yazar
};
  
exports.help = {
 name: "Maaş1", //komutu çalıştıracak olan kelime
 description: "",//açıklama (isteğe bağlı)
 usage: ""//kullanım (isteğe bağlı)
};