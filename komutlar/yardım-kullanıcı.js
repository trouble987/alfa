const WestraDiscord = require('discord.js');
const WestraClient = new WestraDiscord.Client();
const ayarlar = require('../ayarlar.json');
let prefix = ayarlar.prefix

exports.run = (client, message) => {
 const WestraEmbed = new WestraDiscord.MessageEmbed()
  .setColor(0x36393F)
 .setAuthor(`${client.user.username} | Kullanıcı Yardım Menüsü`)
 .setDescription(`
 **davet** -> Botu davet edersiniz.
 **shardbilgi** -> Botun shard bilgilerini gösterir.
 **pp** -> Etiketlediğiniz kişinin avatarını gösterir.
 **randompp** -> Botun ekli olduğu sunuculardaki her hangi birinin avatarını atar.
 **öneri** -> Bota öneri belirtirsiniz.
 **sonmesaj** -> Yazdığınız son mesajı gösterir.
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
  name: 'kullanıcı',
  description: 'Bot ile ilgili bilgi verir.',
  usage: 'bilgi'
};