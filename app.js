require('colors');
require('dotenv').config();
var moment = require('moment');
const { getTop } = require('./commands/top');
const { Client, GatewayIntentBits } = require('discord.js');
const { getPower } = require('./commands/poder');
const { getDuelo } = require('./commands/duelo')
const { RateLimiter } = require('discord.js-rate-limiter');
const mongoose = require('./database/moongose');
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });
let timeLimiter = new RateLimiter(1, 5000);
client.on('ready', () => {
    client.user.setActivity(`perseguir offliners`);
    bot = client.user.tag;
    console.log(`${bot} is running at`.cyan, moment().format('h:mm:ss a'));
});

client.on('messageCreate', async (message) => {
    let limiter = timeLimiter.take(message.author.id);
    let username = message.author.username;
    if (message.content === '!poder') {
        if (limiter) { message.reply({ content: `${username} 😐` }) }
        else {
            getPower(message, username);
        }
    }
    else if (message.content === '!pos') { getTop(message, client); }
    else if (message.content === '!duelo') { getDuelo(message, username); }
});
mongoose.init();
client.login(process.env.DISCORD_TOKEN);