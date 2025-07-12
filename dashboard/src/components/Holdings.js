import React, {useState} from 'react';
import { totalInvestment, totalCurrentValue, totalProfitLoss, holdings } from '../data/data';
import "./Holdings.css";
import HoldingsTableHead from './HoldingsTableHead';
function Holdings() {

    // problems: 
        /* 
            1) net and day is given string format
            2) Total P&L only valid when opening price of stock was given .
            3)  curr.val and P&L can't be sorted because we have to calculate so import the final data 
                after all calculation on data done.    
        */

    // sorting 
    const [tdata, setTData] = useState(holdings);
    const [sortConfig, setSortConfing] = useState({key: null, direction: null});

    const handleSort = (columnKey) => {
        let direction = sortConfig.direction;
        if(direction == null){
            direction = "asc";
        }else if(direction == "asc"){
            direction = "desc";
        }else{
            direction = "asc";
        }

        console.log(tdata);
        const sortedData = [...tdata].sort((a, b) => {
            if(typeof a[columnKey] === "string"){
                return direction === "asc" 
                ? a[columnKey].localeCompare(b[columnKey]) : 
                b[columnKey].localeCompare(a[columnKey]);
            }else{
                return direction === "asc"
                ? a[columnKey] - b[columnKey] : 
                b[columnKey] - a[columnKey] ; 
            }
        });
        setTData(sortedData);
        setSortConfing({key: columnKey , direction});

    }

    const [searchTerm, setSearchTerm] = useState('');
    const handleSearch = (event) => {
        const query = event.target.value.toUpperCase();
        setSearchTerm(query);
        setTData(holdings.filter((item) => item.name.includes(query)));

    }

    return ( 
        <div className='holdings-container'>
            <div className='header d-flex justify-content-between border-bottom pb-4 pe-0 pe-sm-4'>
                <h2 className='fs-3 fs-md-4 fw-light mb-0 me-3 align-self-center'>Holdings ({holdings.length})</h2>
                <form class="d-flex" role="search">
                    <input id="search-input" class="form-control me-2" type="search" placeholder="Filter eg:TCS" aria-label="Search"
                    onChange={handleSearch}/>   
                </form>
            </div>
            <div className='total-stats d-flex flex-wrap justify-content-between py-4 pt-4 pb-3'>

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
                    <p className={`total-investment ${totalProfitLoss >= 0.0 ? 'stock_up_color' : 'stock_down_color'}`}>
                         {Math.floor(totalProfitLoss).toLocaleString('en-US')}
                            <span className='total-franctional-part'>
                                {(Math.floor(totalProfitLoss) % 1).toFixed(2).toString().slice(1)}
                            </span>
                    </p>
                </div>

                <div className='total-investment-wrapper mx-3 mb-3' >
                    <p className='title-smaller mb-1'>Total P&L</p>
                    <h5 className='total-investment '>from day open - LTP<span className='total-franctional-part'></span></h5>
                </div>

            </div>
            <div className='table-container table-responsive'>
                <table class="table table-hover">
                    <thead>
                        <tr className='border-top'>
                            <HoldingsTableHead classname={"title-smaller"} headName={"Instruments"} keyName={"name"} handleSortFnc={handleSort} sortConfigObj={sortConfig} ></HoldingsTableHead>
                            <HoldingsTableHead classname={"title-smaller"} headName={"Qty."} keyName={"qty"} handleSortFnc={handleSort} sortConfigObj={sortConfig} ></HoldingsTableHead>
                            <HoldingsTableHead classname={"title-smaller"} headName={"Avg. cost"} keyName={"avg"} handleSortFnc={handleSort} sortConfigObj={sortConfig} ></HoldingsTableHead>
                            <HoldingsTableHead classname={"title-smaller"} headName={"LTP"} keyName={"price"} handleSortFnc={handleSort} sortConfigObj={sortConfig} ></HoldingsTableHead>
                            <HoldingsTableHead classname={"title-smaller"} headName={"Cur. val"} keyName={"price"} handleSortFnc={handleSort} sortConfigObj={sortConfig} ></HoldingsTableHead>
                            <HoldingsTableHead classname={"title-smaller"} headName={"P&L"} keyName={"name"} handleSortFnc={handleSort} sortConfigObj={sortConfig} ></HoldingsTableHead>
                            <HoldingsTableHead classname={"title-smaller"} headName={"Net chg."} keyName={"net"} handleSortFnc={handleSort} sortConfigObj={sortConfig} ></HoldingsTableHead>
                            <HoldingsTableHead classname={"title-smaller"} headName={"Day chg."} keyName={"day"} handleSortFnc={handleSort} sortConfigObj={sortConfig} ></HoldingsTableHead>
                        </tr>
                    </thead>

                    <tbody>
                        { 
                            tdata.map((item, index) => {
                                const currVal = (item.qty * item.price).toFixed(2); 
                                const amt = currVal - item.avg * item.qty;  // Total profit and Loss
                                const isProfit = amt >= 0.0; 
                                const P_OR_L = isProfit ? "stock_up_color" : "stock_down_color";
                                const dayClass = item.isLoss ? "stock_down_color" : "stock_up_color";

                                return( <tr>
                                    <td className='table-data'>{item.name}</td>
                                    <td className='table-data align-self-end'>{item.qty}</td>
                                    <td className='table-data align-self-end'>{item.avg}</td>
                                    <td className='table-data align-self-end'>{item.price.toFixed(2)}</td>
                                    <td className='table-data align-self-end'>{currVal}</td>
                                    <td className={`table-data align-self-end ${P_OR_L}`}>{amt.toFixed(2)}</td>
                                    <td className={`table-data align-self-end ${P_OR_L}`}>{item.net}</td>
                                    <td className={`table-data align-self-end ${dayClass}`}>{item.day}</td>
                                </tr>)
                            })
                        }
                    </tbody>

                </table>
            </div>
        </div>
    );
}

export default Holdings;