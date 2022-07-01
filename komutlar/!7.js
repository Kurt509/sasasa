const discord = require('discord.js'); //modüller
const db = require("inflames.db")

exports.run = async (client, message, args) => {
    const embed = new discord.MessageEmbed()
    .setColor("RANDOM")
    .setTitle("**7.Haftanın fikstürü**")
    .setDescription(`\n Kayserispor - Başakşehir \n\n Fatih Karagümrük - Gençlerbirliği \n\n Fenerbahçe - Gaziantep \n\n Göztepe - Kasımpaşa \n\n Galatasaray - Konyaspor \n\n Giresunspor - Adana Demirspor \n\n Alanyaspor - Trabzonspor \n\n Rizespor - Beşiktaş  \n\n Hatayspor - Erzurumspor \n\n Antalyasor - Malatyaspor`)
    message.channel.send({ embeds: [embed] })
}
exports.conf = {
  enabled: true, //kullanıma açık mı değil mi
  guildOnly: true, //dmde kullanıma açık mı değil mi
  aliases: ["7-hafta"], //kısayollar
  permLevel: 0 //perm level mainde karşıliklar yazar
};
  
exports.help = {
 name: "7-Hafta", //komutu çalıştıracak olan kelime
 description: "",//açıklama (isteğe bağlı)
 usage: ""//kullanım (isteğe bağlı)
};