import React , {useEffect, useState, useRef} from 'react';
import {Route, Routes} from 'react-router-dom';
import axios from 'axios';

import Summary from './Summary';
import Orders from './Orders';
import Holdings from './Holdings';
import Positions from './Positions';
import Funds from './Funds';
import Apps from './Apps';
import WatchList from './WatchList';
import { GeneralContextProvider } from './GeneralContext';

function Dashboard() {

    // const holdings = useRef([]);
    const [holdings, setHoldings] = useState([]); 

    useEffect(() => {

        axios.get("http://localhost:8080/holdings").then((res) => {
            // holdings.current = res.data;
            setHoldings(res.data);
        });

    }, []);

    const totalInvestment = holdings.reduce((sum, item) => sum + (item.avg * item.qty), 0);
    const totalCurrentValue = holdings.reduce((sum, item) => sum + (item.currVal), 0);
    const totalProfitLoss = totalInvestment - totalCurrentValue;
    const dayTotalPL = holdings.reduce((res, item) => res + ((item.price - item.dayOpenPrice) * item.qty), 0);

    // console.log(totalInvestment, totalCurrentValue, totalProfitLoss, dayTotalPL);

    return ( 
        <div className='dashboard-container d-flex'>
            <GeneralContextProvider>
                <WatchList />
            </GeneralContextProvider>
            <div className='content p-4'>
                <Routes>
                    <Route path='/' element={<Summary totalProfitLoss={totalProfitLoss} totalCurrentValue={totalCurrentValue} totalInvestment={totalInvestment} />} />
                    <Route path='/orders' element={<Orders />} />
                    <Route path='/holdings' element={<Holdings holdings={holdings} totalInvestment={totalInvestment} 
                    totalCurrentValue={totalCurrentValue} totalProfitLoss={totalProfitLoss} dayTotalPL={dayTotalPL}/>} />
                    <Route path='/positions' element={<Positions />} />
                    <Route path='/funds' element={<Funds />} />
                    {/* <Route path='/apps' element={<Apps />} /> */}
                </Routes>
            </div>

        </div>
    );
}

export default Dashboard;