const setUser = require('../database/createOrUpdateUser');

function getPower(message, username) {
    let server_id = message.guild.id;
    let powerValue = Math.floor(Math.random() * (1428 * 4));
    message.channel.send(
        `>>> @${username} tu nivel de poder: **${powerValue}**`
    );
    setUser.saveUser(username, powerValue, server_id);
    return `${powerValue}`
}
module.exports = { getPower }