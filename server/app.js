const dotenv = require('dotenv');
const mongoose = require('mongoose');
const express = require('express');
const cookieParser = require("cookie-parser");


const app = express();
app.use(cookieParser())

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


app.listen(PORT, () => {
    console.log(`server is running on port`,PORT);
});