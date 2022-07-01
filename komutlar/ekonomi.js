const discord = require('discord.js'); //modüller
const db = require("inflames.db")

exports.run = async (client, message, args) => {
    const embed = new discord.MessageEmbed()
    .setColor("RANDOM")
    .setTitle("**Ekonomi sistemi bilgileri**")
    .setDescription(`**Ekonomi sistemi. Sizin mevcut paranızı ve kulüplerin paralarını doğru bir şekilde hesaplanması için gerekli bir sistem.Herhangi bir karışıklık olmaması için bu sistem yapılmıştır. \n\nf!Ekonomi**`)
    message.channel.send({ embeds: [embed] })
}
exports.conf = {
  enabled: true, //kullanıma açık mı değil mi
  guildOnly: true, //dmde kullanıma açık mı değil mi
  aliases: ["E-bilgi"], //kısayollar
  permLevel: 0 //perm level mainde karşıliklar yazar
};
  
exports.help = {
 name: "Ekonomi-Bilgi", //komutu çalıştıracak olan kelime
 description: "",//açıklama (isteğe bağlı)
 usage: ""//kullanım (isteğe bağlı)
};