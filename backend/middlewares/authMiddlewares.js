const User = require('../models/userModel');
require("dotenv").config();
const jwt = require("jsonwebtoken");

exports.userVerification = (req, res) => {
    const token = req.headers.authorization?.split(" ")[1];
    // const token = req.headers.authorization?.split(" ")[1];
    console.log("token: ", token);
    if(!token)  return res.status(401).json({status: false, message: "Token missing or invalid format"});

    jwt.verify(token, process.env.TOKEN_KEY, async (err, data) => {
        if(err){
            return res.status(401).json({status: false, message: "Invalid or expired token"});
        }else{
            const user = await User.findById(data.id);
            delete user.password;
            if(user) return res.status(200).json({status: true, user: user});
            else return res.status(401).json({status: false, message: "User not found"});
        }
    });

}


exports.userVerificationUserId = async (req, res) => {

    if(req.socket.localPort === 3000){
        return;
    }

    const {userId: slug} = req.params;
    console.log("userId: ", slug);

    if(!slug)  return res.status(401).json({status: false, message: "Invalid user"});

    const user = await User.findOne({slug});

    if(!user) return res.status(403).json({status: false, message: "Invalid user"});

    res.status(200).json({status: true, user: user});

}