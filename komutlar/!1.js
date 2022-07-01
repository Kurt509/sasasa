const discord = require('discord.js'); //modüller
const db = require("inflames.db")

exports.run = async (client, message, args) => {
    const embed = new discord.MessageEmbed()
    .setColor("RANDOM")
    .setTitle("**1.Haftanın fikstürü**")
    .setDescription(`\n *Kayserispor - Trabzonspor \n\n Adana Demirspor - Beşiktaş \n\n Konyaspor - Erzurumspor \n\n Kasımpaşa - Malatyaspor \n\n Gaziantep - Antalyaspor \n\n Gençlerbirliği - Hatayspor \n\n Başakşehir - Rizespor \n\n Fatih Karagümrük - Alanyaspor \n\n Fenerbahçe - Giresunspor \n\n Göztepe - Galatasaray*`)
    message.channel.send({ embeds: [embed] })
}
exports.conf = {
  enabled: true, //kullanıma açık mı değil mi
  guildOnly: true, //dmde kullanıma açık mı değil mi
  aliases: ["1-hafta"], //kısayollar
  permLevel: 0 //perm level mainde karşıliklar yazar
};
  
exports.help = {
 name: "1-Hafta", //komutu çalıştıracak olan kelime
 description: "",//açıklama (isteğe bağlı)
 usage: ""//kullanım (isteğe bağlı)
};