const discord = require('discord.js'); //modüller
const db = require("inflames.db")

exports.run = async (client, message, args) => {
    const embed = new discord.MessageEmbed()
    .setColor("RANDOM")
    .setTitle("**3.Haftanın fikstürü**")
    .setDescription(`\n Kayserispor - Konyaspor \n\n Kasımpaşa - Adana Demirspor \n\n Gaziantep - Trabzonspor \n\n Gençlerbirliği - Beşiktaş \n\n Başakşehir - Erzurumspor \n\n Fatih Karagümrük - Malatyaspor \n\n Fenerbahçe - Antalyaspor \n\n Göztepe - Hatayspor \n\n Galatasaray - Rizespor \n\n Giresunspor - Alanyaspor`)
    message.channel.send({ embeds: [embed] })
}
exports.conf = {
  enabled: true, //kullanıma açık mı değil mi
  guildOnly: true, //dmde kullanıma açık mı değil mi
  aliases: ["3-hafta"], //kısayollar
  permLevel: 0 //perm level mainde karşıliklar yazar
};
  
exports.help = {
 name: "3-Hafta", //komutu çalıştıracak olan kelime
 description: "",//açıklama (isteğe bağlı)
 usage: ""//kullanım (isteğe bağlı)
};