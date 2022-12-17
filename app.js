require('dotenv').config();
const { getPower } = require('./functions/getPower');

const { Client, GatewayIntentBits } = require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });


client.on('ready', () => {
    client.user.setActivity(`perseguir offliners`);
    console.log('bot has started ✅');
});

client.on('messageCreate', async (message) => {
    if (message.content === '!poder') {
        message.reply({
            content: getPower()
        })
    }
});

client.login(process.env.DISCORD_TOKEN);