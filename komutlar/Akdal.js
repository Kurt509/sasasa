const discord = require('discord.js'); //modüller
const db = require("inflames.db")

exports.run = async (client, message, args) => {
      if(!message.member.roles.cache.has('985910291961368646')) return(message.channel.send('**Bu komut bakımda !**'))
    const embed = new discord.MessageEmbed()
    .setColor("RANDOM")
    .setTitle("**Akdal bilgi**")
    .setDescription(`**Türkiye'nin ilk modern yarı otomatik silahlarından olan Akdal Ghost 1990 yılından beri Türkiye'de kullanımdadır.**`)
    message.channel.send({ embeds: [embed] })
}
exports.conf = {
  enabled: true, //kullanıma açık mı değil mi
  guildOnly: true, //dmde kullanıma açık mı değil mi
  aliases: ["akdal"], //kısayollar
  permLevel: 0 //perm level mainde karşıliklar yazar
};
  
exports.help = {
 name: "Akdal", //komutu çalıştıracak olan kelime
 description: "",//açıklama (isteğe bağlı)
 usage: ""//kullanım (isteğe bağlı)
};