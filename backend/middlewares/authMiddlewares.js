const User = require('../models/userModel');
require("dotenv").config();
const jwt = require("jsonwebtoken");

exports.userVerification = (req, res) => {
    const token = req.headers.authorization?.split(" ")[1];
    // const token = req.headers.authorization?.split(" ")[1];
    console.log("token: ", token);
    if(!token)  return res.json({status: false});

    jwt.verify(token, process.env.TOKEN_KEY, async (err, data) => {
        if(err){
            return res.json({status: false});
        }else{
            const user = await User.findById(data.id);
            if(user) return res.json({status: true, user: user});
            else return res.json({status: false});
        }
    });

}


exports.userVerificationUserId = async (req, res) => {

    if(req.socket.localPort === 3000){
        return;
    }

    const {userId: slug} = req.params;
    console.log("userId: ", slug);

    if(!slug)  return res.status(401).json({status: false});

    const user = await User.findOne({slug});

    if(!user) return res.status(403).json({status: false});

    res.status(200).json({status: true, user: user});

}