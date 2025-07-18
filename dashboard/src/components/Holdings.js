import React, {useState, useEffect, useRef} from 'react';
import { totalInvestment, totalCurrentValue, totalProfitLoss } from '../data/data';
import "./Holdings.css";
import TableHead from './TableHead';
import Loader from './Loader';
import axios from 'axios';
import {getStockUpDown, search} from '../utilsFunc/utils';

function Holdings() {

    const holdings = useRef([]);
    const [tdata, setTData] = useState([]);

    // sorting 
    const [sortConfig, setSortConfing] = useState({key: null, direction: null});

    useEffect(() => {
        setTimeout(() => {
            axios.get("http://localhost:8080/holdings").then((res) => {
            holdings.current = res.data;
            setTData(res.data);
        });
        }, 500);
    }, []);

    // headnames
    let headNames = ["Instruments", "Qty.", "Avg.cost", "LTP", "Cur. val", "P&L", "Net chg.", "Day chg."];
    let keyNames = ["name", "qty", "avg", "price", "currVal", "total_pl", "net", "day"];
    

    // Calculate the total data
    const totalInvestment = holdings.current.reduce((sum, item) => sum + (item.avg * item.qty), 0);
    const totalCurrentValue = holdings.current.reduce((sum, item) => sum + (item.currVal), 0);
    const totalProfitLoss = totalInvestment - totalCurrentValue;
    const dayTotalPL = holdings.current.reduce((res, item) => res + ((item.price - item.dayOpenPrice) * item.qty), 0);

    return ( 
        <div className='holdings-container'>
            <div className='header d-flex justify-content-between border-bottom pb-4 pe-0 pe-sm-4'>
                <h2 className='fs-3 fs-md-4 fw-light mb-0 me-3 align-self-center'>Holdings ({holdings.current.length})</h2>
                <form class="d-flex" role="search">
                    <input id="search-input" class="form-control me-2" type="search" placeholder="Filter eg:TCS" aria-label="Search"
                    onChange={(event) => search(event, holdings.current, setTData)}/>   
                </form>
            </div>
            <div className='total-stats d-flex flex-wrap justify-content-between py-4 pt-4 pb-3 px-2 border-bottom'>

                <div className='total-investment-wrapper mx-3 mb-3' >
                    <p className='title-smaller mb-1'>Total investment</p>
                    <p className='total-investment '>
                        {Math.floor(totalInvestment).toLocaleString('en-US')}
                            <span className='total-franctional-part'>
                                {(totalInvestment % 1).toFixed(2).toString().slice(1)}
                            </span>
                    </p>
                </div>

                <div className='total-investment-wrapper mx-3 mb-3' >
                    <p className='title-smaller mb-1'>Current Value</p>
                    <p className='total-investment '>
                        {Math.floor(totalCurrentValue).toLocaleString('en-US')}
                            <span className='total-franctional-part'>
                                {(totalCurrentValue % 1).toFixed(2).toString().slice(1)}
                            </span>
                    </p>
                </div>

                <div className='total-investment-wrapper mx-3 mb-3' >
                    <p className='title-smaller mb-1'>Day's P&L</p>
                    <p className={`total-investment ${dayTotalPL >= 0.0 ? 'stock_up_color' : 'stock_down_color'}`}>
                         {Math.floor(dayTotalPL).toLocaleString('en-US')}
                            <span className='total-franctional-part'>
                                {(Math.floor(dayTotalPL) % 1).toFixed(2).toString().slice(1)}
                            </span>
                    </p>
                </div>

                <div className='total-investment-wrapper mx-3 mb-3' >
                    <p className='title-smaller mb-1'>Total P&L</p>
                    <p className={`total-investment ${totalProfitLoss >= 0.0 ? 'stock_up_color' : 'stock_down_color'}`}>
                         {Math.floor(totalProfitLoss).toLocaleString('en-US')}
                            <span className='total-franctional-part'>
                                {(Math.floor(totalProfitLoss) % 1).toFixed(2).toString().slice(1)}
                            </span>
                    </p>
                </div>


            </div>
            <div className='table-container table-responsive position-relative' style={{width: '100%', height: '60vh', position: 'relative'}}>
                <table class="table table-hover ">
                    <thead className=''>
                        <tr className='position-sticky top-0'>
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
                        tdata.length === 0 
                        ? 
                        <Loader></Loader> : 
                        <tbody>
                            { 
                                tdata.map((item, index) => {

                                    return( <tr key={index}>
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
                                    </tr>)
                                })
                            }
                        </tbody>
                    }

                </table>
            </div>
        </div>
    );
}

export default Holdings;