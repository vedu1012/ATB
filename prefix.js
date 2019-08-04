const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let prefixembed = new Discord.RichEmbed()
    .setDescription("The Prefix of This Bot is")
    .addField("!")
    .setColor("#15f153")
    .setFooter("FlyHilo Bot | Made by vedu1012.");

    message.channel.send(prefixembed)
}

module.exports.help = {
  name:"prefix"
}