const User = require("../models/userModel");
const Wallet = require("../models/WalletModel");
const {HoldingsModel} = require('../models/HoldingsModel');
const {WatchListModel} = require('../models/WatchListModel');
const {PositionsModel} = require('../models/PositionsModel');
const {OrdersModel} = require('../models/OrdersModel');
const { Schema, default: mongoose } = require("mongoose");
const { getCurrentFormattedTime } = require("../utils/utils");
const { TradeModel } = require("../models/tradeModel");


exports.getProfile = async (req, res) => {
    const {userId: slug} = req.params;
    const user = await User.findOne({slug: slug});
    res.status(200).json(user);
}


exports.showHoldings = async (req, res) => {
    const {userId: slug} = req.params;
    const user = await User.findOne({slug: slug});
    const holdings = await HoldingsModel.find({owner: user._id});

    const totalInvestment = holdings.reduce((sum, item) => sum + (item.avg * item.qty), 0);
    const totalCurrentValue = holdings.reduce((sum, item) => sum + (item.currVal), 0);
    const totalProfitLoss = totalInvestment - totalCurrentValue;
    const dayTotalPL = holdings.reduce((res, item) => res + ((item.price - item.dayOpenPrice) * item.qty), 0);

    let allHoldingsData = {
        holdingsTotalData: {
            totalInvestment: totalInvestment,
            totalCurrentValue: totalCurrentValue,
            totalProfitLoss: totalProfitLoss,
            dayTotalPL: dayTotalPL
        },
        holdings: holdings
    }
    res.status(200).json(allHoldingsData);
}


exports.showWatchlists = async (req, res) => {
    res.status(200).json(await WatchListModel.find({}));
}

exports.getWallet = async (req, res) => {
    const {userId: slug} = req.params;
    const user = await User.findOne({slug: slug});
    res.status(200).json(await Wallet.findOne({owner: user._id}));
}
exports.showPositions = async (req, res) => {
    const {userId: slug} = req.params;
    const user = await User.findOne({slug: slug});
    res.status(200).json(await PositionsModel.find({owner: user._id}));
}

exports.showOrders = async (req, res) => {
    const {userId: slug} = req.params;
    const user = await User.findOne({slug: slug});
    res.status(200).json(await OrdersModel.find({owner: user._id}));
}

exports.showTrades = async (req, res) => {
    const {userId: slug} = req.params;
    const user = await User.findOne({slug: slug});
    res.status(200).json(await TradeModel.find({owner: user._id}));
}

exports.addStock = async (req, res) => {
    

    let stock = req.body;
    const {userId : slug} = req.params;
    const {_id} = await User.findOne({slug: slug}); 
    
    let avg = stock.price * stock.qty / stock.qty;
    let total_pl = (stock.price - avg) * stock.qty; // the stock.price -> stock.currPrice from market
    let pnl = (stock.price - stock.dayOpenPrice) * stock.qty;

    // wallet updation
    const wallet = await Wallet.findOne({owner: _id});
    let totalAmountSpent = stock.price * stock.qty;
    wallet.totalAmountSpent += totalAmountSpent;
    wallet.availableBalance -= totalAmountSpent;
    const walletRes = await Wallet.findByIdAndUpdate(wallet._id, {...wallet});
    console.log("walletRes: ", walletRes);

    let date = stock.date;
    console.log("date: ", date);

    let status = "open"; // "cancelled" or "rejected" after sell


    const holding = new HoldingsModel({
        owner: _id,

        qty: stock.qty,

        avg: avg,

        currVal: stock.price, // may be change according to market like currPrice

        total_pl: total_pl, // add something that change

        day: stock.percent,

        net: (stock.price - avg)/avg * 100, // change to currPrice

        name: stock.name,

        price: stock.price,

        dayOpenPrice: stock.dayOpenPrice,
    })

    const position = new PositionsModel({

        owner: _id,

        product : stock.product,

        name : stock.name,
        
        qty : stock.qty,
        
        avg: avg,
        
        ltp: stock.price, // currPrice

        pnl: pnl,   // used currPrice
        
        chg: stock.percent,
    });
    
    const savedHolding = await holding.save();
    const savedPosition = await position.save();

    const order = new OrdersModel({

        owner: _id,

        holding: holding._id,

        position: position._id,

        time : getCurrentFormattedTime(date), // maybe changed to date format

        name : stock.name,

        product : stock.product,

        type : "Buy",

        qty : stock.qty,
        
        price: stock.price,

        status: status,

        avg: avg,
    });


    const savedOrder = await order.save();
    console.log("orderData: ", savedOrder)
    
    res.status(200).json({message: "Successfully added."});
}

exports.deleteStock = async (req, res) => {
    let ids = req.body;
    
    await HoldingsModel.deleteOne({ _id: new mongoose.Types.ObjectId(ids.holding) });
    await PositionsModel.deleteOne({ _id: new mongoose.Types.ObjectId(ids.position) });
    const order = await OrdersModel.findById(ids.id);
    order.status = "complete";
    await OrdersModel.findByIdAndUpdate(order._id, {...order});

    const wallet = await Wallet.findOne({owner: order.owner});
    wallet.availableBalance = wallet.availableBalance + ids.totalCreditedAmount;
    wallet.totalAmountSpent = wallet.totalAmountSpent - order.qty*order.price;
    wallet.netProfitLoss = wallet.netProfitLoss + ids.netPrice; // loss have (-) valus so it's solved with this equation
    const walletRes = await Wallet.findByIdAndUpdate(wallet._id, {...wallet});
    console.log("walletRes: ", walletRes);

    const trade = new TradeModel({
        owner: order.owner,
        
        tradeId: Math.floor(Math.random()*100000000), 
    
        filltime : getCurrentFormattedTime(),
    
        type : order.type,
    
        name : order.name,
    
        product : order.product,
    
        qty : order.qty,
        
        netProfitLoss: ids.netPrice,

        priceOfBuy: order.qty * order.price,
    });

    const savedTrade = await trade.save();

    res.status(200).json({message: "Successfully deleted order, holding and position. "});
}