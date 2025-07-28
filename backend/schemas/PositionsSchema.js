const {Schema} = require('mongoose');

module.exports.PositionsSchema = new Schema({

    owner: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },

    product : String,

    name : String,
    
    qty : Number,
    
    avg: Number,
    
    ltp: Number,

    pnl: Number,
    
    chg: Number,
    
});
