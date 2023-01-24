const setUser = require('../database/createOrUpdateUser');
const User = require('../models/user');

function getPower(message, username) {

    let server_id = message.guild.id;
    let powerValue = Math.floor(Math.random() * (100));
    let rank = ['BAJO', 'MEDIO', 'ALTO', 'SUPREMO', 'SEMI-DIOS', 'DIOS'];

    User.find({ name: username, server: server_id }).exec((err, user) => {
        user.map((element) => {
            if (element.power < 2000) {
                setUser.saveUserTrue(username, powerValue, rank[0], server_id);
                let userData = (`${element.name} ${element.power} rango **${element.rank}**`)
                message.reply({ content: `>>> ${userData} \n${username} tu nivel de poder aumento en: **${powerValue}**` })
            } else if (element.power > 2001 && element.power <= 4000) {
                setUser.saveUserTrue(username, powerValue, rank[1], server_id);
                let userData = (`${element.name} ${element.power} rango **${element.rank}**`)
                message.reply({ content: `>>> ${userData} \n${username} tu nivel de poder aumento en: **${powerValue}**` })
            }
        })
    });
}
module.exports = { getPower }