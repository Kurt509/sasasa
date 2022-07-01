const discord = require('discord.js'); //modüller
const db = require("inflames.db")

exports.run = async (client, message, args) => {
  if(!message.mentions.users.first()) {
    var gösterilecek = message.author;
  /*para*/  if(!db.kontrol(`para_${gösterilecek.id}`)) { var para = "0" } else { var para = db.bul(`para_${gösterilecek.id}`) }
  /*olta*/  if(!db.kontrol(`silah_${gösterilecek.id}`)) { var silah = "Yok" } else { var silah = db.bul(`silah_${gösterilecek.id}`) }
  /*balta*/ if(!db.kontrol(`depo_${gösterilecek.id}`)) { var depo = "Yok" } else { var depo = db.bul(`depo_${gösterilecek.id}`) }
  /*rozet*/ if(!db.kontrol(`rozet_${gösterilecek.id}`)) { var rozet = "Yok" } else { var rozet = db.bul(`rozet_${gösterilecek.id}`) }
      /*rozet*/ if(!db.kontrol(`rozet1_${gösterilecek.id}`)) { var rozet1 = "Yok" } else { var rozet1 = db.bul(`rozet1_${gösterilecek.id}`) }
} else {
    var gösterilecek = message.mentions.users.first();
  /*para*/  if(!db.kontrol(`para_${gösterilecek.id}`)) { var para = "0" } else { var para = db.bul(`para_${gösterilecek.id}`) }
  /*olta*/  if(!db.kontrol(`silah_${gösterilecek.id}`)) { var silah = "Yok" } else { var silah = db.bul(`silah_${gösterilecek.id}`) }
  /*balta*/ if(!db.kontrol(`depo_${gösterilecek.id}`)) { var depo = "Yok" } else { var depo = db.bul(`depo_${gösterilecek.id}`) }
   /*rozet*/ if(!db.kontrol(`rozet_${gösterilecek.id}`)) { var rozet = "Yok" } else { var rozet = db.bul(`rozet_${gösterilecek.id}`) }
    /*rozet*/ if(!db.kontrol(`rozet1_${gösterilecek.id}`)) { var rozet1 = "Yok" } else { var rozet1 = db.bul(`rozet1_${gösterilecek.id}`) }


}

let envanter = new discord.MessageEmbed()
.setTitle("**Bilgilerin**")
.addField(":moneybag: Para:", `${para}`)
.addField(":factory: Depo:", `${depo}`)
.setFooter(`İsteyen: ${message.author.tag}`)
.addField(":writing_hand: Meslek:", `${rozet}`)
.addField(":scroll: Lisans:", `${rozet1}`)

.setTimestamp()
return message.channel.send({ embeds: [ envanter ], reply: { messageReference: message.id }});;
}
exports.conf = {
  enabled: true, //kullanıma açık mı değil mi
  guildOnly: true, //dmde kullanıma açık mı değil mi
  aliases: ["inv","envanter","para","b","bilgim","profil","profilim","param"], //kısayollar
  permLevel: 0 //perm level mainde karşıliklar yazar
};
  
exports.help = {
 name: "Envanter", //komutu çalıştıracak olan kelime
 description: "",//açıklama (isteğe bağlı)
 usage: ""//kullanım (isteğe bağlı)
};