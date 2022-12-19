require('dotenv').config();
const { getPower } = require('./functions/getPower');
const { getTop } = require('./functions/rankingUsers');
const mongoose = require('./database/moongose');
const { RateLimiter } = require('discord.js-rate-limiter');
const { Client, GatewayIntentBits } = require('discord.js');

const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });
let timeLimiter = new RateLimiter(1, 1000);

client.on('ready', () => {
    client.user.setActivity(`perseguir offliners`);
    bot = client.user.tag;
    console.log(`${bot} is running`);
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
    else if (message.content === '!top') { getTop(message, client); }
});
mongoose.init();
client.login(process.env.DISCORD_TOKEN);