const WestraDiscord =
      require('discord.js');
const WestraClient =
      new WestraDiscord.Client();
exports.run = (client, message) => {
  if(message.author.id !== "878586731862036531") if(message.author.id !== "878586731862036531") return message.channel.send("Hayırdır Gardaş Ne Yapmaya Çalışıyırsın");
const WestraEmbed = new WestraDiscord.MessageEmbed().setColor(0x36393F).setFooter(``).setTimestamp()
.setDescription(`ping değeri şu an = **${client.ws.ping} ms**`)
message.channel.send(WestraEmbed)
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  kategori: "Bot",
  permLevel: 0
};

exports.help = {
  name: 'ping',
  description: 'Bot ile ilgili bilgi verir.',
  usage: 'bilgi'
};