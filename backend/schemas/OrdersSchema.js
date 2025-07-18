const {Schema} = require('mongoose');

module.exports.OrdersSchema = new Schema({
    time : String,

    name : String,

    product : String,

    type : String,

    qty : Number,
    
    price: Number,

    status: String,

    avg: Number,
    
});
