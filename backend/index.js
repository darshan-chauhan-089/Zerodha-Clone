// setup application
const express = require("express");
const app = express();

const cookieParser = require('cookie-parser');

// dotenv setup
require('dotenv').config();
const PORT = process.env.PORT || 3001;
const uri = process.env.MONGODB_ATLAS_URL;

// routes
const authRoute = require('./routes/authRoute');


// Models
const {HoldingsModel} = require('./models/HoldingsModel');
const {WatchListModel} = require('./models/WatchListModel');
const {PositionsModel} = require('./models/PositionsModel');
const {OrdersModel} = require('./models/OrdersModel');
const User = require('./models/userModel');

// 
const bodyParser= require('body-parser');
const cors = require('cors');

//mongoose connection
const mongoose = require("mongoose");

mongoose.connect(uri, {
    useNewUrlParser: true, 
    useUnifiedTopology: true,  
})
.then(() => console.log("MongoDB is connected successfully."))
.catch((err) => console.error(err));

//require data
// const {holdings, watchList, positions, orders} = require('../dashboard/src/data/data');
// const initData = async ()  => {
//     // await OrdersModel.deleteMany({});
//     // orders.forEach((item) => {
//     //     let newOrder = new OrdersModel({
//     //         time : item.time,

//     //         name : item.name,

//     //         product : item.product,

//     //         type : item.type,

//     //         qty : item.qty,
            
//     //         price: item.price,

//     //         status: item.status,

//     //         avg: item.avg,
//     //     });
//     //     newOrder.save();
//     // });
//     // console.log(await OrdersModel.find({}));
//     // await PositionsModel.deleteMany({});
//     // positions.forEach((item) => {
//     //     let newPosition = new PositionsModel({
//     //         product : item.product,

//     //         name : item.instrument,
            
//     //         qty : item.qty,
            
//     //         avg: item.avg,
            
//     //         ltp: item.ltp,

//     //         pnl: item.pnl,
            
//     //         chg: item.chg,
//     //     });
//     //     newPosition.save();
//     // });
//     // console.log(await PositionsModel.find({}));
//     // await WatchListModel.deleteMany({});
//     // watchList.forEach((item) => {
//     //     let newWatchList = new WatchListModel({
//     //         name : item.name,
    
//     //         price: item.price,

//     //         percent: item.percent
//     //     });
//     //     newWatchList.save();
//     // });

//     // console.log(await WatchListModel.find({}));
//     // await HoldingsModel.deleteMany({});
//     // console.log(await WatchListModel.find({}));
//     // await HoldingsModel.deleteMany({});
//     // holdings.forEach((item) => {
//     //     let newHoldings = new HoldingsModel({
//     //         name : item.name,
    
//     //         qty : item.qty,
            
//     //         avg: item.avg,
            
//     //         price: item.price,

//     //         dayOpenPrice: item.dayOpenPrice,
            
//     //         net: item.net,
            
//     //         day: item.day,
            
//     //         currVal: item.currVal,

//     //         total_pl: item.total_pl,
//     //     });
//     //     newHoldings.save();
//     // });
//     // console.log(await HoldingsModel.find({}));
// }

app.listen(PORT, () => {
    console.log(` \nServer is listings on port ${PORT}. `);
});

app.use(
    cors({
        origin: ["http://localhost:3000", "http://localhost:3001"],
        methods: ["GET", "POST", "PUT", "DELETE"],
        credentials: true,
    })
);

app.use(cookieParser());

app.use(express.json());

app.use("/", authRoute);
    
app.get('/holdings', async (req, res) => {
    res.json(await HoldingsModel.find({}));
});

app.get('/watchlists', async (req, res) => {
    res.json(await WatchListModel.find({}));
});

app.get('/positions', async (req, res) => {
    res.json(await PositionsModel.find({}));
});

app.get('/orders', async (req, res) => {
    res.json(await OrdersModel.find({}));
});

app.get('/example', async (req, res) => {
    res.cookie("name", "nope");
    res.cookie("name", "nope");
    res.cookie("name", "nope");
    res.cookie("name", "nope");
    res.send(req.headers);
});

app.get("/" , async (req, res) => {
    // initData();
    // await User.deleteMany({});

    
    res.send("complete!");
});

