const Discord = require('discord.js');
const client = new Discord.Client();
const ytdl = require("ytdl-core");
 
const prefix = '>';
 
const fs = require('fs');
 
client.commands = new Discord.Collection();
 
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);
 
    client.commands.set(command.name, command);
}
 
 
client.on("ready", () => {

  console.log(`Bot has started, with ${client.users.cache.size} users, in ${client.channels.cache.size} channels of ${client.guilds.cache.size} guilds.`);
  client.user.setActivity(`Made by: Norbik1004 | >help` , {type: "PLAYING"})
});

client.on("guildCreate", guild => {
  console.log(`New guild joined: ${guild.name} (id: ${guild.id}). This guild has ${guild.memberCount} members!`);
  client.user.setActivity(`Made by: Norbik1004 | >help` , {type: "PLAYING"})
});

client.on("guildDelete", guild => {
  console.log(`I have been removed from: ${guild.name} (id: ${guild.id})`);
  client.user.setActivity(`Made by: Norbik1004 | >help` , {type: "PLAYING"})
});

client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;
 
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
 
    if(command === 'help'){
        client.commands.get('help').execute(message, args);
    } else if(command === 'ranks'){
      message.channel.send("SOON!")
    } else if(command === 'ip'){
      message.channel.send("IP?")
    } else if(command === 'season'){
      message.channel.send("Current Season: Christmas!")
    } else if(command === 'join'){
        client.commands.get('join').execute(message, args); s
    } else if(command === 'announce'){
        client.commands.get('announce').execute(message, args);
    } else if(command === 'embed'){
        client.commands.get('embed').execute(message, args);
    } else if(command === 'info'){
        client.commands.get('info').execute(message, args);
    } else if(command === 'user'){
        client.commands.get('user').execute(message, args);
    } else if(command === 'reportbug'){
        client.commands.get('reportbug').execute(message, args);
    } else if(command === 'mytestcommand'){
      if (message.author.id != "659322831628402710") return;
        message.channel.send("Hi, you are my developer!")
    } else if(command === 'kick'){
      if (message.author.flags.has.KICK_MEMBERS) return;
        const user = message.mentions.users.first();``
        // If we have a user mentioned
        if (user) {
          // Now we get the member from the user
          const member = message.guild.member(user);
          // If the member is in the guild
          if (member) {
            /**
             * Kick the member
             * Make sure you run this on a member, not a user!
             * There are big differences between a user and a member
             */
            member
              .kick('You broke the rules!')
              .then(() => {
                // We let the message author know we were able to kick the person
                message.reply(`Kicked: ${user.tag}`);
              })
              .catch(err => {
                // An error happened
                // This is generally due to the bot not being able to kick the member,
                // either due to missing permissions or role hierarchy
                message.reply('This user is an administrator.');
                // Log the error
                console.error(err);
              });
          } else {
            // The mentioned user isn't in this guild
            message.reply("The mentioned user isn't in this server!");
          }
          // Otherwise, if no user was mentioned
        } else {
          message.reply("No user was mentioned!");
        }
        } else if(command === 'ban'){
          if (message.author.flags.has.BAN_MEMBERS) return;
        const user = message.mentions.users.first();
        // If we have a user mentioned
        if (user) {
          // Now we get the member from the user
          const member = message.guild.member(user);
          // If the member is in the guild
          if (member) {
            /**
             * Ban the member
             * Make sure you run this on a member, not a user!
             * There are big differences between a user and a member
             * Read more about what ban options there are over at
             * https://discord.js.org/#/docs/main/master/class/GuildMember?scrollTo=ban
             */
            member
              member.ban({
                reason: 'You broke the rules!',
              })
              .then(() => {
                // We let the message author know we were able to ban the person
                message.reply(`Banned ${user.tag}`);
              })
              .catch(err => {
                // An error happened
                // This is generally due to the bot not being able to ban the member,
                // either due to missing permissions or role hierarchy
                message.reply('This user is an administrator.');
                // Log the error
                console.error(err);
              });
          } else {
            // The mentioned user isn't in this guild
            message.reply("The mentioned user isn't in this server!");
          }
        } else {
          // Otherwise, if no user was mentioned
          message.reply("No user was mentioned!");
        }

    } else if(command === 'avatar'){
        message.reply(message.author.displayAvatarURL());
    } else {
      message.channel.send("This command doesn't exist!")};
})
client.login('YOUR_BOT_CODE');