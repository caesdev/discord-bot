require('dotenv').config();
const User = require('../models/user');

function getTop(message, client) {
    User.find({}).sort({ power: 'desc' }).select({ '__v': 0 }).limit(10).exec(function (err, users) {
        users.map(function (element, index) {
            data = (`>>> **Top ${index + 1}**. ${element.name} ${element.power}`);
            client.channels.cache.get(process.env.CHANNEL_ID).send(
                data
            );
        });
    });
}
module.exports = { getTop }