const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'embed',
    description: "used to create an embed",
    execute(message, args){   
            let desc = args.slice(0).join(' ');
        
            const Discord = require("discord.js");
            const client = new Discord.Client();
        	const embed = new MessageEmbed()
            .setDescription(desc)
        	.setFooter(`Requested by: ${message.author.tag}`, (message.author.displayAvatarURL()))
            .setColor('#1fff00');
            embed.setTimestamp()
        
            message.channel.send(embed);
    }
}
