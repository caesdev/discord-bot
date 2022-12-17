require('dotenv').config();
const { getPower } = require('./functions/getPower');
const { RateLimiter } = require('discord.js-rate-limiter')

const { Client, GatewayIntentBits } = require('discord.js');
const mongoose = require('./database/moongose');
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });
let timeLimiter = new RateLimiter(1, 60000);

client.on('ready', () => {
    client.user.setActivity(`perseguir offliners`);
});

client.on('messageCreate', async (message) => {
    if (message.content === '!poder') {
        let limiter = timeLimiter.take(message.author.id);
        let username = message.author.username;
        let power = getPower();

        if (limiter) {
            message.reply({
                content: `${username} no seas intenso, espera un minuto`
            })
        } else {
            message.reply({
                content: `Nivel de poder: ${power}`
            })
            mongoose.init(username, power);
        }
    }
});
client.login(process.env.DISCORD_TOKEN);