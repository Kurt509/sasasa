const discord = require('discord.js'); //modüller
const db = require("inflames.db")

exports.run = async (client, message, args) => {
    const embed = new discord.MessageEmbed()
    .setColor("RANDOM")
    .setTitle("**6.Haftanın fikstürü**")
    .setDescription(`\n Kayserispor - Gençlerbirliği \n\n Başakşehir - Gaziantep \n\n Fatih Karagümrük - Kasımpaşa \n\n Fenerbahçe - Konyaspor \n\n Göztepe - Adana Demirspor \n\n Galatasaray - Trabzonspor \n\n Giresunspor - Beşiktaş \n\n Alanyaspor - Erzurumspor  \n\n Rizespor - Malatyaspor \n\n Hatayspor - Antalyaspor`)
    message.channel.send({ embeds: [embed] })
}
exports.conf = {
  enabled: true, //kullanıma açık mı değil mi
  guildOnly: true, //dmde kullanıma açık mı değil mi
  aliases: ["6-hafta"], //kısayollar
  permLevel: 0 //perm level mainde karşıliklar yazar
};
  
exports.help = {
 name: "6-Hafta", //komutu çalıştıracak olan kelime
 description: "",//açıklama (isteğe bağlı)
 usage: ""//kullanım (isteğe bağlı)
};