const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'user',
    description: "shows user info!",
    execute(message, args){
        const Discord = require("discord.js");
        const client = new Discord.Client();
        const embed = new MessageEmbed()
        .setColor('#1fff00')
	.setTitle('**YOUR INFOMATION!**')
        .setDescription('Your informationb:')
	.setThumbnail(message.author.displayAvatarURL())
	.addFields(
	    { name: 'Bot:', value: `${message.author.bot}`, inline: false },
	    { name: 'Your tag:', value: `${message.author.tag}`, inline: false },
            { name: 'When did you create your account and timezone:', value: `${message.author.createdAt}`, inline: false },
            { name: 'ID:', value: `${message.author.id}`, inline: false },
	    )
	embed.setTimestamp()  
        .setFooter(`Requested by: ${message.author.tag}`, (message.author.displayAvatarURL()))
        message.channel.send(embed);
    }
}
