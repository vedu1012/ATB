const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let creditsembed = new Discord.RichEmbed()
    .setDescription("Bot creator")
    .addField("vedu1012")
    .setColor("#15f153")
    .setFooter("FlyHilo Bot | Made by vedu1012.");

    message.channel.send(creditsembed)
}

module.exports.help = {
  name:"prefix"
}