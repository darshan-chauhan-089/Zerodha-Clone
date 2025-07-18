const {Schema} = require('mongoose');

module.exports.PositionsSchema = new Schema({
    product : String,

    name : String,
    
    qty : Number,
    
    avg: Number,
    
    ltp: Number,

    pnl: Number,
    
    chg: Number,
    
});
