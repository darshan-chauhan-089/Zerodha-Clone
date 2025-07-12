import React from 'react';
import TopBarLeft from './TopBarLeft';
import TopBarRight from './TopBarRight';
import './TopBar.css';
function TopBar() {
    return (   
        <div className='topbar-container d-flex' style={{height: "60px"}}>
            <TopBarLeft />
            <TopBarRight />
        </div>
    );
}

export default TopBar;