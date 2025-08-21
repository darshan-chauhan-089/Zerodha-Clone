const {Schema, default: mongoose} = require('mongoose');
const User = require('../models/userModel');

const walletSchema = new Schema({

    owner: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },

    availableBalance: Number, 

    totalAmountSpent : Number,

    netProfitLoss: Number, 
    // includes how much amount of money user get/loss according to all trades of user
                                             
    
});

module.exports = mongoose.model("Wallet", walletSchema);
