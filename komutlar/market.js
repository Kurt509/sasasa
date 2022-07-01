const discord = require('discord.js'); //modüller
const db = require("inflames.db")

exports.run = async (client, message, args) => {
      if(!message.member.roles.cache.has('985910291961368646')) return(message.channel.send('**Bu komut bakımda !**'))
  let ürünler = new discord.MessageEmbed()
  .setTitle("Silah - Market")
  .addField("Akdal-Ghost", `Fiyat: **3000**`)
  .addField("Zigana-K", `Fiyat: **4000**`)
  .addField("Zigana-T", `Fiyat: **5000**`)
  .addField("Zigana-C45", `Fiyat: **6000**`)
  /*
  .addField("On başı", `Fiyat: **10000**`)
  .addField("Yüz başı", `Fiyat: **15000**`)
  .addField("Bin başı", `Fiyat: **20000**`)
  .addField("Albay", `Fiyat: **25000**`)
  .addField("Orgeneral", `Fiyat: **30000**`)
  .addField("Korona", `Fiyat: **40000**`)
  */
  .setFooter(`İsteyen: ${message.author.tag}`)
  .setTimestamp()
  return message.channel.send({ embeds: [ ürünler ], reply: { messageReference: message.id }});;
}
exports.conf = {
  enabled: true, //kullanıma açık mı değil mi
  guildOnly: true, //dmde kullanıma açık mı değil mi
  aliases: ["Silah-Market","s-market"], //kısayollar
  permLevel: 0 //perm level mainde karşıliklar yazar
};
  
exports.help = {
 name: "S-Market", //komutu çalıştıracak olan kelime
 description: "",//açıklama (isteğe bağlı)
 usage: ""//kullanım (isteğe bağlı)
};