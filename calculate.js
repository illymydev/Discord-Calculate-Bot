const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('messageCreate', msg => {
  if (msg.content.startsWith('!calculate')) {
    const expression = msg.content.slice(11);
    const result = eval(expression);
    msg.reply(result.toString());
  }
});

client.login('YOUR_BOT_TOKEN');
