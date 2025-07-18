const {model} = require('mongoose');
const { OrdersSchema } = require('../schemas/OrdersSchema');

exports.OrdersModel = new model("order", OrdersSchema);