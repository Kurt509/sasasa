const discord = require('discord.js'); //modüller
const db = require("inflames.db")

exports.run = async (client, message, args) => {
    const embed = new discord.MessageEmbed()
    .setColor("RANDOM")
    .setTitle("**Futbol Roleplay ekonomi bot**")
    .setDescription(`**f!Bilgi = Botun bazı sistemleri hakkında bilgi verir.** \n\n\n:money_with_wings: f!Ekonomi = *Ekonomi komutlarını gösterir.* \n\n :soccer: f!Kulüp = *Kulüp komutlarını gösterir.* \n\n :lock: f!Yetkili = *Yetkili komutlarını gösterir.*`)
    message.channel.send({ embeds: [embed] })
}
exports.conf = {
  enabled: true, //kullanıma açık mı değil mi
  guildOnly: true, //dmde kullanıma açık mı değil mi
  aliases: ["yardım"], //kısayollar
  permLevel: 0 //perm level mainde karşıliklar yazar
};
  
exports.help = {
 name: "Yardım", //komutu çalıştıracak olan kelime
 description: "",//açıklama (isteğe bağlı)
 usage: ""//kullanım (isteğe bağlı)
};