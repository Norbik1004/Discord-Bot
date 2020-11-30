const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'help',
    description: "shows every command!",
    execute(message, args){
        
        const Discord = require("discord.js");
        const client = new Discord.Client();
        const embed = new MessageEmbed()
        .setTitle("**COMMANDS!**")
        .setDescription('Below, you can find my commands. My prefix is: **>**.')
        .addFields(
	    { name: '>announce (text)', value: 'Announces someting.', inline: false },
	    { name: '>help', value: 'Shows the list of commands.', inline: false },
            { name: '>embed (text)', value: 'Sends and embed.', inline: false },
            { name: '>info', value: 'Shows imnportant information.', inline: false },
            { name: '>avatar', value: 'Sends avatar link.', inline: false },
	    { name: '>user', value: 'Shows your information.', inline: false },
            { name: '>kick @user', value: 'Kicks user.', inline: false },
            { name: '>ban @user', value: 'Bans user.', inline: false },
	    )
        .setFooter(`Requested by: ${message.author.tag}`, (message.author.displayAvatarURL()))
        .setColor("#00dfff");
        embed.setTimestamp()
        message.channel.send(embed);
    }
}
