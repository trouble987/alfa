const Discord = require('discord.js');
exports.run = async (client, message, args) => {
  
   if (!message.member.hasPermission("BAN_MEMBERS"))
    return message.channel.send(`**Bu Komutu Kullana Bilmek İçin** \`Üyeleri Yasakla\` **Yetkisine Sahip Olman Gerekli!**`);
  
 let kullanici = message.mentions.users.first()
 if(!kullanici) return message.channel.send("**Banlanıcak Kişiyi Etiketlemelisin!**")

const embed = new Discord.MessageEmbed()
.setColor('GREEN')
.setTitle(` ${kullanici.tag} **Adlı Kullanıcıyı Başarıyla Banladım!**`)
.setImage(`https://giphy.com/gifs/ban-banned-admin-fe4dDMD2cAU5RfEaCU`)
message.channel.send(embed)
  message.guild.members.ban(kullanici)
}

    exports.conf = {
        enabled: true,
        guildOnly: false,
        aliases: [],
        permLevel: 0,
    kategori: "moderasyon",
    };
      
    exports.help = {
        name: 'ban',
        description: 'ban',
        usage: 'ban',
    
    };