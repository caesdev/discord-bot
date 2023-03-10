require('colors');
require('dotenv').config();
var moment = require('moment');
const { getTop } = require('./commands/top');
const { Client, GatewayIntentBits, ActivityType } = require('discord.js');
const { getPower } = require('./commands/poder');
const { getDuelo } = require('./commands/duelo')
const { getCheat } = require('./commands/cheat');
const { RateLimiter } = require('discord.js-rate-limiter');
const mongoose = require('./database/moongose');
const { getSelf } = require('./commands/self');
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });
let timeLimiter = new RateLimiter(1, 5000);
client.on('ready', () => {

    setInterval(() => {
        let membersCount = client.guilds.cache.map(guild => guild.memberCount).reduce((a, b) => a + b, 0)
        client.user.setActivity(`${membersCount} usuarios`, { type: ActivityType.Listening });
    }, 1000 * 60);
    bot = client.user.tag;
    console.log(`STATUS: ${bot} [ON]`.cyan, moment().format('h:mm:ss a'));
});

client.on('messageCreate', async (message) => {
    let limiter = timeLimiter.take(message.author.id);
    let username = message.author.username;
    let commando = message.content;
    if (commando === '!poder') {
        if (limiter) { message.reply({ content: `${username} 😐` }) }
        else { await getPower(message, username); }
    }

    if (commando === '!cheat') {
        if (limiter) { message.reply({ content: `${username} 😐` }) }
        else { await getCheat(message, username); }
    }
    else if (commando === '!pos') { await getTop(message, client); }
    else if (commando === '!yo') { await getSelf(message, username); }
    else if (commando === '!duelo') { await getDuelo(message, username); }
});
mongoose.init();
client.login(process.env.DISCORD_TOKEN);