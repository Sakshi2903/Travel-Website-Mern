const dotenv = require('dotenv');
const mongoose = require('mongoose');
const express = require('express');
const app = express();

dotenv.config({path: './config.env'});

//backend connection
require('./db/conn');


const PORT = process.env.PORT;

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

app.listen(PORT, () => {
    console.log(`server is running on port PORT`);
});