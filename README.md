# Discord-Bot
My discord bot's code :)
This is a **small** part of my bot, you can use it if you want!
**If you want a new feature, please open an issue and desribe it. I will add it ASAP!
You can contact me on discord: Norbik1004#2468**

# SETUP

Required:
- discord account with verified email address.
- node.js (https://nodejs.org/en/)

Steps:

1. Go to https://discord.com/developers/applications and sign in.
2. Select **applications** and click **new application**. Name it and click **create**.
3. Go to **BOT** and click **add bot**. Now copy the token (below username).
4. Go to your console/terminal and execute `mkdir discord-bot`
5. Move into the project folder you just created with `cd discord-bot`
6. Next, execute `nano config.json` and add the following code:

`{`
   
` "BOT_TOKEN": "YOUR BOT TOKEN"`

`}`

Then save and exit the file.

7. Do `npm init` and use enter to skip the questions (You can answer if you want)
8. Next use: `npm install discord.js`
9. Now, download the code and paste it into the **discord-bot** folder. Customise the **info** file in the **commands** folder.
10. Finally, use `nano index.js` - now, the bot should be online. 
