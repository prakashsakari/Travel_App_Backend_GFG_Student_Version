const CryptoJS = require('crypto-js');

const User = require("../model/user.model");

const singupHandler = async (req, res) => {
    try{
        const newUser = new User({
            username: req.body.username,
            number: req.body.number,
            email: req.body.email,
            password: CryptoJS.AES.encrypt(req.body.password, process.env.PASSWORD_SECRET_KEY).toString()
        });
        const savedUser = await newUser.save();
        res.status(201).json(savedUser);
    }catch(err){
        console.log(err);
        res.status(500).json({ message: "Error creating a user" })
    }
}

module.exports = singupHandler;