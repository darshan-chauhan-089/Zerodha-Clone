import React, {useState, useEffect, useRef} from 'react';
// import { positions } from '../data/data';
import TableHead from './TableHead';
import axios from 'axios';
import {getStockUpDown, search} from '../utilsFunc/utils';
import Loader from './Loader';
import { useAuth } from '../context/AuthContext';
// import EmptyYet from './EmptyYet';
import { EmptyYet } from './EmptyYetComponent';
import { useData } from '../context/DataContext';
import ItemBuySellAction from './ItemBuySellAction';

// let positionsData; 

// export function getPositionsItem(itemId) {
//     let i = 0;
//     while(i <= positionsData.length){
//         if(positionsData[i].id === itemId){
//             return positionsData[i];
//         }
//         i++;
//     }
// }

function Positions() {

    const [hoverRow, setHoverRow] = useState(null);
    
    const {user} = useAuth();
    const {newOrder, setNewOrder, recentlySellOrder} = useData();
    console.log("In Positions newOrder: ", newOrder);
    const positions = useRef([]);
    const [tdata, setTData] = useState([]);

    // sorting 
    const [sortConfig, setSortConfing] = useState({key: null, direction: null});

    useEffect(() => {
        // console.log("in positions: ", newOrder);
        setTimeout(() => {
            axios.get(`${process.env.REACT_APP_API_URL}/${user.id}/positions`).then((res) => {
                if(res.data.length === 0){
                    positions.current = ["empty"];
                    setTData(["empty"]);
                    return;
                }
                positions.current = res.data;
                setTData(res.data);
            });
        }, 500);
    }, [newOrder, recentlySellOrder]);

    // headnames    
    let headNames = ["Product", "name", "Qty.", "Avg", "LTP", "P&L", "Chg."];
    let keyNames = ["product", "name", "qty", "avg", "ltp", "pnl", "chg"];

    // getProductStyle
    const getProductStyle = (product) => {
        const refObj = {
            CNC: "bg-danger-subtle text-danger",
            MIS: "bg-body-secondary text-secondary",
            NRML: "bg-light-subtle text-dark"
        }
        return refObj[product];
    }
    

    return ( 
        <div className='positions-container' >
            <div className='header d-flex justify-content-between border-bottom pb-4 pe-0 pe-sm-4 mb-5'>
                <h2 className='fs-3 fs-md-4 fw-light mb-0 me-3 align-self-center'>Positions ({positions.current[0] === "empty" ? "0" : positions.current.length})</h2>
                <form class="d-flex" role="search">
                    <input id="search-input" class="form-control me-2" type="search" placeholder="Filter eg:INFY" aria-label="Search"
                    onChange={(event) => search(event, positions.current, setTData)}
                    disabled={(tdata.length === 0 || tdata[0] === "empty")}/>   
                </form>
            </div>
            <div className='table-container table-responsive' style={{width: '100%', height: '70vh', position: 'relative'}}>
                <table class="table table-hover">
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
                        positions.current.length === 0 
                        ? 
                            <Loader></Loader> : positions.current[0] === "empty" ? <EmptyYet /> : 
                        <tbody>
                            { 
                                tdata[0] === "searchEmpty" ? <EmptyYet /> : tdata.map((item, index) => {
                                    return( <tr key={index} onMouseEnter={() => setHoverRow(index)} onMouseLeave={() => setHoverRow(null)}
                                        className='position-relative'>
                                        <td className={`table-data`}>
                                            <span className={`px-3 py-1 rounded-1 ${getProductStyle(item.product)}`}>
                                                {item.product}
                                            </span>
                                        </td>
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
                                        <td className='table-data m-0 pt-2'
                                            style={{padding: "0px"}}>
                                                {hoverRow === index && <ItemBuySellAction 
                                                style={{left: "100px", top: "8px"}}   
                                                itemName={item.name} itemId={item._id} origin={"position"}/>}
                                        </td>
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