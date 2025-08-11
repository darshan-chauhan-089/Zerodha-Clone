const {model} = require('mongoose');
const { WatchListSchema } = require('../schemas/WatchListSchema');

module.exports.WatchListModel = new model("Watchlist", WatchListSchema);