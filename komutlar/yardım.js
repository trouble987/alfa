const Discord = require('discord.js')
const client = new Discord.Client()
const db = require('quick.db')
exports.run = (client, message, args, member) => {
const yardım = new Discord.MessageEmbed()
  .setAuthor(`Sivaslı Yardım Menüsü`, client.user.avatarURL())
  .setColor("0x36393F")
  .setThumbnail(client.user.avatarURL())
  .setDescription(`• Hey! <@${message.author.id}> Beni Kullandığın İçin Teşekkür Ederim!\n •  Prefixim: **!!**\n • Dilim: **TR** :flag_tr:\n • Üyelik Durumu: ${db.has(`üyelikk_${message.author.id}`, "üyelik") ? `**Gold Üye!**` : `**Normal Üye!**`}`)
  .addField(" • Kategoriler:", `> • [!!kullanıcı](https://discord.gg/fUHY5EE8dD): **Kullanıcı Yardım Menüsünü Gösterir.**\n > • [!!moderasyon](https://discord.gg/DFPAENAWgX): **Moderasyon Yardım Menüsünü Gösterir.**\n > • [!!kayıtsistemi](https://discord.gg/DFPAENAWgX): ** Kayıt Sistemi Yardım Menüsünü Gösterir.**\n > • [!!korumasistemi](https://discord.gg/DFPAENAWgX): ** Koruma Sistemi Yardım Menüsünü Gösterir.**\n > • [!!logosistemi](https://discord.gg/DFPAENAWgX): ** Logo Sistemi Yardım Menüsünü Gösterir.**\n > • [!!çekilişsistemi](https://discord.gg/DFPAENAWgX): ** Çekiliş Sistemi Yardım Menüsünü Gösterir.**`)
//.addField(" • Güncelleme Notları:", "**Güncelleme v0.4:** Çekiliş Sistemi Eklendi!")
  .addField(" • Linkler:", "• [Botu Sunucuna Ekle](https://discord.com/api/oauth2/authorize?client_id=878586731862036531&permissions=8&scope=bot) • [Botun Resmi Sunucusu](https://discord.gg/DFPAENAWgX)")
  .setImage("")
.setFooter("Sivaslı", message.author.avatarURL())
.setTimestamp()
  message.channel.send(yardım)
}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["y", "help", "h"],
    permLevel: 0
}

exports.help = {
    name: "yardım",
    description: "westra",
    usage: "westra"
}