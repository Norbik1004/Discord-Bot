const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'reportbug',
    description: "report a bug to the staff!",
    execute(message, args){
        let a = message.guild.channels.cache.find(channel => channel.id === 'BUG_REPORTS_CHANNEL_ID');
        let bug = args.slice(0).join(' ');
        
        const Discord = require("discord.js");
        const client = new Discord.Client();
        const embed = new MessageEmbed()
        .setTitle("**BUG REPORT**")
        .setDescription(bug)
        .setFooter(`Bug Reported by: ${message.author.tag}`, (message.author.displayAvatarURL()))
        .setColor("#ff1d00");
        embed.setTimestamp()
        const embed2 = new MessageEmbed()
        .setTitle("**COMMAND RUN - REPORTBUG**")
        .setDescription(`Command value - ${bug} | USER - ${message.author.tag}`, (message.author.displayAvatarURL()))
        .setTimestamp()
        .setColor("#00dfff");
         const embed3 = new MessageEmbed()
        .setTitle("**THANKS FOR REPORTING THE BUG!** " + `${message.author.tag}`, (message.author.displayAvatarURL()))
        .setTimestamp()
        .setColor("#1fff00");
        
        message.channel.send(embed3);
        a.send(embed).then(async msg => await msg.react("⬆️") && await msg.react("⬇️"));
        //logs
        //let b = message.guild.channels.cache.find(channel => channel.id === '774171354584711169');
        //b.send(embed2);
    }
}
