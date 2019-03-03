const Discord = require('discord.js');
const moment = require("moment");
const client = new Discord.Client();
const prefix = "/"
const ms = require('ms'); // npm i ms
const cool = [];
const fs = require ('fs');

client.on('ready', () => {
   console.log(`----------------`);
      console.log(`Desert Bot- Code By : ZorexHost`);
        console.log(`----------------`);
      console.log(`ON ${client.guilds.size} Servers '     Code By : ZorexHost `);
    console.log(`----------------`);
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`$help | $inv `)
client.user.setStatus("dnd")
});

client.on('message', message => {
   let emoji = client.guilds.get("511225819415183360").emojis.find(r => r.name === "joy"); //كود تعريف المتغير emoji
 
    if(message.content === 'sendemoji'){ //تحقق اذا الرساله هي sebdemji
   message.channel.send(`[ ${emoji} ]`)//يرسل المتغير emoji 
    }  // xomar933 نهاية قوس التحقق
});
 


client.login('NTA2ODg4OTkzMDM2ODI4Njcz.D1yXrw.i7O_GUAfrkV8P3_IZrBpx95Dgdg')
