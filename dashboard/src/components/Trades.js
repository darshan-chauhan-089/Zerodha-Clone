import React, {useState, useEffect, useRef} from 'react';
// import { trades } from '../data/data';
import TableHead from './TableHead';
import axios from 'axios';
import {getStockUpDown, search} from '../utilsFunc/utils';
import Loader from './Loader';
import { useAuth } from '../context/AuthContext';
import { EmptyYet, EmptyYetMsg } from './EmptyYetComponent';
import { useData } from '../context/DataContext';
import ItemBuySellAction from './ItemBuySellAction';
import { VerticalGraph } from './Graph';
import { backdropClasses } from '@mui/material';

// let tradesData; 

// export function gettradesItem(itemId) {
//     let i = 0;
//     while(i <= tradesData.length){
//         if(tradesData[i].id === itemId){
//             return tradesData[i];
//         }
//         i++;
//     }
// }

function Trades() {

    const [hoverRow, setHoverRow] = useState(null);
    
    const {user} = useAuth();
    const {newOrder, recentlySellOrder, setNewOrderrecentlySellOrder} = useData();
    const trades = useRef([]);
    const [tdata, setTData] = useState([]);

    // sorting 
    const [sortConfig, setSortConfing] = useState({key: null, direction: null});

    useEffect(() => {
        // console.log("in trades: ", newOrder);
        setTimeout(() => {
            axios.get(`${process.env.REACT_APP_API_URL}/${user.id}/trades`).then((res) => {
                if(res.data.length === 0){
                    trades.current = ["empty"];
                    setTData(["empty"]);
                    return;
                }
                trades.current = res.data;
                console.log("Trades Data", trades.current);
                setTData(res.data);
            });
        }, 500);
    }, [recentlySellOrder]);

    // headnames    
    let headNames = ["Trade ID", "Fill time", "Type", "instrument", "Product", "Qty.", "Net P/L"];
    let keyNames = ["tradeId", "filltime", "type", "name", "product", "qty", "netProfitLoss"];

    // getProductStyle
    const getProductStyle = (product) => {
        const refObj = {
            CNC: "bg-danger-subtle text-danger",
            MIS: "bg-body-secondary text-secondary",
            NRML: "bg-light-subtle text-dark",
            BUY: "bg-primary-subtle text-primary",
            SELL: "bg-danger-subtle text-danger",
        }
        return refObj[product];
    }
    
    
            {/* export const data = {
            labels,
            datasets: [
                {
                label: 'Dataset 1',
                data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
                },
                {
                label: 'Dataset 2',
                data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
                backgroundColor: 'rgba(53, 162, 235, 0.5)',
                },
            ],
            }; */}

        let labels = trades.current?.map((item) => item.name);
        const dataForGraph = {
            labels,
            datasets: [
                {
                    label: 'Buying Amount',
                    data: trades.current?.map((item) => item.priceOfBuy),
                    backgroundColor: 'rgba(13,110,253, 0.5)',
                },
                {
                    label: 'Selling Amount',
                    data: trades.current?.map((item) => item.priceOfBuy + item.netProfitLoss),
                    backgroundColor: 'rgba(220, 53, 69, 0.5)',
                }
            ]
        }

    return ( 
        <div className='trades-container' >
            <div className='header d-flex justify-content-between border-bottom pb-4 pe-0 pe-sm-4 mb-5'>
                <h2 className='fs-3 fs-md-4 fw-light mb-0 me-3 align-self-center'>Trades ({trades.current[0] === "empty" ? "0" : trades.current.length})</h2>
                <form class="d-flex" role="search">
                    <input id="search-input" class="form-control me-2" type="search" placeholder="Filter eg:INFY" aria-label="Search"
                    onChange={(event) => search(event, trades.current, setTData)}
                    disabled={(tdata.length === 0 || tdata[0] === "empty")}/>   
                </form>
            </div>
            <div className='table-container table-responsive mb-5 position-relative border-bottom' style={{width: '100%', minHeight: '200px'}}>
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
                        trades.current.length === 0 
                        ? 
                            <Loader></Loader> : trades.current[0] === "empty" ? <EmptyYet /> : 
                        <tbody>
                            { 
                                tdata[0] === "searchEmpty" ? <EmptyYet /> : tdata.map((item, index) => {
                                    return( <tr key={index} onMouseEnter={() => setHoverRow(index)} onMouseLeave={() => setHoverRow(null)}
                                        className='position-relative'>
                                        <td className='table-data'>{item.tradeId}</td> 
                                        <td className='table-data'>{item.filltime}</td> 
                                        <td className={`table-data`}>
                                            <span className={`px-3 py-1 rounded-1 ${getProductStyle(item.type.toUpperCase())}`}>
                                                {item.type.toUpperCase()}
                                            </span>
                                        </td>
                                        <td className='table-data'>{item.name}</td> 
                                        <td className={`table-data`}>
                                            <span className={`px-3 py-1 rounded-1 ${getProductStyle(item.product)}`}>
                                                {item.product}
                                            </span>
                                        </td>
                                        <td className='table-data align-self-end'>{item.qty}</td>
                                        <td className={`table-data align-self-end ${getStockUpDown(item.netProfitLoss)}`}>
                                            {item.netProfitLoss === 0 || item.netProfitLoss < 0 ? item.netProfitLoss : `+${item.netProfitLoss}`}
                                        </td>
                                    </tr>)
                                })
                            }
                        </tbody>
                    }

                </table>
            </div>

            
            <div className='chart-container pt-5 position-relative'>
            {
                
                trades.current.length === 0 ? 
                    <Loader></Loader> : trades.current[0] === "empty" ?
                    <EmptyYetMsg msg={"No trades yet. Make a trade(sell) to view this chart."}/> : 
                            
                    <VerticalGraph data={dataForGraph}/>
                }
            </div>
        </div>
    );
}

export default Trades;