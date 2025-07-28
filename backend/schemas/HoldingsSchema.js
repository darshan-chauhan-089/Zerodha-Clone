const {Schema} = require('mongoose');
module.exports.HoldingsSchema = new Schema({
    owner : {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },

    name : String,
    
    qty : Number,
    
    avg: Number,
    
    price: Number,

    dayOpenPrice: Number,
    
    net: Number,
    
    day: Number,

    currVal: Number,

    total_pl: Number,
});
