require('dotenv').config();
const { getPower } = require('./functions/getPower');
const { RateLimiter } = require('discord.js-rate-limiter')

const { Client, GatewayIntentBits } = require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });
let rateLimiter = new RateLimiter(1, 60000);

client.on('ready', () => {
    client.user.setActivity(`perseguir offliners`);
    console.log('bot has started ✅');
});

client.on('messageCreate', async (message) => {
    if (message.content === '!poder') {
        let limiter = rateLimiter.take(message.author.id);
        console.log(limiter);
        if (limiter) {
            message.reply({
                content: `${message.author.username} no seas intenso, espera un minuto`
            })
        } else {
            message.reply({
                content: getPower()
            })
        }
    }
});

client.login(process.env.DISCORD_TOKEN);