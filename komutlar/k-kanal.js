const discord = require('discord.js')
const db = require('quick.db')

exports.run = async(client, message, args) => {

    
if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`**Sivaslı Bu Komutu Kullanabilmek İçin** \`Yönetici\` **Yetkisine Sahip Olmalısın.**`);


if(args[0] === "sıfırla") {
const sıfırlandı = new discord.MessageEmbed()
.setAuthor(client.user.username, client.user.avatarURL)  
.setTitle(`${client.user.username} | Kayıt Kanal Sıfırlama Komutu.`)
.setColor(0x36393F)
.setDescription(`Kayıt Olunacak Kanal Başarıyla Sıfırlandı!`)
.setThumbnail(client.user.avatarURL)
.setFooter(`Sivaslı`)
message.channel.send(sıfırlandı)
db.delete(`kayıtkanal_${message.guild.id}`)
return;
}

let kanal = message.mentions.channels.first();   
if (!kanal) {
  const ayarlanmadı = new discord.MessageEmbed()
.setAuthor(client.user.username, client.user.avatarURL())  
.setTitle(`${client.user.username} | Kayıt Kanal Ayarlama Komutu.`)
.setColor(0x36393F)
.setDescription(`Kayıt Olunacak Kanalı Belirtiniz!`)
.setThumbnail(client.user.avatarURL())
.setFooter(`Eriador`)
message.channel.send(ayarlanmadı)
}
db.set(`kayıtkanal_${message.guild.id}`, kanal.id)
const ayarlandı = new discord.MessageEmbed()
.setAuthor(client.user.username, client.user.avatarURL())  
.setTitle(`${client.user.username} | Kayıt Kanal Ayarlama Komutu.`)
.setColor(0x36393F)
.setDescription(`Kayıt Olunacak Kanal ${kanal} Olarak Ayarlandı!`)
.setThumbnail(client.user.avatarURL())
.setFooter(`Eriador`)
message.channel.send(ayarlandı)
  
}
exports.conf = {
  enabled: true,
  guildonly: false,
  aliases: ['kayıtkanal', 'kkanal', 'k-kanal'],
  permlevel: 0
}
exports.help = {
  name: 'kayıt-kanal',
  description: 'Kayıt Olunacak Kanalı Ayarlar',
  usage: 'dr!kayıt-kanal #kanal'
}