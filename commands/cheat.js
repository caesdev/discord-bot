const setUser = require('../database/createOrUpdateUser');
const User = require('../models/user');

function getCheat(message, username) {

    let server_id = message.guild.id;
    let powerValue = Math.floor(Math.random() * 350);
    let rank = ['BAJO', 'MEDIO', 'ALTO', 'HEROE', 'SEMI-DIOS', 'DIOS', 'SUPREME'];

    if (powerValue % 2 === 0) {
        User.find({ name: username, server: server_id }).exec((err, user) => {
            if (user) {
                user.map((element) => {
                    if (element.power < 2000) {
                        setUser.saveUserTrue(username, powerValue, rank[0], server_id);
                        message.reply({ content: `>>> ${username} tu nivel de poder aumento en: **${powerValue}**` })
                    } else if (element.power > 2001 && element.power <= 4000) {
                        setUser.saveUserTrue(username, powerValue, rank[1], server_id);
                        message.reply({ content: `>>> ${username} tu nivel de poder aumento en: **${powerValue}**` })
                    }
                    else if (element.power > 4001 && element.power <= 6000) {
                        setUser.saveUserTrue(username, powerValue, rank[2], server_id);
                        message.reply({ content: `>>> ${username} tu nivel de poder aumento en: **${powerValue}**` })
                    }
                    else if (element.power > 6001 && element.power <= 8000) {
                        setUser.saveUserTrue(username, powerValue, rank[3], server_id);
                        message.reply({ content: `>>> ${username} tu nivel de poder aumento en: **${powerValue}**` })
                    }
                    else if (element.power > 8001 && element.power <= 9500) {
                        setUser.saveUserTrue(username, powerValue, rank[4], server_id);
                        message.reply({ content: `>>> ${username} tu nivel de poder aumento en: **${powerValue}**` })
                    }
                    else if (element.power > 9501 && element.power <= 10000) {
                        setUser.saveUserTrue(username, powerValue, rank[5], server_id);
                        message.reply({ content: `>>> ${username} tu nivel de poder aumento en: **${powerValue}**` })
                    } else if (element.power >= 10001) {
                        setUser.saveUserTrue(username, powerValue, rank[6], server_id);
                        message.reply({ content: `>>> ${username} tu nivel de poder aumento en: **${powerValue}**` })
                    }
                })
            } else {
                setUser.saveUserTrue(username, powerValue, rank[0], server_id);
                message.reply({ content: `>>> ${username} tu nivel de poder aumento en: **${powerValue}**` })
            }
        })
    } else {
        User.find({ name: username, server: server_id }).exec((err, user) => {
            if (user) {
                user.map((element) => {
                    if (element.power < 2000) {
                        setUser.saveUserFalse(username, powerValue, rank[0], server_id);
                        message.reply({ content: `>>> ${username} tu nivel de poder bajo en: **${powerValue}**` })
                    } else if (element.power > 2001 && element.power <= 4000) {
                        setUser.saveUserFalse(username, powerValue, rank[1], server_id);
                        message.reply({ content: `>>> ${username} tu nivel de poder bajo en: **${powerValue}**` })
                    }
                    else if (element.power > 4001 && element.power <= 6000) {
                        setUser.saveUserFalse(username, powerValue, rank[2], server_id);
                        message.reply({ content: `>>> ${username} tu nivel de poder bajo en: **${powerValue}**` })
                    }
                    else if (element.power > 6001 && element.power <= 8000) {
                        setUser.saveUserFalse(username, powerValue, rank[3], server_id);
                        message.reply({ content: `>>> ${username} tu nivel de poder bajo en: **${powerValue}**` })
                    }
                    else if (element.power > 8001 && element.power <= 9500) {
                        setUser.saveUserFalse(username, powerValue, rank[4], server_id);
                        message.reply({ content: `>>> ${username} tu nivel de poder bajo en: **${powerValue}**` })
                    }
                    else if (element.power > 9501 && element.power <= 10000) {
                        setUser.saveUserFalse(username, powerValue, rank[5], server_id);
                        message.reply({ content: `>>> ${username} tu nivel de poder bajo en: **${powerValue}**` })
                    } else if (element.power >= 10001) {
                        setUser.saveUserFalse(username, powerValue, rank[6], server_id);
                        message.reply({ content: `>>> ${username} tu nivel de poder bajo en: **${powerValue}**` })
                    }
                })
            } else {
                setUser.saveUserFalse(username, powerValue, rank[0], server_id);
                message.reply({ content: `>>> ${username} tu nivel de poder bajo en: **${powerValue}**` })
            }
        })
    }
}
module.exports = { getCheat }