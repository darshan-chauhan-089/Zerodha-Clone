import React from 'react';
import {Route, Routes, BrowserRouter} from 'react-router-dom';
import Summary from './Summary';
import Orders from './Orders';
import Holdings from './Holdings';
import Positions from './Positions';
import Funds from './Funds';
import Apps from './Apps';
import WatchList from './WatchList';

function Dashboard() {
    return ( 
        <div className='dashboard-container d-flex'>
            <WatchList />
            <div className='content p-4 '>
                <Routes>
                    <Route path='/' element={<Summary />} />
                    <Route path='/orders' element={<Orders />} />
                    <Route path='/holdings' element={<Holdings />} />
                    <Route path='/positions' element={<Positions />} />
                    <Route path='/funds' element={<Funds />} />
                    <Route path='/apps' element={<Apps />} />
                </Routes>
            </div>

        </div>
    );
}

export default Dashboard;