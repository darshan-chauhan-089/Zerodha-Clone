const router = require('express').Router({mergeParams: true});
const {HoldingsModel} = require('../models/HoldingsModel');
const {WatchListModel} = require('../models/WatchListModel');
const {PositionsModel} = require('../models/PositionsModel');
const {OrdersModel} = require('../models/OrdersModel');

const {userVerificationUserId} = require('../middlewares/authMiddlewares');

router.get('', userVerificationUserId);

router.get('/holdings', async (req, res) => {
    
    const holdings = await HoldingsModel.find({});

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
    res.json(allHoldingsData);
});

router.get('/watchlists', async (req, res) => {
    res.json(await WatchListModel.find({}));
});

router.get('/positions', async (req, res) => {
    res.json(await PositionsModel.find({}));
});

router.get('/orders', async (req, res) => {
    res.json(await OrdersModel.find({}));
});

module.exports = router;