import React from 'react';
function TopBarLeft() {
    return ( 
        <div className='topbar-left-container pinned-intruments border-end
        d-flex justify-content-evenly py-1 px-3'
        >
            <div className='intrument-widget'>
                <p className='pinned-funds-name mb-0 color_444 font_size_85'>NIFTY 50</p>
                <p className='last-price-down mb-0 stock_down_color'><small>4343.45</small></p>
            </div>
            <div className='intrument-widget'>
                <p className='pinned-funds-name mb-0 color_444 font_size_85'>NIFTY 50</p>
                <p className='last-price-down mb-0 stock_down_color'><small>4343.45</small></p>
            </div>
        </div>
     );
}

export default TopBarLeft;