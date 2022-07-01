const discord = require('discord.js'); //modüller
const db = require("inflames.db")

exports.run = async (client, message, args) => {
  if(!message.member.roles.cache.has('878671219367477270')) return(message.channel.send('**Bu komutu sadece, Yetkili ekibi kullana bilir**.'))
    const embed = new discord.MessageEmbed()
    .setColor("RANDOM")
    .setTitle("**Futbol Roleplay ekonomi bot**")
    .setDescription(`f!paraver = *Belirttiğiniz üyeye,belirttiğiniz para miktarı verir.* \n\n f!paraal = *Belirttiğiniz üyeden,belirttiğiniz para miktarını alır. \n\n f!rol ver/al = *Belirttiğiniz üyeye, belirttiğiniz rolü alır/verir.* \n\n f!prefix = *Botun prefixini değiştirirsiniz.* \n\n f!eval = *Komut deneme komutu.* \n\n f!tvt = *Tüm databaseyi temizler(Sadece <@971768894446518272> kullana bilir.)* `)
    message.channel.send({ embeds: [embed] })
}
exports.conf = {
  enabled: true, //kullanıma açık mı değil mi
  guildOnly: true, //dmde kullanıma açık mı değil mi
  aliases: ["yetkili"], //kısayollar
  permLevel: 0 //perm level mainde karşıliklar yazar
};
  
exports.help = {
 name: "Yetkili", //komutu çalıştıracak olan kelime
 description: "",//açıklama (isteğe bağlı)
 usage: ""//kullanım (isteğe bağlı)
};