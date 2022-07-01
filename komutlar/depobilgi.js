const discord = require('discord.js'); //modüller
const db = require("inflames.db")

exports.run = async (client, message, args) => {
    const embed = new discord.MessageEmbed()
    .setColor("RANDOM")
    .setTitle("**Depo sistemi bilgileri**")
    .setDescription(`**Depo sistmei. Bu sistem basit ve geliştirilcek bir sistemdir. Marketden boş bir depo alırsanız ve içini birşey üreticek bir düzeyde donaltırsanız maaş alırsınız. Depo hiçbir zaman satılamaz. Hep sizinle kalıcaktır. O yüzden iyi düşünün. Diğer harcamalarda maliyetli olucaktır. Hatırlatma : Deponun içi boştur. \n f!D-Market**`)
    message.channel.send({ embeds: [embed] })
}
exports.conf = {
  enabled: true, //kullanıma açık mı değil mi
  guildOnly: true, //dmde kullanıma açık mı değil mi
  aliases: ["D-bilgi"], //kısayollar
  permLevel: 0 //perm level mainde karşıliklar yazar
};
  
exports.help = {
 name: "Depo-Bilgi", //komutu çalıştıracak olan kelime
 description: "",//açıklama (isteğe bağlı)
 usage: ""//kullanım (isteğe bağlı)
};