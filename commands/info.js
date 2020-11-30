const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'info',
    description: "shows bot info!",
    execute(message, args){
        const Discord = require("discord.js");
        const client = new Discord.Client();
        const embed = new MessageEmbed()
        .setColor('#1fff00')
	.setTitle('**HI!**')
	.setURL('URL')
      	.setDescription('TEXT')
	.setThumbnail('IMAGE')
        .addFields(
	    { name: 'TEXT', value: 'TEXT', inline: false },
	    { name: 'TEXT', value: 'TEXT', inline: false },
            { name: 'TEXT', value: 'TEXT', inline: false },
            { name: 'TEXT', value: 'TEXT', inline: false },
	    )
	    embed.setTimestamp()  
        .setFooter(`Requested by: ${message.author.tag}`, (message.author.displayAvatarURL()));   
        message.channel.send(embed);
    }
}
