const discord = require('discord.js'); //modüller
const db = require("inflames.db")

exports.run = async (client, message, args) => {
    const embed = new discord.MessageEmbed()
    .setColor("RANDOM")
    .setTitle("**2.Haftanın fikstürü**")
    .setDescription(`\n Kayserispor - Adana Demirspor \n\n Konyaspor - Trabzonspor \n\n Kasımpaşa - Beşiktaş \n\n Gaziantep - Erzurumspor \n\n Gençlerbirliği - Malatyaspor \n\n Başakşehir - Antalyaspor \n\n Fatih Karagümrük - Hatayspor \n\n Fenerbahçe - Rizespor \n\n Göztepe - Alanyaspor \n\n Galatasaray - Giresunspor`)
    message.channel.send({ embeds: [embed] })
}
exports.conf = {
  enabled: true, //kullanıma açık mı değil mi
  guildOnly: true, //dmde kullanıma açık mı değil mi
  aliases: ["2-hafta"], //kısayollar
  permLevel: 0 //perm level mainde karşıliklar yazar
};
  
exports.help = {
 name: "2-Hafta", //komutu çalıştıracak olan kelime
 description: "",//açıklama (isteğe bağlı)
 usage: ""//kullanım (isteğe bağlı)
};