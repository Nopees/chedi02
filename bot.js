const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("618926790857195576")
setInterval(function() {
channel.send(`haroonylove`);
}, 30)
})


client.login(process.env.BOT_TOKEN);
