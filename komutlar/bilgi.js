const discord = require('discord.js'); //modüller
const db = require("inflames.db")

exports.run = async (client, message, args) => {
    const embed = new discord.MessageEmbed()
    .setColor("RANDOM")
    .setTitle("**Sistemlerin bilgileri**")
    .setDescription(`f!Maaş-Bilgi = *Maaş sistemi hakkında bilgi gösterir.* \n\n f!Ekonomi-bilgi = *Ekonomi ile ilgili bilgiler verir.* \n\n f!Depo-bilgi = *Depo sistemi ile ilgili bilgi verir.*`)
    message.channel.send({ embeds: [embed] })
}
exports.conf = {
  enabled: true, //kullanıma açık mı değil mi
  guildOnly: true, //dmde kullanıma açık mı değil mi
  aliases: ["bilgi"], //kısayollar
  permLevel: 0 //perm level mainde karşıliklar yazar
};
  
exports.help = {
 name: "Bilgi", //komutu çalıştıracak olan kelime
 description: "",//açıklama (isteğe bağlı)
 usage: ""//kullanım (isteğe bağlı)
};