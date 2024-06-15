const mongoose = require('mongoose');

//backend connection
const DB = process.env.DATABASE;

mongoose.connect(DB).then(() => {
    console.log(`Connection Success!`);
}).catch((err) => {
    console.log(`no connection`);
});