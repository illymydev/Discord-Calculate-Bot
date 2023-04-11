// Discord.js 모듈을 불러오고, Client와 Intents 객체를 생성한다.
// Import the Discord.js module and create a new Client object with the intents to listen for guilds and guild messages.
const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

// 클라이언트가 준비되면 로그인 메시지를 출력한다.
// When the client is ready, log a message to indicate successful login.
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

// 메시지가 생성되면, 메시지의 내용이 "!calculate"로 시작하는지 확인하고 수식을 계산하여 응답한다.
// Listen for messages and respond with the result of the evaluated expression if the message starts with "!calculate".
client.on('messageCreate', msg => {
  if (msg.content.startsWith('!calculate')) {
    const expression = msg.content.slice(11);
    const result = eval(expression);
    msg.reply(result.toString());
  }
});

// 클라이언트에 로그인한다.
// Log in to Discord with the client's token.
client.login('YOUR_BOT_TOKEN');
