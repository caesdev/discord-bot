require('dotenv').config();
const mongoose = require('./database/moongose');
const { getPower } = require('./functions/getPower');
const { RateLimiter } = require('discord.js-rate-limiter');
const { Client, GatewayIntentBits } = require('discord.js');

const { getTop, getBottom } = require('./functions/rankingUsers');
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });
let timeLimiter = new RateLimiter(1, 5000);

client.on('ready', () => {
    client.user.setActivity(`perseguir offliners`);
});

client.on('messageCreate', async (message) => {
    let limiter = timeLimiter.take(message.author.id);
    let username = message.author.username;

    if (message.content === '!poder') {
        if (limiter) { message.reply({ content: 'Ocupado, ve a joder en otro lado' }) }
        getPower(message, username);

    } else if (message.content === '!poder') {
        if (limiter) { message.reply({ content: 'Ocupado, ve a joder en otro lado' }) }
        getPower(message, username)
    }
    else if (message.content === '!top') {
        if (limiter) { message.reply({ content: 'Ocupado, ve a joder en otro lado' }) }
        getTop(message);

    } else if (message.content === '!bottom') {
        if (limiter) { message.reply({ content: 'Ocupado, ve a joder en otro lado' }) }
        getBottom(message);
    }
});
mongoose.init();
client.login(process.env.DISCORD_TOKEN);