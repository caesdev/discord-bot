const mongoose = require('mongoose');
var moment = require('moment');
require('dotenv').config();

const init = () => {
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
        console.log('[SUCCESS]: CONNECTED TO DATABASE'.green, moment().format('h:mm:ss a'));
    });

    mongoose.connection.on('disconnected', () => {
        console.log('[SUCCESS]: DISCONNECTED TO DATABASE'.red, moment().format('h:mm:ss a'));
    });

    mongoose.connection.on('err', (err) => {
        console.log('[ERROR]:'.red + err, moment().format('h:mm:ss a'));
    });
}
module.exports = { init };