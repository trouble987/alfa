const WestraDiscord = require('discord.js');
const WestraClient = new WestraDiscord.Client();
const ayarlar = require('../ayarlar.json');
let prefix = ayarlar.prefix

exports.run = (client, message) => {
 const WestraEmbed = new WestraDiscord.MessageEmbed()
  .setColor(0x36393F)
 .setAuthor(`${client.user.username} | Moderasyon Yardım Menüsü`)
 .setDescription(`
 **${prefix}mod-log #kanal** -> Mod-log ayarlar.
 **${prefix}mod-log sıfırla** -> Mod-log sıfırlar.
 **${prefix}bansay** -> Sunucuda kaç banlanan üye olduğunu gösterir.
 **${prefix}ban @kullanıcı** -> Etiketlediğiniz kullanıcıyı banlar.
 **${prefix}küfürengel** -> Küfür engel açar/kapatır.
 **${prefix}küfürlog #kanal** -> Küfür-log ayarlar.
 **${prefix}reklamengel** -> Reklam engel açar/kapatır.
 **${prefix}reklamlog #kanal** -> Reklam-log ayarlar.
 **${prefix}sa-as aç** -> SA-AS sistemini açar.
 **${prefix}sa-as kapat** -> SA-AS sistemini kapatır.
 **${prefix}sil** -> Yazdığınız miktar kadar mesaj siler.
 **${prefix}say** -> Sunucu bilgilerini gösterir.
 **${prefix}oylama** -> Oylama yapar.
 **${prefix}otorol-ayarla @rol #kanal** -> Otorol ayarlar.
**${prefix}otorol-sıfırla** \n-> Otorol sıfırlar.
 **${prefix}otorol-mesaj-ayarla** -> Otorol mesajı ayarlar.
 **${prefix}otorol-mesaj-sıfırla** -> Otorol mesajı sıfırlar.
`)
 .setTimestamp()
 message.channel.send(WestraEmbed)
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['mod'],
  kategori: "Bot",
  permLevel: 0
};

exports.help = {
  name: 'moderasyon',
  description: 'Bot ile ilgili bilgi verir.',
  usage: 'bilgi'
};