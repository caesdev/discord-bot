const setUser = require('../database/createOrUpdateUser');
const User = require('../models/user');

function getPower(message, username) {

    let server_id = message.guild.id;
    let powerValue = Math.floor(Math.random() * (200));
    let rank = ['BAJO', 'MEDIO', 'ALTO', 'HEROE', 'SEMI-DIOS', 'DIOS', 'SUPREME', 'REY SUPREME', 'REY SUPREME CORRUPTO'];
    User.countDocuments({ name: username, server: server_id }, function (err, count) {
        User.find({ name: username, server: server_id }).exec((err, user) => {
            if (count > 0) {
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
                    } else if (element.power >= 10001 && element.power <= 25000) {
                        setUser.saveUserTrue(username, powerValue, rank[6], server_id);
                        message.reply({ content: `>>> ${username} tu nivel de poder aumento en: **${powerValue}**` })
                    } else if (element.power >= 25001 && element.power <= 5000) {
                        setUser.saveUserTrue(username, powerValue, rank[7], server_id);
                        message.reply({ content: `>>> ${username} tu nivel de poder aumento en: **${powerValue}**` })
                    } else if (element.power >= 50001 && element.power <= 75000) {
                        setUser.saveUserTrue(username, powerValue, rank[8], server_id);
                        message.reply({ content: `>>> ${username} tu nivel de poder aumento en: **${powerValue}**` })
                    }
                })
            } else {
                setUser.saveUserTrue(username, powerValue, rank[0], server_id);
                message.reply({ content: `>>> ${username} tu nivel de poder aumento en: **${powerValue}**` })
            }
        })
    })


}
module.exports = { getPower }