const discord = require('discord.js'); //modüller
const db = require("inflames.db")

exports.run = async (client, message, args) => {
    const embed = new discord.MessageEmbed()
    .setColor("RANDOM")
    .setTitle("**4.Haftanın fikstürü**")
    .setDescription(`\n Kayserispor - Kasımpaşa \n\n Gaziantep - Konyaspor \n\n Gençlerbirliği - Adana Demirspor \n\n Başakşehr - Trabzonspor \n\n Fatih Karagümrük - Beşiktaş \n\n Fenerbahçe - Erzurumspor \n\n Göztepe - Malatyaspor \n\n Galatasaray - Antalspor \n\n Giresunspor - Hatayspor \n\n Alanyaspor - Rizespor`)
    message.channel.send({ embeds: [embed] })
}
exports.conf = {
  enabled: true, //kullanıma açık mı değil mi
  guildOnly: true, //dmde kullanıma açık mı değil mi
  aliases: ["4-hafta"], //kısayollar
  permLevel: 0 //perm level mainde karşıliklar yazar
};
  
exports.help = {
 name: "4-Hafta", //komutu çalıştıracak olan kelime
 description: "",//açıklama (isteğe bağlı)
 usage: ""//kullanım (isteğe bağlı)
};