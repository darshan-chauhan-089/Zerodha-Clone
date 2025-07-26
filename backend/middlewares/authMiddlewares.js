const User = require('../models/userModel');
require("dotenv").config();
const jwt = require("jsonwebtoken");

exports.userVerificationPost = (req, res) => {
    const token = req.cookies.token;
    console.log(token);
    if(!token)  return res.json({status: false});

    jwt.verify(token, process.env.TOKEN_KEY, async (err, data) => {
        if(err){
            return res.json({status: false});
        }else{
            const user = await User.findById(data.id);
            if(user) return res.json({status: true, user: user.username});
            else return res.json({status: false});
        }
    });

}

exports.userVerificationGet = (req, res) => {
    const token = req.headers.authorization?.split(" ")[1];
    console.log(token);

    if(!token)  return res.json({status: false});

    jwt.verify(token, process.env.TOKEN_KEY, async (err, data) => {
        if(err){
            return res.json({status: false});
        }else{
            const user = await User.findById(data.id);
            if(user) return res.json({status: true, username: user.username});
            else return res.json({status: false});
        }
    });
}