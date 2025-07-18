const {Schema} = require('mongoose');

exports.WatchListSchema = new Schema({
    name: String,
    
    price: Number,
    
    percent: Number,
});