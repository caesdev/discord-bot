const User = require('../models/user');

function saveUserTrue(name, power, rank, server_id) {
    User.countDocuments({ name: name, server: server_id }, function (err, count) {
        if (count > 0) {
            User.find({ name: name, server: server_id }).exec((err, user) => {
                user.map((element) => {
                    new_power = element.power;
                    sum_power = (power + new_power);
                    User.updateOne({ name: name, server: server_id }, { power: sum_power, rank: rank }, function () { });
                })
            })
        } else { User.create({ name: name, power: power, rank: rank, server: server_id }); }
    });
}

function saveUserFalse(name, power, rank, server_id) {
    User.countDocuments({ name: name, server: server_id }, function (err, count) {
        if (count > 0) {
            User.find({ name: name, server: server_id }).exec((err, user) => {
                user.map((element) => {
                    new_power = element.power;
                    rest_power = (new_power - power);
                    User.updateOne({ name: name, server: server_id }, { power: rest_power, rank: rank }, function () { });
                })
            })
        } else { User.create({ name: name, power: power, rank: rank, server: server_id }); }
    });
}

module.exports = { saveUserTrue, saveUserFalse };