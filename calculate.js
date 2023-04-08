const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content.startsWith('!calculate')) {
    const expression = msg.content.slice(11); // remove the "!calculate " prefix
    const result = eval(expression);
    msg.reply(result);
  }
});

client.login('YOUR_BOT_TOKEN');
