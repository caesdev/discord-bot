const User = require('../models/user');

function saveUser(name, power, server_id) {
    User.countDocuments({ name: name, server: server_id }, function (err, count) {
        if (count > 0) {
            User.updateOne({ name: name, server: server_id }, { power: power }, function () { });
        } else { User.create({ name: name, power: power, server: server_id }); }
    });
}

module.exports = { saveUser };