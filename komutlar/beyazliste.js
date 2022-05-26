const Discord = require("discord.js");
const db = require('quick.db');

exports.run = async (client, message, args) => {
if(message.author.id !== "679361745248321566") if(message.author.id !== "679361745248321566") return message.channel.send("**Bu Komutu Kullana Bilmek İçin** (`679361745248321566`) **Yani** <@679361745248321566> **Kurucum Olman Gereklidir.**");
  let user = args[0]
  if (!user) {
    let e = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setDescription("Bir Üyeyi Kara Listeden Çıkartmak İçin Bir ID Girmelisin")
    message.channel.send({embed: e})
    return;
  };
  
  
  db.delete(`karalist_${user}`)
  
  let embed = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setDescription(`<@${user}> Adlı Kullanıcı Kara Listeden Çıkarıldı!`)
  return message.channel.send({embed: embed})
 //if (client.users.cache.get(user).send(` <@${message.author.id}> adlı yetkilimiz tarafından beyazlisteye alındın! Artık Asreaperin komutlarını kullanabilirsin.`)){
 // } else return
  
  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["whitelist", "beyaz-liste"],
  permLevel: 0
};

exports.help = {
  name: "beyazliste",
  description: "Belirtilen kullancıyı kara listeden çıkartır!",
  usage: "beyazliste <kullanıcı ID>"
};  