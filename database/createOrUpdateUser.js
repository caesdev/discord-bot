const User = require('../models/user');

function saveUser(name, power, rank, server_id) {
    User.countDocuments({ name: name, server: server_id }, function (err, count) {
        if (count > 0) {
            User.updateOne({ name: name, server: server_id }, { power: power, rank: rank }, function () { });
        } else { User.create({ name: name, power: power, rank: rank, server: server_id }); }
    });
}

module.exports = { saveUser };