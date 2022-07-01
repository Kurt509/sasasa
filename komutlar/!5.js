const discord = require('discord.js'); //modüller
const db = require("inflames.db")

exports.run = async (client, message, args) => {
    const embed = new discord.MessageEmbed()
    .setColor("RANDOM")
    .setTitle("**5.Haftanın fikstürü**")
    .setDescription(`\n Kayserispor - Gaziantep \n\n Gençlerbirliği - Kasımpaşa \n\n Başakşehir - Konyaspor \n\n Fatih Karagümrük - Adana Demirspor \n\n Fenerbahçe - Trabzonspor \n\n Göztepe - Beşiktaş \n\n Galatatasaray - Erzurumspor \n\n Giresunspor - Malatyaspor \n\n  Alanyaspor - Antalyaspor \n\n Rizespor - Hatayspor`)
    message.channel.send({ embeds: [embed] })
}
exports.conf = {
  enabled: true, //kullanıma açık mı değil mi
  guildOnly: true, //dmde kullanıma açık mı değil mi
  aliases: ["5-hafta"], //kısayollar
  permLevel: 0 //perm level mainde karşıliklar yazar
};
  
exports.help = {
 name: "5-Hafta", //komutu çalıştıracak olan kelime
 description: "",//açıklama (isteğe bağlı)
 usage: ""//kullanım (isteğe bağlı)
};