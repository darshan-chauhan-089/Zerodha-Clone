const router = require('express').Router({mergeParams: true});
const User = require('../models/userModel');

const {userVerificationUserId} = require('../middlewares/authMiddlewares');

const DashboardController = require("../controllers/DashboardController");
const { wrapAsync } = require('../utils/utils');

router
    .route('')
    .get(wrapAsync(userVerificationUserId))
    .delete(wrapAsync(DashboardController.deleteStock));

router.get('/profile', wrapAsync(DashboardController.getProfile));

router.get('/holdings', wrapAsync(DashboardController.showHoldings));

router.get('/watchlists', wrapAsync(DashboardController.showWatchlists));

router.get('/positions', wrapAsync(DashboardController.showPositions));

router.get('/trades', wrapAsync(DashboardController.showTrades));

router
    .route('/orders')
    .get(wrapAsync(DashboardController.showOrders))
    .post(wrapAsync(DashboardController.addStock));

module.exports = router;