import React, {useState, useEffect, useRef} from 'react';
// import { positions } from '../data/data';
import TableHead from './TableHead';
import axios from 'axios';
import { search } from '../utilsFunc/utils';
import Loader from './Loader';

function Orders() {

    const ordersData = useRef([]);
    const openOrders = useRef([]);
    const executedOrders = useRef([]);

    const [tdata1, setT1Data] = useState([]);
    const [tdata2, setT2Data] = useState([]);

    // sorting 
    const [sortConfig1, setSortConfing1] = useState({key: null, direction: null});
    const [sortConfig2, setSortConfing2] = useState({key: null, direction: null});

    useEffect(() => {
        
        setTimeout(() => {
            console.log("states !!");
            axios.get("http://localhost:8080/orders").then((res) => {
                
                if(ordersData.current.length === 0){
                    ordersData.current = res.data;
                    // sturcturing the API data
                    ordersData.current.forEach((item, index) => {
                        if(item.status.toUpperCase() === "OPEN"){
                            openOrders.current.push(item);
                        }else{
                            executedOrders.current.push(item);
                        }
                    });
                    console.log("both data: ", openOrders.current , executedOrders.current);
                    setT1Data(openOrders.current);
                    setT2Data(executedOrders.current);
                }

            });
        }, 500);
    }, []);
        

    // headnames    
    let headNames1 = ["Time", "Type", "Instrument", "Product", "Qty.", "LTP", "Status"];
    let headNames2 = headNames1;
    headNames2[5] = "Avg. price";
    let keyNames1 = ["time", "type", "name", "product", "qty", "price", "status"];
    let keyNames2 = keyNames1;
    keyNames2[5] = "avg";
 
    // getProductStyle
    const getButtonStyle = (key) => {
        const refObj = {
            REJECTED: "bg-danger-subtle text-danger",
            OPEN: "bg-body-secondary text-secondary",
            CANCELLED: "bg-body-secondary text-secondary",
            // NRML: "bg-light-subtle text-dark",
            COMPLETE: "bg-success-subtle text-success",
            BUY: "bg-primary-subtle text-primary",
            SELL: "bg-danger-subtle text-danger",
        }
        return refObj[key];
    }
    

    return ( 
        <div className='orders-container' >
            <div className='open-order-container'>
                <div className='header d-flex justify-content-between  pb-4 pe-0 pe-sm-4'>
                    <h2 className='fs-3 fs-md-4 fw-light mb-0 me-3 align-self-center'>Open orders ({openOrders.current.length})</h2>
                    <form className="d-flex" role="search">
                        <input id="search-input" className="form-control me-2" type="search" placeholder="Filter eg:INFY" aria-label="Search"
                        onChange={(event) => search(event, openOrders.current, setT1Data)}/>      
                    </form>
                </div>
                <div className='table-container table-responsive position-relative' style={{width: '100%', height: '33vh', position: 'relative'}}>
                    <table class="table table-hover">
                        <thead>
                            <tr className='position-sticky top-0'>
                                {
                                    headNames1.map((name, index) => {
                                        return <TableHead classname={"title-smaller"} headName={name} keyName={keyNames1[index]} 
                                        sortConfig={sortConfig1} setSortConfing={setSortConfing1} data={tdata1} setData={setT1Data} >
                                        </TableHead>
                                    })
                                }
                            </tr>
                        </thead>

                        {
                            openOrders.current.length === 0 
                            ? 
                                <Loader></Loader> : 
                            <tbody>
                                { 
                                    tdata1.map((item, index) => {
                                        return( <tr key={index}>
                                            <td className='table-data'>{item.time}</td>
                                            <td className={`table-data`}>
                                                <span className={`px-3 py-1 rounded-1 ${getButtonStyle(item.type.toUpperCase())}`}>
                                                    {item.type.toUpperCase()}
                                                </span>
                                            </td>
                                            <td className='table-data'>{item.name}</td>
                                            <td className='table-data'>{item.product}</td>
                                            <td className='table-data align-self-end'>{item.qty}</td>
                                            <td className='table-data align-self-end'>{item.price.toFixed(2)}</td>
                                            <td className={`table-data`}>
                                                <span className={`px-3 py-1 rounded-1 ${getButtonStyle(item.status.toUpperCase())}`}>
                                                    {item.status.toUpperCase()}
                                                </span>
                                            </td>
                                        </tr>)
                                    })
                                }
                            </tbody>
                        }

                    </table>
                </div>
            </div>
            <div className='open-order-container mt-4'>
                <div className='header d-flex justify-content-between  pb-4 pe-0 pe-sm-4'>
                    <h2 className='fs-3 fs-md-4 fw-light mb-0 me-3 align-self-center'>Executed orders ({executedOrders.current.length})</h2>
                    <form className="d-flex" role="search">
                        <input id="search-input" className="form-control me-2" type="search" placeholder="Filter eg:INFY" aria-label="Search"
                        onChange={(event) => search(event, executedOrders.current, setT2Data)}/>   
                    </form>
                </div>
                <div className='table-container table-responsive position-relative' style={{width: '100%', height: '33vh', position: 'relative'}}>
                    <table class="table table-hover">
                        <thead>
                            <tr className='position-sticky top-0'>
                                {
                                    headNames2.map((name, index) => {
                                        return <TableHead classname={"title-smaller"} headName={name} keyName={keyNames2[index]} 
                                        sortConfig={sortConfig2} setSortConfing={setSortConfing2} data={tdata2} setData={setT2Data} >
                                        </TableHead>
                                    })
                                }
                            </tr>
                        </thead>

                        {
                            executedOrders.current.length === 0 
                            ? 
                                <Loader></Loader> : 
                            <tbody>
                                { 
                                    tdata2.map((item, index) => {
                                        return( <tr key={index}>
                                            <td className='table-data'>{item.time}</td>
                                            <td className={`table-data`}>
                                                <span className={`px-3 py-1 rounded-1 ${getButtonStyle(item.type.toUpperCase())}`}>
                                                    {item.type.toUpperCase()}
                                                </span>
                                            </td>
                                            <td className='table-data'>{item.name}</td>
                                            <td className='table-data'>{item.product}</td>
                                            <td className='table-data align-self-end'>{item.qty}</td>
                                            <td className='table-data align-self-end'>{item.avg.toFixed(2)}</td>
                                            <td className={`table-data`}>
                                                <span className={`px-3 py-1 rounded-1 ${getButtonStyle(item.status.toUpperCase())}`}>
                                                    {item.status.toUpperCase()}
                                                </span>
                                            </td>
                                        </tr>)
                                    })
                                }
                            </tbody>
                        }

                    </table>
                </div>
            </div>
        </div>
    );
}

export default Orders;