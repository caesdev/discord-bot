const User = require('../models/user');

const saveUser = (name, power) => {

    User.countDocuments({ name: name }, function (err, count) {
        if (count > 0) {
            User.updateOne({ name: name }, { power: power }, function () { });
        } else {
            User.create({ name: name, power: power });
        }
    });
}

module.exports = { saveUser };