const setUser = require('../functions/setUser');

function getPower(message, username) {
    let powerValue = Math.floor(Math.random() * 10001);
    message.reply({
        content: `Nivel de poder: ${powerValue}`
    })
    setUser.saveUser(username, powerValue);
    return `${powerValue}`
}
module.exports = { getPower }