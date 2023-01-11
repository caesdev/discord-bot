const User = require('../models/user');

function getTop(message, client) {

    let channel_id = message.guild.channels.cache.find(channel => channel.name === "ranking");
    let server_id = message.guild.id;
    channel_id = channel_id.id.toString();
    client.channels.cache.get(channel_id).send('Top 10 de los que mas spammean !poder');
    User.find({ server: server_id }).sort({ power: 'desc' }).limit(10).exec(function (err, users) {
        users.map(function (element, index) {
            data = (`>>> **Top ${index + 1}**. ${element.name} ${element.power} rango **${element.rank}**`);
            client.channels.cache.get(channel_id).send(
                data
            );
        });
    });
    
}
module.exports = { getTop }