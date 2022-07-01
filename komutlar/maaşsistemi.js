const discord = require('discord.js'); //modüller
const db = require("inflames.db")

exports.run = async (client, message, args) => {
    const embed = new discord.MessageEmbed()
    .setColor("RANDOM")
    .setTitle("**Maaş sistemi**")
    .setDescription(`**Maaş sistemi. Bu sistem size belirli sayılar arasında para verir. Bu sistemi kullanmak için : İlk önce Depo almalısınız.Daha sonra depoda üretilcek birşey düşünün ve buna göre harçamalar yapın.Bu harçamaları size yetkililer söylicektir. Eğer fikriniz herkes tarafından kullanılıyorsa daha az maaş alırsınız.İlgisiz olursanız maaşınız düşer ve sıfırlana bilir. İlgili olursanız maaşınız cok yüksele bilir. Her ay 1 defa alabilirsiniz. Haftalık maaş alamazsınız.Maaş almak için ilk önce yetkililere söyleyin ve size uygun bir maaş rolü verilsin.
f!Maaş1 = En düşük maaştır. Bundanda aşağı sıfırlanmak demektir.
f!Maaş2 = Düşüğün bir üstü maaştır.
f!Maaş3 = Ortalama bir maaştır
f!Maaş4 = Yüksek bir maaştır.
f!Maaş5 = Cok yüksek ve cok az kişide bulunacak bir maaştır.**`)
    message.channel.send({ embeds: [embed] })
}
exports.conf = {
  enabled: true, //kullanıma açık mı değil mi
  guildOnly: true, //dmde kullanıma açık mı değil mi
  aliases: ["maaş-bilgi","Maaş-bilgi"], //kısayollar
  permLevel: 0 //perm level mainde karşıliklar yazar
};
  
exports.help = {
 name: "Maaşbilgi", //komutu çalıştıracak olan kelime
 description: "",//açıklama (isteğe bağlı)
 usage: ""//kullanım (isteğe bağlı)
};