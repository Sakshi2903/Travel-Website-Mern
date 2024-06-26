const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

require('../db/conn');
const User = require("../model/userSchema");

router.get('/', (req, res) => {
    res.send("Hello world from home router js");
});

// registration using async await 
router.post('/register',  async (req, res) => {
    const {name, email, phone, work, password, cpassword} = req.body;
    
    if( !name || !email || !phone || !work || !password || !cpassword)
    {
        return res.status(422).json({error:"all fields are mandatory!"});
    }

    try{
        const userExist = await User.findOne({email:email});
        
        if(userExist) {
            return res.status(422).json({error:"Email already exists"});
        }else if(password != cpassword){
            return res.status(422).json({error:"Password doesn't match"});
        }
        else{
            const user = new User({name, email, phone, work, password, cpassword});
            // hashing pswd and storing so doesn't gets lost
            await user.save();

            res.status(201).json({message: "User registered successfully!"});
        }
    }
    catch(err){
        console.log(err);
    }

});

// login using async await 
router.post('/login',  async (req, res) => {
    try{
        let token;

        const {email, password} = req.body;
    
        if( !email || !password )
        {
            return res.status(422).json({error:"all fields are mandatory!"});
        }

        const userLogin = await User.findOne({email:email});

        if(!userLogin)
            {
                    return res.status(400).json({ error: "Please registered first" });
            }

        const isMatch = await bcrypt.compare(password, userLogin.password);
        
        token = await userLogin.generateAuthToken();
        console.log(token);

        res.cookie("jwtoken", token, {
            // after 30 days it expires (time in ms)
            expires: new Date(Date.now() + 25892000000),      
            httpOnly: true
        });

        if(isMatch) {
            res.status(201).json({message: "User Logged in successfully!"});
        }
        else
        {
            res.status(500).json({error: "Incorrect email/password"});
        }
    }
    catch(err){
        console.log(err);
    }

});

module.exports = router;