require('colors');
require('dotenv').config();
var moment = require('moment');
const { getTop } = require('./commands/top');
const { Client, GatewayIntentBits, ActivityType } = require('discord.js');
const { getPower } = require('./commands/poder');
const { getDuelo } = require('./commands/duelo')
const { getBloque } = require('./commands/sorteo')
const { RateLimiter } = require('discord.js-rate-limiter');
const mongoose = require('./database/moongose');
const { getSelf } = require('./commands/self');
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });
let timeLimiter = new RateLimiter(1, 5000);
client.on('ready', () => {
    let serverCount = client.guilds.cache.size;
    client.user.setPresence({
        activities: [{ name: `${serverCount} servidores`, type: ActivityType.Watching }],
        status: `online`
    });
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
    else if (commando === '!ayuda') {
        await message.reply({
            content: '>>> Los comandos disponibles son: \n!poder\n!pos\n!yo\n!duelo\n!bloque'
        });
    }
    else if (commando === '!pos') { await getTop(message, client); }
    else if (commando === '!yo') { await getSelf(message, username); }
    else if (commando === '!duelo') { await getDuelo(message, username); }
    else if (commando === '!bloque') { await getBloque(message, username); }
});
mongoose.init();
client.login(process.env.DISCORD_TOKEN);