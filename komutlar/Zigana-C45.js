const discord = require('discord.js'); //modüller
const db = require("inflames.db")

exports.run = async (client, message, args) => {
      if(!message.member.roles.cache.has('985910291961368646')) return(message.channel.send('**Bu komut bakımda !**'))
    const embed = new discord.MessageEmbed()
    .setColor("RANDOM")
    .setTitle("**Zigana-C45 bilgi**")
    .setDescription(`Zigana C45, Tisaş Trabzon Silah Sanayi AŞ'nin ürettiği, Türkiye'nin .45 ACP fişek kullanan ilk yerli silahıdır.
Tabancanın uzunluğu 208 mm, namlu boyu 119 mm, genişliği 36,5 mm, ağırlığı boş şarjörüyle birlikte 1.000 gr, etkili menzili 75 m, 25.000 atış ömrüne sahip, ve 9+1 mermi almaktadır.`)
    message.channel.send({ embeds: [embed] })
}
exports.conf = {
  enabled: true, //kullanıma açık mı değil mi
  guildOnly: true, //dmde kullanıma açık mı değil mi
  aliases: ["Zigana-c45"], //kısayollar
  permLevel: 0 //perm level mainde karşıliklar yazar
};
  
exports.help = {
 name: "Zigana-c45r", //komutu çalıştıracak olan kelime
 description: "",//açıklama (isteğe bağlı)
 usage: ""//kullanım (isteğe bağlı)
};