const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const authenticate = require("../middleware/authenticate");



require('../db/conn');
const User = require("../model/userSchema");

router.get('/', (req, res) => {
    res.send("Hello world from home router js");
});

// registration using async await 
router.post('/register',  async (req, res) => {
    const {name, email, phone, work, password, cpassword} = req.body;

    try{
        const userExist = await User.findOne({email:email});
        
        if(userExist) {
            return res.status(422).json("user Already exists!");
        }
            const user = new User({name, email, phone, work, password, cpassword});
            // hashing pswd and storing so doesn't gets lost
            await user.save();

            res.status(201).json(201);
    }
    catch(err){
        console.log(err);
    }

});

// login using async await 
router.post('/signin',  async (req, res) => {
    try{
        let token;

        const {email, password} = req.body;
        const userLogin = await User.findOne({email:email});

        if(!userLogin)
            {
                    return res.status(400).json(400);
            }

        const isMatch = await bcrypt.compare(password, userLogin.password);
        
        token = await userLogin.generateAuthToken();
        console.log(token);

        res.cookie("jwtoken", token, {
            // after 30 days it expires (time in ms)
            expires: new Date(Date.now() + 60000),      
            httpOnly: true
        });

        if(isMatch) {
            res.status(201).json(201);
        }
        else
        {
            res.status(402).json(402);
        }
    }
    catch(err){
        console.log(err);
    }

});

//about page
router.get('/profiles', authenticate, (req, res) => {
    res.send(req.rootUser);
    router.use(cookieParser())
});

module.exports = router;