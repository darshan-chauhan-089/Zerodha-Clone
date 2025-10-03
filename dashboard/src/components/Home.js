import React from 'react';
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