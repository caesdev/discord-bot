const setUser = require('../database/createOrUpdateUser');
const User = require('../models/user');

function getPower(message, username) {

    let server_id = message.guild.id;
    let powerValue = Math.floor(Math.random() * (100));
    let rank = ['BAJO', 'MEDIO', 'ALTO', 'SUPREMO', 'SEMI-DIOS', 'DIOS'];
    if (powerValue < 2000) {
        setUser.saveUserTrue(username, powerValue, rank[0], server_id);
        User.find({ name: username, server: server_id }).exec(function (err, user) {
            user.map(function (element) {
                let userData = (`${element.name} ${element.power} rango **${element.rank}**`)
                message.reply({ content: `>>> ${username} tu nivel de poder aumento en: **${powerValue}**\n${userData}` })
            });
        });
    }
    else if (powerValue > 2001 && powerValue <= 4000) {
        setUser.saveUserTrue(username, powerValue, rank[1], server_id);
        User.find({ name: username, server: server_id }).exec(function (err, user) {
            user.map(function (element) {
                let userData = (`${element.name} ${element.power} rango **${element.rank}**`)
                message.reply({ content: `>>> ${username} tu nivel de poder aumento en: **${powerValue}**\n${userData}` })
            });
        });
    }
    else if (powerValue > 4001 && powerValue <= 6000) {
        setUser.saveUserTrue(username, powerValue, rank[2], server_id);
        User.find({ name: username, server: server_id }).exec(function (err, user) {
            user.map(function (element) {
                let userData = (`${element.name} ${element.power} rango **${element.rank}**`)
                message.reply({ content: `>>> ${username} tu nivel de poder aumento en: **${powerValue}**\n${userData}` })
            });
        });
    }
    else if (powerValue > 6001 && powerValue <= 8000) {
        setUser.saveUserTrue(username, powerValue, rank[3], server_id);
        User.find({ name: username, server: server_id }).exec(function (err, user) {
            user.map(function (element) {
                let userData = (`${element.name} ${element.power} rango **${element.rank}**`)
                message.reply({ content: `>>> ${username} tu nivel de poder aumento en: **${powerValue}**\n${userData}` })
            });
        });
    }
    else if (powerValue > 8001 && powerValue <= 9500) {
        setUser.saveUserTrue(username, powerValue, rank[4], server_id);
        User.find({ name: username, server: server_id }).exec(function (err, user) {
            user.map(function (element) {
                let userData = (`${element.name} ${element.power} rango **${element.rank}**`)
                message.reply({ content: `>>> ${username} tu nivel de poder aumento en: **${powerValue}**\n${userData}` })
            });
        });
    }
    else if (powerValue > 9501 && powerValue <= 10000) {
        setUser.saveUserTrue(username, powerValue, rank[5], server_id);
        User.find({ name: username, server: server_id }).exec(function (err, user) {
            user.map(function (element) {
                let userData = (`${element.name} ${element.power} rango **${element.rank}**`)
                message.reply({ content: `>>> ${username} tu nivel de poder aumento en: **${powerValue}**\n${userData}` })
            });
        });
    }
}
module.exports = { getPower }