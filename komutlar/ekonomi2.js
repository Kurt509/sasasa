const discord = require('discord.js'); //modüller
const db = require("inflames.db")

exports.run = async (client, message, args) => {
    const embed = new discord.MessageEmbed()
    .setColor("RANDOM")
    .setTitle("**Futbol Roleplay ekonomi bot**")
    .setDescription(`f!Envanter = *Bilgilerinizi gösterir.* \n\n f!D-Market = *Depo Marketi gösterir.* \n\n f!D-satınal = *Belirttiğiniz depoyu satın alır.* \n\n f!Maaş<rolünüzdeki sayı> = *Sizin hakketiğiniz belirli maaşı verir.* \n\n f!Paragönder = *Belirttiğiniz kişiye para gönderir.*`)
    message.channel.send({ embeds: [embed] })
}
exports.conf = {
  enabled: true, //kullanıma açık mı değil mi
  guildOnly: true, //dmde kullanıma açık mı değil mi
  aliases: ["ekonomi"], //kısayollar
  permLevel: 0 //perm level mainde karşıliklar yazar
};
  
exports.help = {
 name: "Ekonomi", //komutu çalıştıracak olan kelime
 description: "",//açıklama (isteğe bağlı)
 usage: ""//kullanım (isteğe bağlı)
};