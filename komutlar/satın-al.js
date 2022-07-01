const discord = require("discord.js"); //modüller
const db = require("inflames.db");

exports.run = async (client, message, args) => {
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
      reply: { messageReference: message.id },
    });
   if (ürün === "Küçük-Depo") {
    if (!db.kontrol(`depo_${message.author.id}`)) {
    } else {
      let depo = db.bul(`depo_${message.author.id}`);
      if (depo === "Küçük-Depo")
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
    db.yaz(`depo_${message.author.id}`, "Küçük-Depo");
    return message.channel.send({
      content:
        "Tebrikler! İlk deponu aldın. Artık para kazana bilirsin!",
      reply: { messageReference: message.id },
    });
  } else if (ürün === "Standart-Depo") {
    if (!db.kontrol(`depo_${message.author.id}`)) {
    } else {
      let depo = db.bul(`depo_${message.author.id}`);
      if (depo === "Standart-Depo")
        return message.channel.send({
          content: "Zaten sende bu üründen var.",
          reply: { messageReference: message.id },
        });
    }
    if (!db.kontrol(`depo_${message.author.id}`))
      return message.channel.send({
        content: "Önce Küçük Depo almalısın.",
        reply: { messageReference: message.id },
      });
    let depo = db.bul(`depo_${message.author.id}`);
    if (depo !== "Küçük-Depo")
      return message.channel.send({
        content: "Önce Küçük Depo almalısın.",
        reply: { messageReference: message.id },
      });
    if (para < 4000)
      return message.channel.send({
        content: "Malesef paran bu ürüne yetmiyor.",
        reply: { messageReference: message.id },
      });
    db.çıkar(`para_${message.author.id}`, 4000);
    db.yaz(`depo_${message.author.id}`, "Standart-Depo");
    return message.channel.send({
      content:
        "Tebrikler! Deponu büyüttün. Artık yeni ismi - 'Standart-Depo'",
      reply: { messageReference: message.id },
    });
  } else if (ürün === "Büyük-Depo") {
    if (!db.kontrol(`depo_${message.author.id}`)) {
    } else {
      let depo = db.bul(`depo_${message.author.id}`);
      if (depo === "Büyük-Depo")
        return message.channel.send({
          content: "Zaten sende bu üründen var.",
          reply: { messageReference: message.id },
        });
    }
    if (!db.kontrol(`depo_${message.author.id}`))
      return message.channel.send({
        content: "Önce Standart-Depoı almalısın.",
        reply: { messageReference: message.id },
      });
    let depo = db.bul(`depo_${message.author.id}`);
    if (depo !== "Standart-Depo")
      return message.channel.send({
        content: "Önce Standart-Depo almalısın.",
        reply: { messageReference: message.id },
      });
    if (para < 5000)
      return message.channel.send({
        content: "Malesef paran bu ürüne yetmiyor.",
        reply: { messageReference: message.id },
      });
    db.çıkar(`para_${message.author.id}`, 5000);
    db.yaz(`depo_${message.author.id}`, "Büyük-Depo");
    return message.channel.send({
      content:
        "Tebrikler! Deponu büyüttün. Artık yeni ismi - 'Büyük-Depo'",
      reply: { messageReference: message.id },
    });
  } else if (ürün === "Devasa-Depo") {
    if (!db.kontrol(`depo_${message.author.id}`)) {
    } else {
      let depo = db.bul(`depo_${message.author.id}`);
      if (depo === "Devasa-Depo")
        return message.channel.send({
          content: "Zaten sende bu üründen var.",
          reply: { messageReference: message.id },
        });
    }
    if (!db.kontrol(`depo_${message.author.id}`))
      return message.channel.send({
        content: "Önce Büyük-Depo almalısın.",
        reply: { messageReference: message.id },
      });
    let depo = db.bul(`depo_${message.author.id}`);
    if (depo !== "Büyük-Depo")
      return message.channel.send({
        content: "Önce Büyük-Depo almalısın.",
        reply: { messageReference: message.id },
      });
    if (para < 6000)
      return message.channel.send({
        content: "Malesef paran bu ürüne yetmiyor.",
        reply: { messageReference: message.id },
      });
    db.çıkar(`para_${message.author.id}`, 6000);
    db.yaz(`depo_${message.author.id}`, "Devasa-Depo");
    return message.channel.send({
      content:
        "Tebrikler! Deponu büyüttün. Artık yeni ismi - 'Devasa-Depo'",
      reply: { messageReference: message.id },
    });
  } else {
    return message.channel.send({
      content:
        "Malesef böyle bir ürün yok, ürünlerimizi görmek için **f!(D/S)-Market**.",
      reply: { messageReference: message.id },
    });
  }
};
exports.conf = {
  enabled: true, //kullanıma açık mı değil mi
  guildOnly: true, //dmde kullanıma açık mı değil mi
  aliases: ["Depo-satınal", "satınal-depo"], //kısayollar
  permLevel: 0, //perm level mainde karşıliklar yazar
};

exports.help = {
  name: "depo-satınal", //komutu çalıştıracak olan kelime
  description: "", //açıklama (isteğe bağlı)
  usage: "", //kullanım (isteğe bağlı)
};