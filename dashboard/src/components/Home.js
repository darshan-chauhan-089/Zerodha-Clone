import React from 'react';
import {Routes, Route} from 'react-router-dom';
import TopBar from './TopBar';
import Dashboard from './Dashboard';

function Home() {
    return ( 
        <div className='position-relative'>
            <TopBar />
            <Dashboard />
        </div>
     );
}

export default Home;