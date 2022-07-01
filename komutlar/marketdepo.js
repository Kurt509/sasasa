const discord = require('discord.js'); //modüller
const db = require("inflames.db")

exports.run = async (client, message, args) => {
  let ürünler = new discord.MessageEmbed()
  .setTitle("Depo - Market")
  .addField("Küçük-Depo", `Fiyat: **3000**`)
  .addField("Standart-Depo", `Fiyat: **4000**`)
  .addField("Büyük-Depo", `Fiyat: **5000**`)
  .addField("Devasa-Depo", `Fiyat: **6000**`) 
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
  aliases: ["Depo-Market","d-market"], //kısayollar
  permLevel: 0 //perm level mainde karşıliklar yazar
};
  
exports.help = {
 name: "D-Market", //komutu çalıştıracak olan kelime
 description: "",//açıklama (isteğe bağlı)
 usage: ""//kullanım (isteğe bağlı)
};