const discord = require('discord.js'); //modüller
const db = require("inflames.db")

exports.run = async (client, message, args) => {
    const embed = new discord.MessageEmbed()
    .setColor("RANDOM")
    .setTitle("**8.Haftanın fikstürü**")
    .setDescription(`\n Kayserispor - Fatih Karagümrük \n\n Fenerbahçe - Başakşehir \n\n Göztepe - Gençlerbirliği \n\n Galatasaray - Gaziantep \n\n Giresunspor - Kasımpaşa \n\n Alanyaspor - Konyaspor \n\n Rizespor - Adana Demirspor \n\n Hatayspor - Trabzonspor \n\n Antalspor - Beşiktaş \n\n Malatyaspor - Erzurumspor`)
    message.channel.send({ embeds: [embed] })
}
exports.conf = {
  enabled: true, //kullanıma açık mı değil mi
  guildOnly: true, //dmde kullanıma açık mı değil mi
  aliases: ["8-hafta"], //kısayollar
  permLevel: 0 //perm level mainde karşıliklar yazar
};
  
exports.help = {
 name: "8-Hafta", //komutu çalıştıracak olan kelime
 description: "",//açıklama (isteğe bağlı)
 usage: ""//kullanım (isteğe bağlı)
};