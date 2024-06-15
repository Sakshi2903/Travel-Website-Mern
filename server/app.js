const dotenv = require('dotenv');
const mongoose = require('mongoose');
const express = require('express');
const app = express();

dotenv.config({path: './config.env'});

//backend connection
const DB = process.env.DATABASE;

mongoose.connect(DB).then(() => {
    console.log(`Connection Success!`);
}).catch((err) => {
    console.log(`no connection`);
});

//Middleware
const middleware = (req, res, next) => {
    console.log(`hello middleware`);
};

middleware();

app.get('/', (req, res) => {
    res.send("Hello world from home");
});

app.get('/about', middleware, (req, res) => {
    res.send("Hello world from about");
});

app.get('/contact', (req, res) => {
    res.send("Hello world from contact");
});

app.get('/signin', (req, res) => {
    res.send("Hello world from login");
});

app.get('/signup', (req, res) => {
    res.send("Hello world from register");
});

app.listen(3000, () => {
    console.log(`server is running on port 3000`);
});