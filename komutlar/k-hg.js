const discord = require('discord.js')
const db = require('quick.db')

exports.run = async(client, message, args) => {

    
if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`**Bu Komutu Kullanabilmek İçin** \`Yönetici\` **Yetkisine Sahip Olmalısın.**`);


if(args[0] === "sıfırla") {
const sıfırlandı = new discord.MessageEmbed()
.setAuthor(client.user.username, client.user.avatarURL())  
.setTitle(`${client.user.username} | Hoş Geldin Kanalını Sıfırlama Komutu.`)
.setColor(0x36393F)
.setDescription(`Hoş Geldin Kanalı Başarıyla Sıfırlandı!`)
.setThumbnail(client.user.avatarURL)
.setFooter(`Sivaslı`)
message.channel.send(sıfırlandı)
db.delete(`kayıthg_${message.guild.id}`)
return;
}

let kanal = message.mentions.channels.first();   
if (!kanal) {
  const ayarlanmadı = new discord.MessageEmbed()
.setAuthor(client.user.username, client.user.avatarURL())  
.setTitle(`${client.user.username} | Hoş Geldin Kanalını Ayarlama Komutu.`)
.setColor(0x36393F)
.setDescription(`Hoş Geldin Kanalı Belirtiniz!`)
.setThumbnail(client.user.avatarURL())
.setFooter(`Sivaslı`)
message.channel.send(ayarlanmadı)
}
db.set(`kayıthg_${message.guild.id}`, kanal.id)
const ayarlandı = new discord.MessageEmbed()
.setAuthor(client.user.username, client.user.avatarURL())  
.setTitle(`${client.user.username} | Hoş Geldin Kanalını Ayarlama Komutu.`)
.setColor(0x36393F)
.setDescription(`Sivaslı Hoş Geldin Kanalı ${kanal} Olarak Ayarlandı!`)
.setThumbnail(client.user.avatarURL())
.setFooter(`Sivaslı`)
message.channel.send(ayarlandı)
  
}
exports.conf = {
  enabled: true,
  guildonly: false,
  aliases: [],
  permlevel: 0
}
exports.help = {
  name: 'kayıt-hg',
  description: 'Kayıt Olunacak Kanalı Ayarlar',
  usage: 'dr!kayıt-kanal #kanal'
}