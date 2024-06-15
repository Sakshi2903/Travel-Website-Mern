const dotenv = require('dotenv');
const mongoose = require('mongoose');
const express = require('express');
const app = express();

dotenv.config({path: './config.env'});

//backend connection
require('./db/conn');
// const User = require('./model/userSchema');

//so that application understands json
//middleware
// this position is fixed for this
// if written somewhere else doesn't works
app.use(express.json());

// we link the router files to make our route easy
// middleware
app.use(require('./router/auth'));

const PORT = process.env.PORT;

//Middleware
const middleware = (req, res, next) => {
    console.log(`hello middleware`);
};

middleware();

app.get('/', (req, res) => {
    res.send("Hello world from home app.js");
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

app.listen(PORT, () => {
    console.log(`server is running on port PORT`);
});