const { EmbedBuilder } = require('discord.js');
module.exports = {
    name: 'ping',
    alias: ['latencia'],

    run(client, message, args) {
        const embed = new EmbedBuilder()
            .setTitle('Titulo')
            .setDescription('Descripción')
        message.channel.send({ embeds: [embed] })
    }
}