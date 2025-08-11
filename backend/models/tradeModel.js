const {Schema, default: mongoose} = require('mongoose');
const User = require('../models/userModel');

const tradeSchema = new Schema({

    owner: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },

    tradeId: Number, 

    filltime : String,

    type : String,

    name : String,

    product : String,

    qty : Number,
    
    netProfitLoss: Number,
});

module.exports.TradeModel = mongoose.model("Trade", tradeSchema);