const mongoose = require('mongoose');
const bot = require("./src/domain/telegraf_bot/TelegrafBot");
const mongoose = require('mongoose');

const connectionString = process.env.MONGO_CONNECTION_STRING;
mongoose.connect(connectionString, connectionOptions).then(() => {
    console.log("connect mongo success!");
    adminController.reloadAdmin().then((msg)=>console.log(msg));
}).catch((msg) => {console.log("connect mongo fail! " + msg)});
mongoose.Promise = global.Promise;
