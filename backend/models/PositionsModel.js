const {model} = require('mongoose');
const {PositionsSchema} = require('../schemas/PositionsSchema');

module.exports.PositionsModel = new model('position', PositionsSchema);