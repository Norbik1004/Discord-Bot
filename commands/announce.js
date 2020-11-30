const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'announce',
    description: "announce a announcement!",
    execute(message, args){
            let msg = args.slice(0).join(' ');
        
            const Discord = require("discord.js");
       		const client = new Discord.Client();
    	    const embed = new MessageEmbed()
     	    .setTitle("**ANNOUNCEMENT!**")
            .setDescription(msg)
     	    .setFooter(`Requested by: ${message.author.tag}`, (message.author.displayAvatarURL()))
            .setColor("#ff1d00");
            embed.setTimestamp()
    
           message.channel.send(embed);
    }
}