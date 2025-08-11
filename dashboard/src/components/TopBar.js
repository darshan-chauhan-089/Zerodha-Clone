import React from 'react';
import TopBarLeft from './TopBarLeft';
import TopBarRight from './TopBarRight';
import './TopBar.css';
function TopBar() {
    return (   
        <div className='topbar-container d-flex top-0 bg-white z-5' 
        style={{height: "60px", width: "100%"}}>
            <TopBarLeft />
            <TopBarRight />
        </div>
    );
}

export default TopBar;