const User = require('../models/user');

function getSelf(message, name) {

    let server_id = message.guild.id;
    User.find({ name: name, server: server_id }).exec(function (err, user) {
        user.map(function (element) {
            userData = (`>>> ${element.name} ${element.power} rango **${element.rank}**`)
            message.reply({ content: userData })
        });
    });
    
}
module.exports = { getSelf }