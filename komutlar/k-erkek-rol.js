const discord = require('discord.js')
const db = require('quick.db')

exports.run = async(client, message, args) => {

  if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`**Bu Komutu Kullanabilmek İçin** \`Yönetici\` **Yetkisine Sahip Olmalısın.**`);

if(args[0] === "sıfırla") {
const sıfırlandı = new discord.MessageEmbed()
.setAuthor(client.user.username, client.user.avatarURL)  
.setTitle(`${client.user.username} | Erkek Rol Sıfırlama Komutu.`)
.setColor(0x36393F)
.setDescription(`Sunucu İçin Ayarladığınız Erkek Rolü Başarıyla Sıfırlandı!`)
.setThumbnail(client.user.avatarURL)
.setFooter(`Sivaslı`)
message.channel.send(sıfırlandı)
db.delete(`erkekrol_${message.guild.id}`)
return;
}

let rol = message.mentions.roles.first();   
if (!rol) {
  const ayarlanmadı = new discord.MessageEmbed()
.setAuthor(client.user.username, client.user.avatarURL())  
.setTitle(`${client.user.username} | Erkek Rol Ayarlama Komutu.`)
.setColor(0x36393F)
.setDescription(`Ayarlayacağınız Erkek Rolünü Belirtiniz!`)
.setThumbnail(client.user.avatarURL)
.setFooter(`Sivaslı`)
message.channel.send(ayarlanmadı)
}
db.set(`erkekrol_${message.guild.id}`, rol.id)
const ayarlandı = new discord.MessageEmbed()
.setAuthor(client.user.username, client.user.avatarURL())  
.setTitle(`${client.user.username} | Erkek Rol Ayarlama Komutu.`)
.setColor(0x36393F)
.setDescription(`Erkek Rolü Başarıyla ${rol} Olarak Ayarlandı!`)
.setThumbnail(client.user.avatarURL)
.setFooter(`Sivaslı`)
message.channel.send(ayarlandı)
  
}
exports.conf = {
  enabled: true,
  guildonly: false,
  aliases: ['erkekrol', 'erol', 'e-rol'],
  permlevel: 0
}
exports.help = {
  name: 'erkek-rol',
  description: 'erkek rolünü ayarlar',
  usage: '!erkek-rol @rol'
}