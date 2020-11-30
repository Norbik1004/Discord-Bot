const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'embed',
    description: "used to create a embed",
    execute(message, args){   
            let desc = args.slice(0).join(' ');
        
            const Discord = require("discord.js");
            const client = new Discord.Client();
        	const embed = new MessageEmbed()
            .setTitle(desc)
        	.setFooter(`Requested by: ${message.author.tag}`, (message.author.displayAvatarURL()))
            .setColor('#1fff00');
            embed.setTimestamp()
        
            message.channel.send(embed);
    }
}