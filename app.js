require('dotenv').config();
const mongoose = require('./database/moongose');
const { getPower } = require('./functions/getPower');
const { RateLimiter } = require('discord.js-rate-limiter');
const { Client, GatewayIntentBits } = require('discord.js');

const { getTop, getRanking } = require('./functions/rankingUsers');
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });
let timeLimiter = new RateLimiter(1, 30000);

client.on('ready', () => {
    client.user.setActivity(`perseguir offliners`);
});

client.on('messageCreate', async (message) => {

    let limiter = timeLimiter.take(message.author.id);
    let username = message.author.username;
    let tag = message.author.tag;

    if (message.content === '!poder') {
        if (limiter) { message.reply({ content: `${username} 😐` }) }
        else {
            getPower(message, username, tag);
            getTop(message, client)
        }
    }
    else if (message.content === '!top') { getTop(message, client); }
});
mongoose.init();
client.login(process.env.DISCORD_TOKEN);