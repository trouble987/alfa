const discord = require('discord.js')
const db = require('quick.db')

exports.run = async(client, message, args) => {

  if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`**Bu Komutu Kullanabilmek İçin** \`Yönetici\` **Yetkisine Sahip Olmalısın.**`);

if(args[0] === "sıfırla") {
const sıfırlandı = new discord.MessageEmbed()
.setAuthor(client.user.username, client.user.avatarURL())  
.setTitle(`${client.user.username} | Alınacak Rolü Sıfırlama Komutu.`)
.setColor(0x36393F)
.setDescription(`Kayıt Olunca Otomatik Alınacak Rol Sıfırlandı!`)
.setThumbnail(client.user.avatarURL())
.setFooter(`Sivaslı`)
message.channel.send(sıfırlandı)
db.delete(`alınacakrol_${message.guild.id}`)
return;
}

let rol = message.mentions.roles.first();   
if (!rol) {
  const ayarlanmadı = new discord.MessageEmbed()
.setAuthor(client.user.username, client.user.avatarURL())  
.setTitle(`${client.user.username} | Alınacak Rolü Ayarlama Komutu.`)
.setColor(0x36393F)
.setDescription(`Kayıt Olunca Alınacak Rolü Belirtiniz!`)
.setThumbnail(client.user.avatarURL())
.setFooter(`Sivaslı`)
message.channel.send(ayarlanmadı)
}
db.set(`alınacakrol_${message.guild.id}`, rol.id)
const ayarlandı = new discord.MessageEmbed()
.setAuthor(client.user.username, client.user.avatarURL())  
.setTitle(`${client.user.username} | Alınacak Rolü Ayarlama Komutu.`)
.setColor(0x36393F)
.setDescription(`Kayıt Olunca Otomatik Alınacak Rol Başarıyla ${rol} Olarak Ayarlandı!`)
.setThumbnail(client.user.avatarURL)
.setFooter(`Sivaslı`)
message.channel.send(ayarlandı)
  
}
exports.conf = {
  enabled: true,
  guildonly: false,
  aliases: ['alınacakrol', 'arol', 'a-rol'],
  permlevel: 0
}
exports.help = {
  name: 'alınacak-rol',
  description: 'Kayıt Olunca Alınacak Rolü Ayarlar',
  usage: 'alınacak-rol @rol'
}