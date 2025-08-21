const { nanoid } = require('nanoid');
const User = require('../models/userModel');
const Wallet = require('../models/WalletModel');
const { createSecretToken } = require('../utils/SecretToken');
const bcrypt = require('bcrypt');

exports.signup = async (req, res, next) => {
    // await User.deleteMany({});  //just for temporary
    const { email, username, password, createdAt } = req.body;
    console.log(email, username);
    const existingUser = await User.findOne({email});
    if(existingUser){
        return res.status(409).json({ message : "User already exists"});
    }

    const slug = nanoid(12);
    const newUser = await User.create({email, password, username, slug, createdAt});
    const wallet = await Wallet.create({
        owner: newUser._id,
        availableBalance: 10000000.0,
        totalAmountSpent: 0.0,
        netProfitLoss: 0.0
    });

    console.log("wallet: ", wallet); 
    const token = createSecretToken(newUser._id);

    res.cookie("token", token, {
        withCredentials: true, 
        httpOnly: false,
    });


    res.status(201)
    .json({ message: "User signed in successfully", success: true, newUser });

    next();  
};

exports.login = async (req, res, next) => {
    const { email, password } = req.body;
    
    if( !email || !password){
        return res.status(400).json({message: 'All fields are required'});
    }

    const user = await User.findOne({email});
    if(!user){
        return res.status(401).json({message: 'Incorrect password or email' });
    }

    const auth = await bcrypt.compare(password, user.password);

    if(!auth){
        return res.status(401).json({message: 'Incorrect password or email'});
    }

    const token = createSecretToken(user._id);
    res.cookie("token", token , {
        withCredentials: true, 
        httpOnly: false,
    });

    res.status(200).json({ message: "User logged in successfully", success: true, 
        user: user },
    );

    console.log(user.username, "logged in.");
    next();
}