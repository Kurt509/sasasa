const discord = require('discord.js'); //modüller
const db = require("inflames.db")

exports.run = async (client, message, args) => {
if(!message.member.roles.cache.has("831198329055477800") && !message.member.roles.cache.has("878671219367477270")) return message.channel.send(`**Bunu sadece Fenerbahçe teknik ekibi kullana bilir.**`)
    const embed = new discord.MessageEmbed()
  .setColor("RANDOM")
    .setTitle("**Fenerbahçe Spor Kulübü**")
    .setDescription(`\n Aktif bütce : *18.567.000€* \nKullanıma İzin Verilen Bütçe: *30.000.000€*`)
    message.channel.send({ embeds: [embed] })
}
exports.conf = {
  enabled: true, //kullanıma açık mı değil mi
  guildOnly: true, //dmde kullanıma açık mı değil mi
  aliases: ["fb"], //kısayollar
  permLevel: 0 //perm level mainde karşıliklar yazar
};
  
exports.help = {
 name: "fenerbahçe", //komutu çalıştıracak olan kelime
 description: "",//açıklama (isteğe bağlı)
 usage: ""//kullanım (isteğe bağlı)
};