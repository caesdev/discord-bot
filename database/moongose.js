const mongoose = require('mongoose');
var moment = require('moment');
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
        console.log('connected to database at'.green, moment().format('h:mm:ss a'));
    });

    mongoose.connection.on('disconnected', () => {
        console.log('disconnected to database at'.red, moment().format('h:mm:ss a'));
    });

    mongoose.connection.on('err', (err) => {
        console.log('error with connection at'.red + err, moment().format('h:mm:ss a'));
    });
}
module.exports = { init };