// setup application
const express = require("express");
const app = express();

// dotenv setup
require('dotenv').config();
const PORT = process.env.PORT || 3001;
// const uri = process.env.MONGODB_ATLAS_URL;

// Models
// const {HoldingsModel} = require('./models/HoldingsModel');

// 
const bodyParser= require('body-parser');
const cors = require('cors');

//mongoose connection
// const mongoose = require("mongoose");


// main().then(() => {
//     console.log("Connected to db. ");
// }).catch((err) => {
//     console.log(err);
// });

// async function main() {
//     await mongoose.connect("mongodb+srv://darshan-user-1:darshan-user-1@zerodha-colne-cluster.y09romy.mongodb.net/zerodha?retryWrites=true&w=majority&appName=Zerodha-Colne-Cluster");
// }

let {holdings} = require('./data');
let {watchList} = require('../../dashboard/src/data/data');

app.use(bodyParser.json());
app.use(cors());

const editData = () => {
    // holdings.forEach((item) => {
    //     const currVal = (item.qty * item.price); 
    //     const total_pl = currVal - item.avg * item.qty;  // Total profit and Loss
    //     item.currVal = currVal;
    //     item.total_pl = total_pl;
    // });
    watchList.forEach((item) => {
        item.percent = item.percent.replace("%", '');
        item.percent = parseFloat(item.percent.slice());
        delete item["isDown"];
    });
}

app.get("/" , (req, res) => {
    editData();
    console.log(watchList);
    res.send(watchList);
});

app.listen(8080, () => {
    console.log("Server is listings on port 8080. ");
});