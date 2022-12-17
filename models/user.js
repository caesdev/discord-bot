const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let userSchema = new Schema({
    name: String,
    power: Number
});

module.exports = mongoose.model('users', userSchema);