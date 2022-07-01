const Discord = require("discord.js");
exports.run = async (client, message, args) => {

      if(!message.member.roles.cache.has('878671219367477270')) return(message.channel.send('**Bu komutu sadece yetkililer kullana bilir!**'))
    if (!args[0] || !["al", "ver"].includes(args[0])){
      const ce = new Discord.MessageEmbed()
      .setTitle("LÜTFEN KOMUTU DOĞRU KULLAN")
      .setColor("RED")
      .addField("Rol almak için", "`f!rol al @kullanıcı @rol`")
      .addField("Rol vermek için", "`f!rol ver @kullanıcı @rol`")
      message.channel.send({embeds: [ce]}).catch(e => {})
      }
  
  if(args[0] === "ver"){
    let user = message.mentions.members.first() || message.guild.members.cache.get(args[0])
    if (!user) return message.reply("**⚠ Rol Vermek İstediğin Kişiyi Yazmalısın!**").catch(e => {});
    
    let rol = message.mentions.roles.first() || message.guild.roles.cache.get(args[1])
    if (!rol) return message.reply("**⚠ Bir Rol Yazmalısın!**").catch(e => {});
  
    if(message.member.roles.highest.position < rol.rawPosition) return message.reply("**⚠ Bu Rolü Vermek İçin Üstünde Olmalısın!**").catch(e => {});
  
    user.roles.add(rol).catch(e => {
      return message.reply("**⚠ Bu Kişiye Rol Verilemedi! (Yetkim Yetmiyor)**").catch(e => {});
    });
  
    const embed = new Discord.MessageEmbed()
      .setColor("BLUE")
      .setTimestamp()
      .setDescription(`✅  Başarıyla ${user} İsimli Kullanıcıya ${rol} İsimli Rol Verildi!`)
    message.channel.send({embeds: [embed]}).catch(e => {})
       
   
 };

   if(args[0] === "al"){
    let user = message.mentions.members.first() || message.guild.members.cache.get(args[0])
    if (!user) return message.reply("**Rol Almak İstediğin Kişiyi Yazmalısın!**").catch(e => {});
    
    let rol = message.mentions.roles.first() || message.guild.roles.cache.get(args[1])
    if (!rol) return message.reply("**Bir Rol Yazmalısın!**").catch(e => {});
  
    if(message.member.roles.highest.position < rol.rawPosition) return message.reply("**Bu Rolü Almak İçin Üstünde Olmalısın!**").catch(e => {});
  
    user.roles.remove(rol).catch(e => {
      return message.reply("**Bu Kişiden Rol Alınamadı! (Yetkim Yetmiyor)**").catch(e => {});
    });
  
    const embed = new Discord.MessageEmbed()
      .setColor("BLUE")
      .setTimestamp()
      .setDescription(`✅  Başarıyla ${user} İsimli Kullanıcıdan ${rol} İsimli Rol Alındı!`)
    message.channel.send({embeds: [embed]}).catch(e => {})
         } };
  
exports.conf = {
  aliases: ["rol"]
};

exports.help = {
  name: "rol"
}