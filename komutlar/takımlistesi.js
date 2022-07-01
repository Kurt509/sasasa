const discord = require('discord.js'); //modüller
const db = require("inflames.db")

exports.run = async (client, message, args) => {
    const embed = new discord.MessageEmbed()
    .setColor("RANDOM")
    .setTitle("**Futbol Roleplay Takım Listesi**")
    .setDescription(`*f!Alanyaspor 
                     \nf!Antalyaspor
                     \nf!Başakşehir
                     \nf!Erzurumspor
                     \nf!Beşiktaş
                     \nf!Çaykur Rizespor
                     \nf!Fenerbahçe
                     \nf!Galatasaray
                     \nf!Gaziantep
                     \nf!Gençlerbirliği
                     \nf!Göztepe
                     \nf!Hatayspor
                     \nf!Karagümrük 
                     \nf!Kasımpaşa
                     \nf!Kayserispor
                     \nf!Konyaspor
                     \nf!Adana Demirspor 
                     \nf!Giresunspor 
                     \nf!Trabzonspor
                     \nf!Malatyaspor*`)
    message.channel.send({ embeds: [embed] })
}
exports.conf = {
  enabled: true, //kullanıma açık mı değil mi
  guildOnly: true, //dmde kullanıma açık mı değil mi
  aliases: ["tl","takımlistesi"], //kısayollar
  permLevel: 0 //perm level mainde karşıliklar yazar
};
  
exports.help = {
 name: "Takımlistesi", //komutu çalıştıracak olan kelime
 description: "",//açıklama (isteğe bağlı)
 usage: ""//kullanım (isteğe bağlı)
};