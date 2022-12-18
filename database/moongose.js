const mongoose = require('mongoose');
const User = require('../models/user');
require('dotenv').config();

const init = (name, power) => {
    const dbOptions = {
        userNewURLParser: true,
        useUnifiedTopology: true,
        autoIndex: false,
        poolSize: 5,
        connectTimeoutMS: 10000,
        family: 4,
        useFindAndModify: false
    };

    mongoose.set('strictQuery', false);
    mongoose.connect(`mongodb+srv://caesdev:${process.env.PASS}@cluster0.8lkkc60.mongodb.net/StareBot?retryWrites=true&w=majority`);
    mongoose.Promise = global.Promise;


    mongoose.connection.on('connected', () => {
    });

    mongoose.connection.on('disconnected', () => {
        console.log('disconnected to the database');
    });

    mongoose.connection.on('err', (err) => {
        console.log('error with connection' + err);
    });
}
module.exports = { init };