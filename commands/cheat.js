const setUser = require('../database/createOrUpdateUser');

function getCheat(message, username) {
    let server_id = message.guild.id;
    let powerValue = Math.floor(Math.random() * (111));
    let rank = ['BAJO', 'MEDIO', 'ALTO', 'SUPREMO', 'SEMI-DIOS', 'DIOS', 'BASURA'];

    if (powerValue % 2 === 0) {
        if (powerValue < 2000) {
            message.reply({ content: `>>> @${username} tu nivel de poder aumento en: **${powerValue}**` })
            setUser.saveUserTrue(username, powerValue, rank[0], server_id);
        }
        else if (powerValue > 2001 && powerValue <= 4000) {
            message.reply({ content: `>>> @${username} tu nivel de poder aumento en: **${powerValue}**` })
            setUser.saveUserTrue(username, powerValue, rank[1], server_id);
        }

        else if (powerValue > 4001 && powerValue <= 6000) {
            message.reply({ content: `>>> @${username} tu nivel de poder aumento en: **${powerValue}**` })
            setUser.saveUserTrue(username, powerValue, rank[2], server_id);
        }
        else if (powerValue > 6001 && powerValue <= 8000) {
            message.reply({ content: `>>> @${username} tu nivel de poder aumento en: **${powerValue}**` })
            setUser.saveUserTrue(username, powerValue, rank[3], server_id);
        }
        else if (powerValue > 8001 && powerValue <= 9500) {
            message.reply({ content: `>>> @${username} tu nivel de poder aumento en: **${powerValue}**` })
            setUser.saveUserTrue(username, powerValue, rank[4], server_id);
        }
        else if (powerValue > 9501 && powerValue <= 10000) {
            message.reply({ content: `>>> @${username} tu nivel de poder aumento en: **${powerValue}**` })
            setUser.saveUserTrue(username, powerValue, rank[5], server_id);
        }
    } else {
        if (powerValue < 0) {
            message.reply({ content: `>>> @${username} tu nivel de poder bajo en: **${powerValue}**` })
            setUser.saveUserFalse(username, powerValue, rank[6], server_id);
        }
        else if (powerValue < 2000) {
            message.reply({ content: `>>> @${username} tu nivel de poder bajo en: **${powerValue}**` })
            setUser.saveUserFalse(username, powerValue, rank[0], server_id);
        }
        else if (powerValue > 2001 && powerValue <= 4000) {
            message.reply({ content: `>>> @${username} tu nivel de poder bajo en: **${powerValue}**` })
            setUser.saveUserFalse(username, powerValue, rank[1], server_id);
        }
        else if (powerValue > 4001 && powerValue <= 6000) {
            message.reply({ content: `>>> @${username} tu nivel de poder bajo en: **${powerValue}**` })
            setUser.saveUserFalse(username, powerValue, rank[2], server_id);
        }
        else if (powerValue > 6001 && powerValue <= 8000) {
            message.reply({ content: `>>> @${username} tu nivel de poder bajo en: **${powerValue}**` })
            setUser.saveUserFalse(username, powerValue, rank[3], server_id);
        }
        else if (powerValue > 8001 && powerValue <= 9500) {
            message.reply({ content: `>>> @${username} tu nivel de poder bajo en: **${powerValue}**` })
            setUser.saveUserFalse(username, powerValue, rank[4], server_id);
        }
        else if (powerValue > 9501 && powerValue <= 10000) {
            message.reply({ content: `>>> @${username} tu nivel de poder bajo en: **${powerValue}**` })
            setUser.saveUserFalse(username, powerValue, rank[5], server_id);
        }
    }
}
module.exports = { getCheat }