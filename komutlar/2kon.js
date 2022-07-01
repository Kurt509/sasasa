const discord = require('discord.js'); //modüller
const db = require("inflames.db")

exports.run = async (client, message, args) => {
if(!message.member.roles.cache.has("831198338794913842") && !message.member.roles.cache.has("878671219367477270")) return message.channel.send(`**Bunu sadece Konyaspor teknik ekibi kullana bilir.**`)
    const embed = new discord.MessageEmbed()
    .setColor("RANDOM")
    .setTitle("**İttifak Holding Konyaspor**")
    .setDescription(`\n Aktif bütce : *100.080.000€* \nKullanıma İzin Verilen Bütçe: *45.000.000€*`)
    message.channel.send({ embeds: [embed] })
}
exports.conf = {
  enabled: true, //kullanıma açık mı değil mi
  guildOnly: true, //dmde kullanıma açık mı değil mi
  aliases: ["kon"], //kısayollar
  permLevel: 0 //perm level mainde karşıliklar yazar
};
  
exports.help = {
 name: "Konyaspor", //komutu çalıştıracak olan kelime
 description: "",//açıklama (isteğe bağlı)
 usage: ""//kullanım (isteğe bağlı)
};