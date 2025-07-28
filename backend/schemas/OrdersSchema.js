const {Schema} = require('mongoose');
const User = require('../models/userModel');
module.exports.OrdersSchema = new Schema({

    owner: {
        type: Schema.Types.ObjectId,
        ref: 'User'
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
