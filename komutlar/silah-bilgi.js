const discord = require('discord.js'); //modüller
const db = require("inflames.db")

exports.run = async (client, message, args) => {
      if(!message.member.roles.cache.has('985910291961368646')) return(message.channel.send('**Bu komut bakımda !**'))
    const embed = new discord.MessageEmbed()
    .setColor("RANDOM")
    .setTitle("**Silah sistemi bilgileri**")
    .setDescription(`Türkiyenin en büyük Futbol Roleplay sunucusunda ilk defa silah elde ede bilirsiniz. Silah elde etmek biraz tuzlu olucaktır. Ama faydalarıda vardır. Mesala : Rol yapınca bununla ilgili herhangi bir emote verirseniz daha kuvvetli gözükürsünüz. 
Ama bazı zararlarıda var. Mesela : Cok az kişi silah alabilicek.Eğer silah almayı başardıysanız, Ruhsatda almalısınız. Ruhsat alma işleri ise uzun,zor ve paralı olucak.Eğer ruhsat almazsanız ve herhangi bir rolde polise yakalanırsanız hapse gire bilirsiniz.\nMafya olmadığınız için 1 silahınız buluna bilir.
Eğer silahınız varsa ve başka bir üst düzey silah alırsanız,diğer silahı otomatik olarak bedavaya teslim etmiş olursunuz.\n Direkt olarak en pahalı silahı alamazsınız. İlk önce en düşük silahı almalısınız. Sebebi ise silah kullanmayan birisi için tehlikeli olabilir. Diğer silahı almanız için bir süre bulunmamaktadır. Ama ruhsat cıkartmayı unutmayın.
\n\n Bulunan silahlarla ilgili kısa bilgi için : \nf!Akdal   \nf!Zigana-K    \nf!Zigana-T \nf!Zigana-C45 `)
    message.channel.send({ embeds: [embed] })
}
exports.conf = {
  enabled: true, //kullanıma açık mı değil mi
  guildOnly: true, //dmde kullanıma açık mı değil mi
  aliases: ["silah-bilgi"], //kısayollar
  permLevel: 0 //perm level mainde karşıliklar yazar
};
  
exports.help = {
 name: "Silah-Bilgi", //komutu çalıştıracak olan kelime
 description: "",//açıklama (isteğe bağlı)
 usage: ""//kullanım (isteğe bağlı)
};