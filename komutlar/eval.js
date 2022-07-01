const discord = require("discord.js");
const { promisify } = require("util");
const readdir = promisify(require("fs").readdir);
const moment = require("moment");
const db = require('inflames.db')

exports.run = (client, message, args) => {
      if(!message.member.roles.cache.has('878671219367477270')) return(message.channel.send('**Bu komutu sadece yetkililer kullana bilir!**'))
  try {
    var code = args.join(" ");
    var evaled = eval(code);
    if (typeof evaled !== "string") evaled = require("util").inspect(evaled);
    let Embed = new discord.MessageEmbed()
      .addField("Giriş", "```js\n" + code + "```")
      .setDescription("```js\n" + clean(evaled) + "```");
    if (Embed.description.length >= 2048)
      Embed.description = Embed.description.substr(0, 2042) + "```...";
    return message.channel.send({embeds: [Embed]});
  } catch (err) {
    message.channel.send(`\`HATA\` \`\`\`xl\n${clean(err)}\n\`\`\``);
  }
  function clean(text) {
    if (typeof text === "string")
      return text
        .replace(/`/g, "`" + String.fromCharCode(8203))
        .replace(/@/g, "@" + String.fromCharCode(8203));
    else return text;
  }
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["kod"],
  permLevel: 4
};

exports.help = {
  name: "eval",
  description: "Kod denemek için kullanılır.",
  usage: "eval [kod]"
};
