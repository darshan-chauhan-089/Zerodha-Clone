const {Schema} = require('mongoose');
const User = require('../models/userModel');
const Holding =  require('../models/HoldingsModel')
const Position = require('../models/PositionsModel')
module.exports.OrdersSchema = new Schema({

    owner: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },

    holding : {
        type: Schema.Types.ObjectId,
        ref: 'Holding'
    },

    position : {
        type: Schema.Types.ObjectId,
        ref: 'Position'
    },
    
    time : String,

    name : String,

    product : String,

    type : String,

    qty : Number,
    
    price: Number,

    status: String,

    avg: Number,
    
});
