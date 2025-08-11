const { model } = require('mongoose');

const {HoldingsSchema} = require('../schemas/HoldingsSchema');

module.exports.HoldingsModel= new model("Holding", HoldingsSchema);

