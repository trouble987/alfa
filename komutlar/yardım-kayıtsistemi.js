const WestraDiscord = require('discord.js');
const WestraClient = new WestraDiscord.Client();
const ayarlar = require('../ayarlar.json');
let prefix = ayarlar.prefix

exports.run = (client, message) => {
 const WestraEmbed = new WestraDiscord.MessageEmbed()
  .setColor(0x36393F)
 .setAuthor(`${client.user.username} | Kayıt Sistemi Yardım Menüsü`)
 .setDescription(` **${prefix}alınacak-rol @rol** -> Kayıt edilen kişiden alınacak rolü ayarlar.
 **${prefix}alınacak-rol sıfırla** -> Kayıt edilen kişiden alınacak rolü sıfırlar.
 **${prefix}kayıt-kanal #kanal** -> Kayıtın yapılacağı kanalı belirlersiniz.
 **${prefix}kayıt-kanal sıfırla** -> Kayıtın yapılacağı kanalı sıfırlarsınız.
 **${prefix}kayıt-hg #kanal** -> Kayıt hoş geldin kanalını ayarlarsınız.
 **${prefix}kayıt-hg sıfırla** -> Kayıt hoş geldin kanalını sıfırlarsınız.
 **${prefix}kayıt-yetkili @rol** -> Kayıt edebilecek yetkiyi ayarlar.
 **${prefix}kayıt-yetkili sıfırla** -> Kayıt edebilecek yetkiyi sıfırlar.
 **${prefix}erkek-rol @rol** -> Kayıt edilince verilecek erkek rolü ayarlar.
 **${prefix}erkek-rol sıfırla** -> Kayıt edilince verilecek erkek rolünü sıfırlar.
 **${prefix}kız-rol @rol** -> Kayıt edilince verilecek kız rolü ayarlar.
 **${prefix}kız-rol sıfırla** -> Kayıt edilince verilecek kız rolünü sıfırlar.
 **${prefix}erkek @kullanıcı isim yaş** -> Erkekleri kayıt etmeye yarar.
**${prefix}kız @kullanıcı isim yaş** -> Kızları kayıt etmeye yarar.
`)
 .setTimestamp()
 message.channel.send(WestraEmbed)
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  kategori: "Bot",
  permLevel: 0
};

exports.help = {
  name: 'kayıtsistemi',
  description: 'Bot ile ilgili bilgi verir.',
  usage: 'bilgi'
};