const User = require('../models/user');

function getTop(message) {
    User.find({}).sort({ power: 'desc' }).select({ '__v': 0 }).limit(5).exec(function (err, users) {
        users.map(function (element, index) {
            data = (`Top ${index + 1}. ${element.name} ${element.power}`);
            message.channel.send(
                data
            );
        });
    });
}

function getBottom(message) {
    User.find({}).sort({ power: 'asc' }).select({ '__v': 0 }).limit(5).exec(function (err, users) {
        users.map(function (element, index) {
            data = (`Bottom ${index + 1}. ${element.name} ${element.power}`);
            message.channel.send(
                data
            );
        });
    });
}

module.exports = { getTop, getBottom }