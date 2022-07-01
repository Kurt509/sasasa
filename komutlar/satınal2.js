const discord = require("discord.js"); //modüller
const db = require("inflames.db");

exports.run = async (client, message, args) => {
      if(!message.member.roles.cache.has('985910291961368646')) return(message.channel.send('**Bu komut bakımda !**'))
  if (!db.kontrol(`para_${message.author.id}`))
    return message.channel.send({
      content: "Malesef hiç paran bulunmuyor.",
      reply: { messageReference: message.id },
    });
  let para = db.bul(`para_${message.author.id}`);
  var ürün = args[0];
  if (!ürün)
    return message.channel.send({
      content:
        "Bir ürün ismi giriniz (f!(D/S)-Market).",
      reply: { messageReference: message.id },      });
    if (ürün === "Akdal-Ghost") {
    if (!db.kontrol(`silah_${message.author.id}`)) {
    } else {
      let silah = db.bul(`silah_${message.author.id}`);
      if (silah === "Akdal-Ghost")
        return message.channel.send({
          content: "Zaten sende bu üründen var.",
          reply: { messageReference: message.id },
        });
    }
    if (para < 3000)
      return message.channel.send({
        content: "Malesef paran bu ürüne yetmiyor.",
        reply: { messageReference: message.id },
      });
    db.çıkar(`para_${message.author.id}`, 3000);
    db.yaz(`silah_${message.author.id}`, "Akdal-Ghost");
    return message.channel.send({
      content:
        "Tebrikler! Yeni silahını yani - 'Akdal-Ghost' satın aldın. Artık daha güclüsün ama Ruhsat cıkartmayı unutma. Yoksa senin için iyi olmaz :cold_face:",
      reply: { messageReference: message.id },
    });
  } else if (ürün === "Zigana-K") {
    if (!db.kontrol(`silah_${message.author.id}`)) {
    } else {
      let silah = db.bul(`silah_${message.author.id}`);
      if (silah === "Zigana-K")
        return message.channel.send({
          content: "Zaten sende bu üründen var.",
          reply: { messageReference: message.id },
        });
    }
    if (!db.kontrol(`silah_${message.author.id}`))
      return message.channel.send({
        content: "Önce Akdal-Ghost almalısın.",
        reply: { messageReference: message.id },
      });
    let silah = db.bul(`silah_${message.author.id}`);
    if (silah !== "Akdal-Ghost")
      return message.channel.send({
        content: "Önce Akdal-Ghost almalısın.",
        reply: { messageReference: message.id },
      });
    if (para < 4000)
      return message.channel.send({
        content: "Malesef paran bu ürüne yetmiyor.",
        reply: { messageReference: message.id },
      });
    db.çıkar(`para_${message.author.id}`, 4000);
    db.yaz(`silah_${message.author.id}`, "Zigana-K");
    return message.channel.send({
      content:
        "Tebrikler! Yeni silahını yani - 'Zigana-K' satın aldın. Artık daha güclüsün ama Ruhsat cıkartmayı unutma. Yoksa senin için iyi olmaz :cold_face:",
      reply: { messageReference: message.id },
    });
  } else if (ürün === "Zigana-T") {
    if (!db.kontrol(`silah_${message.author.id}`)) {
    } else {
      let silah = db.bul(`silah_${message.author.id}`);
      if (silah === "Zigana-T")
        return message.channel.send({
          content: "Zaten sende bu üründen var.",
          reply: { messageReference: message.id },
        });
    }
    if (!db.kontrol(`silah_${message.author.id}`))
      return message.channel.send({
        content: "Önce Zigana-K almalısın.",
        reply: { messageReference: message.id },
      });
    let silah = db.bul(`silah_${message.author.id}`);
    if (silah !== "Zigana-K")
      return message.channel.send({
        content: "Önce Zigana-K almalısın.",
        reply: { messageReference: message.id },
      });
    if (para < 5000)
      return message.channel.send({
        content: "Malesef paran bu ürüne yetmiyor.",
        reply: { messageReference: message.id },
      });
    db.çıkar(`para_${message.author.id}`, 5000);
    db.yaz(`silah_${message.author.id}`, "Zigana-T");
    return message.channel.send({
      content:
        "Tebrikler! Yeni silahını yani - 'Zigana-T' satın aldın. Artık daha güclüsün ama Ruhsat cıkartmayı unutma. Yoksa senin için iyi olmaz :cold_face:",
      reply: { messageReference: message.id },
    });
  } else if (ürün === "Zigana-C45") {
    if (!db.kontrol(`silah_${message.author.id}`)) {
    } else {
      let silah = db.bul(`silah_${message.author.id}`);
      if (silah === "Zigana-C45")
        return message.channel.send({
          content: "Zaten sende bu üründen var.",
          reply: { messageReference: message.id },
        });
    }
    if (!db.kontrol(`silah_${message.author.id}`))
      return message.channel.send({
        content: "Önce Zigana-T almalısın.",
        reply: { messageReference: message.id },
      });
    let silah = db.bul(`silah_${message.author.id}`);
    if (silah !== "Zigana-T")
      return message.channel.send({
        content: "Önce Zigana-T almalısın.",
        reply: { messageReference: message.id },
      });
    if (para < 6000)
      return message.channel.send({
        content: "Malesef paran bu ürüne yetmiyor.",
        reply: { messageReference: message.id },
      });
    db.çıkar(`para_${message.author.id}`, 6000);
    db.yaz(`silah_${message.author.id}`, "Zigana-C45");
    return message.channel.send({
      content:
        "Tebrikler! Yeni silahını yani - 'Zigana-C45' satın aldın. Artık daha güclüsün ama Ruhsat cıkartmayı unutma. Yoksa senin için iyi olmaz :cold_face:.",
      reply: { messageReference: message.id },
          });
  } else {
    return message.channel.send({
      content:
        "Malesef böyle bir ürün yok, ürünlerimizi görmek için **f!D-Market**.",
      reply: { messageReference: message.id },
    });
  }
};
exports.conf = {
  enabled: true, //kullanıma açık mı değil mi
  guildOnly: true, //dmde kullanıma açık mı değil mi
  aliases: ["S-satınal", "Silah-satınal"], //kısayollar
  permLevel: 0, //perm level mainde karşıliklar yazar
};

exports.help = {
  name: "s-satınal", //komutu çalıştıracak olan kelime
  description: "", //açıklama (isteğe bağlı)
  usage: "", //kullanım (isteğe bağlı)
};