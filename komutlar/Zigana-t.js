const discord = require('discord.js'); //modüller
const db = require("inflames.db")

exports.run = async (client, message, args) => {
      if(!message.member.roles.cache.has('985910291961368646')) return(message.channel.send('**Bu komut bakımda !**'))
    const embed = new discord.MessageEmbed()
    .setColor("RANDOM")
    .setTitle("**Zigana-T bilgi**")
    .setDescription(`Kalibre9x19 mm.
\nAğırlık (Şarjörsüz)918 gr. (±10 gr.)
\nŞarjör Ağırlığı (Boş)96 gr.
\nUzunluk/Yükseklik/Genişlik214 mm/141 mm/ 37,5 mm
\nNamlu Boyu130 mm.
\nTetik Kuvveti (~)Tek Hareket 2000 gr., Çift Hareket 4500 gr.
\nÇalışma SistemiYarı Otomatik, Çift Hareket
\nNişangah DüzeniKare Arpacık, U Gez
\nNamlu HelisiSağ yönlü 6 yiv, set
\nEmniyet SistemiMandal ve Blok Emniyeti
\nŞarjör Kapasitesi15 Adet`)
    message.channel.send({ embeds: [embed] })
}
exports.conf = {
  enabled: true, //kullanıma açık mı değil mi
  guildOnly: true, //dmde kullanıma açık mı değil mi
  aliases: ["Zigana-t"], //kısayollar
  permLevel: 0 //perm level mainde karşıliklar yazar
};
  
exports.help = {
 name: "Zigana-T", //komutu çalıştıracak olan kelime
 description: "",//açıklama (isteğe bağlı)
 usage: ""//kullanım (isteğe bağlı)
};