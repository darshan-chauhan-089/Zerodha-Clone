import React, {useState, useEffect, useRef} from 'react';
import "./Holdings.css";
import TableHead from './TableHead';
import Loader from './Loader';
import axios from 'axios';
import {getStockUpDown, search} from '../utilsFunc/utils';
import { useData } from '../context/DataContext';
// import EmptyYet from './EmptyYet';
import { EmptyYet, EmptyYetMsg } from './EmptyYetComponent';
import { useAuth } from '../context/AuthContext';
import ItemBuySellAction from './ItemBuySellAction';
import { DoughnutGraph } from './Graph';
import { options } from './Graph';

// let holdingsData; 

// export function getHoldingsItem(itemId) {
//     let i = 0;
//     while(i <= holdingsData.length){
//         if(holdingsData[i].id === itemId){
//             return holdingsData[i];
//         }
//         i++;
//     }
// }

function Holdings() {
    
    // const{data} = useData();
    // console.log("data in holdings ", data);
    
    const [hoverRow, setHoverRow] = useState(null);
    
    const {user} = useAuth();
    const {newOrder, recentlySellOrder} = useData();
    console.log("In Holdings newOrder: ", newOrder);
    const [data, setData] = useState([]);
    const holdings = useRef([]);
    console.log("In Holdings data: ", data);

    const [tdata, setTData] = useState([]);

    // sorting 
    const [sortConfig, setSortConfing] = useState({key: null, direction: null});

    useEffect(() => {
            axios.get(`${process.env.API_URL}/${user.id}/holdings`).then((res) => {
            if(res.data.holdings.length === 0){
                res.data.holdings = ["empty"];
                holdings.current = ["empty"];
            }
            // holdingsData = res.data.holdings;
            console.log("fetched holdingData: ", res.data);
            setData(res.data);
            setTData(res.data.holdings);
            holdings.current = res.data.holdings;
        });
    }, [newOrder, recentlySellOrder]);

    // headnames
    let headNames = ["Instruments", "Qty.", "Avg.cost", "LTP", "Cur. val", "P&L", "Net chg.", "Day chg."];
    let keyNames = ["name", "qty", "avg", "price", "currVal", "total_pl", "net", "day"];
    

    // Calculate the total data
    // const totalInvestment = holdings.reduce((sum, item) => sum + (item.avg * item.qty), 0);
    // const totalCurrentValue = holdings.reduce((sum, item) => sum + (item.currVal), 0);
    // const totalProfitLoss = totalInvestment - totalCurrentValue;
    // const dayTotalPL = holdings.reduce((res, item) => res + ((item.price - item.dayOpenPrice) * item.qty), 0);

    // dataForGraph
    let labels = holdings.current?.map((item) => item.name);

    const dataForGraph = {
        labels,
        datasets: [
            {
                label: 'Capital Allocation',
                data: holdings.current?.map((item) => item.price * item.qty),
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                ],
                borderWidth: 1,
            },
        ],
    };

    let options_1 = options;
    options_1.plugins.title = 'Holdings(₹) Pie Chart';

    const qtyDataForGraph = {
        labels,
        datasets: [
            {
                label: 'Qty.',
                data: holdings.current?.map((item) => item.qty),
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                ],
                borderWidth: 1,
            },
        ],
    };

    let options_2 = options;
    options_2.plugins.title = 'Holdings(Qty.) Pie Chart';


    return ( 
        <div className='holdings-container'>
            <div className='header d-flex justify-content-between border-bottom pb-4 pe-0 pe-sm-4'>
                <h2 className='fs-3 fs-md-4 fw-light mb-0 me-3 align-self-center'>Holdings ({data?.holdings?.[0] === "empty" ? "0" : data?.holdings?.length})</h2>
                {/* <h2 className='fs-3 fs-md-4 fw-light mb-0 me-3 align-self-center'>Holdings ({data.holdings[0] === "empty" ? "0" : data.holdings.length})</h2> */}
                <form class="d-flex" role="search">
                    <input id="search-input" class="form-control me-2" type="search" placeholder="Filter eg:TCS" aria-label="Search"
                    onChange={(event) => search(event, data?.holdings, setTData)}
                    disabled={(tdata.length === 0 || tdata[0] === "empty")}/>   
                </form>
            </div>
            <div className='total-stats d-flex flex-wrap justify-content-between py-4 pt-4 pb-3 px-2 border-bottom'>

                <div className='total-investment-wrapper mx-3 mb-3' >
                    <p className='title-smaller mb-1'>Total investment</p>
                    <p className='total-investment '>
                        {Math.floor(data?.holdingsTotalData?.totalInvestment).toLocaleString('en-US')}
                            <span className='total-franctional-part'>
                                {(data?.holdingsTotalData?.totalInvestment % 1).toFixed(2).toString().slice(1)}
                            </span>
                    </p>
                </div>

                <div className='total-investment-wrapper mx-3 mb-3' >
                    <p className='title-smaller mb-1'>Current Value</p>
                    <p className='total-investment '>
                        {Math.floor(data?.holdingsTotalData?.totalCurrentValue).toLocaleString('en-US')}
                            <span className='total-franctional-part'>
                                {(data?.holdingsTotalData?.totalCurrentValue % 1).toFixed(2).toString().slice(1)}
                            </span>
                    </p>
                </div>

                <div className='total-investment-wrapper mx-3 mb-3' >
                    <p className='title-smaller mb-1'>Day's P&L</p>
                    <p className={`total-investment ${getStockUpDown(data?.holdingsTotalData?.dayTotalPL)}`}>
                         {Math.floor(data?.holdingsTotalData?.dayTotalPL).toLocaleString('en-US')}
                            <span className='total-franctional-part'>
                                {(Math.floor(data?.holdingsTotalData?.dayTotalPL) % 1).toFixed(2).toString().slice(1)}
                            </span>
                    </p>
                </div>

                <div className='total-investment-wrapper mx-3 mb-3' >
                    <p className='title-smaller mb-1'>Total P&L</p>
                    <p className={`total-investment ${getStockUpDown(data?.holdingsTotalData?.totalProfitLoss)}`}>
                         {Math.floor(data?.holdingsTotalData?.totalProfitLoss).toLocaleString('en-US')}
                            <span className='total-franctional-part'>
                                {(Math.floor(data?.holdingsTotalData?.totalProfitLoss) % 1).toFixed(2).toString().slice(1)}
                            </span>
                    </p>
                </div>


            </div>
            <div className='table-container table-responsive position-relative mb-5 border-bottom pb-5'
             style={{width: '100%', minHeight: '300px'}}>
                <table class="table table-hover ">
                    <thead className='position-sticky top-0'>
                        <tr className='bg-white'>
                            {
                                headNames.map((name, index) => {
                                    return <TableHead classname={"title-smaller"} headName={name} keyName={keyNames[index]} 
                                    sortConfig={sortConfig} setSortConfing={setSortConfing} data={tdata} setData={setTData} >
                                    </TableHead>
                                })
                            }
                        </tr>
                    </thead>
                    {
                        data?.holdings?.[0] === "empty"
                        ? 
                        <EmptyYet /> : 
                        <tbody>
                            { 
                                tdata[0] === "searchEmpty" ? <EmptyYet /> : tdata.map((item, index) => {

                                    return( 
                                        <>
                                            <tr key={index} onMouseEnter={() => setHoverRow(index)} onMouseLeave={() => setHoverRow(null)}
                                                className='position-relative'>
                                                <td className='table-data'>{item.name}</td>
                                                <td className='table-data align-self-end'>{item.qty}</td>
                                                <td className='table-data align-self-end'>{item.avg.toFixed(2)}</td>
                                                <td className='table-data align-self-end'>{item.price.toFixed(2)}</td>
                                                <td className='table-data align-self-end'>{item.currVal.toFixed(2)}</td>
                                                <td className={`table-data align-self-end 
                                                    ${getStockUpDown(item.total_pl)}`}>
                                                        {item.total_pl.toFixed(2)}</td>
                                                <td className={`table-data align-self-end 
                                                    ${getStockUpDown(item.net)}`}>
                                                        {item.net.toFixed(2)}%</td>
                                                <td className={`table-data align-self-end 
                                                    ${getStockUpDown(item.day)}`}>
                                                        {item.day.toFixed(2)}%</td>
                                                <td className='table-data m-0 pt-2'
                                                style={{padding: "0px"}}>
                                                    {hoverRow === index && <ItemBuySellAction 
                                                    style={{left: "100px", top: "8px"}}  
                                                    itemName={item.name} itemId={item._id} origin={"holding"}/>}
                                                </td>
                                            </tr>
                                        </>
                                    )
                                })
                            }
                        </tbody>
                    }

                </table>
            </div>

            <div className='chart-container d-flex justify-content-evenly flex-wrap position-relative' >
                {
                    holdings.current.length === 0 ? 
                        <Loader></Loader> : holdings.current[0] === "empty" ?
                        <EmptyYetMsg msg={"No holdings yet. Purchase a stock to unlock the chart."}/> : 
                        <>
                            <div className='align-self-center mb-4'>
                                <p className='text-center text-muted'>Holdings(₹) Doughnut Chart</p>
                                {/* <DoughnutGraph data={dataForGraph} title={"Holdings(Qty.) Pie Chart"}/> */}
                                <DoughnutGraph data={dataForGraph}/>
                            </div>
                            <div className='vertical-border'></div>
                            <div>
                                <p className='text-center text-muted'>Holdings(Qty.) Doughnut Chart</p>
                                {/* <DoughnutGraph data={qtyDataForGraph} title={'Holdings(₹) Pie Chart'}/> */}
                                <DoughnutGraph data={qtyDataForGraph}/>
                            </div>
                        </>
                }
            </div>

        </div>
    );
}

export default Holdings;