const discord = require('discord.js'); //modüller
const db = require("inflames.db")

exports.run = async (client, message, args) => {
    const embed = new discord.MessageEmbed()
    .setColor("RANDOM")
    .setTitle("**9.Haftanın fikstürü**")
    .setDescription(`\n Kayserispor - Fenerbahçe \n\n Göztepe - Fatih Karagümrük \n\n Galatasaray - Başakşehir \n\n Giresunspor - Gençlerbirliği \n\n Alanyaspor - Gaziantep \n\n Rizespor - Kasımpaşa \n\n Hatayspor - Konyaspor \n\n Antalyaspor - Adana Demirspor \n\n Malatyaspor - Trabzonspor \n\n Erzurumspor - Beşiktaş`)
    message.channel.send({ embeds: [embed] })
}
exports.conf = {
  enabled: true, //kullanıma açık mı değil mi
  guildOnly: true, //dmde kullanıma açık mı değil mi
  aliases: ["9-hafta"], //kısayollar
  permLevel: 0 //perm level mainde karşıliklar yazar
};
  
exports.help = {
 name: "9-Hafta", //komutu çalıştıracak olan kelime
 description: "",//açıklama (isteğe bağlı)
 usage: ""//kullanım (isteğe bağlı)
};