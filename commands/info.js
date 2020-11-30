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
	    .setURL('http://godcraft.net/')
      	.setDescription('Hello! Remember that my prefix is: **>**. I was made by **Norbik1004** on 6th November 2020! If I am offline please notify my developer! :grinning: He is planning to add music!  ')
	    .setThumbnail('https://i.redd.it/ydbv5niyykq11.gif')
	    .addFields(
	    	{ name: 'VISIT MY DEVELOPER!', value: 'Discord: https://discord.gg/V8nw54x or visit his website: http://godcraft.net/ Remember that he is also the owner of a minecraft server, IP: godcraft.net', inline: false },
		    { name: 'HOW TO CONTACT THE DEV?', value: 'Join his discord or message him on discord - @Norbik1004#2468! ', inline: false },
            { name: 'DO YOU WANT YOUR OWN BOT?:grinning:', value: 'If you want my dev to create you a special bot just contact him! If you want to suggest a new feature feel free to do it!', inline: false },
            { name: 'IMPORTAN!', value: 'If you want a new feature just contact him, use >help for the list of commands.:grinning:', inline: false },
	    )
	    embed.setTimestamp()  
        .setFooter(`Requested by: ${message.author.tag}`, (message.author.displayAvatarURL()));   
        message.channel.send(embed);
    }
}