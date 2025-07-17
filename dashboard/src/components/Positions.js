import React, {useState, useEffect, useRef} from 'react';
// import { positions } from '../data/data';
import TableHead from './TableHead';
import axios from 'axios';
import {getStockUpDown, search} from '../utilsFunc/utils';
import { Button } from '@mui/material';
import Loader from './Loader';

function Positions() {

    const positions = useRef([]);
    const [tdata, setTData] = useState([]);

    // sorting 
    const [sortConfig, setSortConfing] = useState({key: null, direction: null});

    useEffect(() => {
        axios.get("http://localhost:8080/positions").then((res) => {
            positions.current = res.data;
            setTData(res.data);
        });
    }, []);

    // headnames    
    let headNames = ["Product", "name", "Qty.", "Avg", "LTP", "P&L", "Chg."];
    let keyNames = ["product", "name", "qty", "avg", "ltp", "pnl", "chg"];
    

    return ( 
        <div className='positions-container' >
            <div className='header d-flex justify-content-between border-bottom pb-4 pe-0 pe-sm-4 mb-5'>
                <h2 className='fs-3 fs-md-4 fw-light mb-0 me-3 align-self-center'>Positions ({positions.current.length})</h2>
                <form class="d-flex" role="search">
                    <input id="search-input" class="form-control me-2" type="search" placeholder="Filter eg:INFY" aria-label="Search"
                    onChange={(event) => search(event, positions.current, setTData)}/>   
                </form>
            </div>
            <div className='table-container table-responsive' style={{width: '100%', height: '70vh', position: 'relative'}}>
                <table class="table table-hover">
                    <thead>
                        <tr className='border-top'>
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
                                        <td className='table-data'>{item.product}</td>
                                        <td className='table-data'>{item.name}</td>
                                        <td className='table-data align-self-end'>{item.qty}</td>
                                        <td className='table-data align-self-end'>{item.avg.toFixed(2)}</td>
                                        <td className='table-data align-self-end'>{item.ltp.toFixed(2)}</td>
                                        <td className={`table-data align-self-end 
                                            ${getStockUpDown(item.pnl)}`}>
                                                {item.pnl.toFixed(2)}</td>
                                        <td className={`table-data align-self-end 
                                            ${getStockUpDown(item.chg)}`}>
                                                {item.chg.toFixed(2)}%</td>
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

export default Positions;