const setUser = require('../functions/setUser');

function getPower(message, username) {
    let server_id = message.guild.id;
    let powerValue = Math.floor(Math.random() * 1001);
    message.channel.send(
        `>>> @${username} tu nivel de poder: **${powerValue}**`
    );
    setUser.saveUser(username, powerValue, server_id);
    return `${powerValue}`
}
module.exports = { getPower }