const Discord = require("discord.js");
const {PREFIX} = require("../config.js");
const { MessageEmbed } = require('discord.js');

module.exports.run = (client, message, args) => {

const ping = new MessageEmbed()
  
.setTitle(`⏱️Pinging\.\.\.`)
.setColor('ff000')
.setDescription(`**:ping_pong: Pong!\nLa latence est de : \`${Math.round(client.ws.ping)}ms\`. **`)
.setThumbnail(message.author.avatarURL())
.setTimestamp()
.setFooter(message.author.username, message.author.avatarURL());

message.channel.send(ping);
message.delete();
}

module.exports.help = {
    name: 'ping',
  };