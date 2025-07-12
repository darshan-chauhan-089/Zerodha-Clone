import React from 'react';
import { watchlist } from '../data/data';
import './WatchList.css'
function WatchList() {
    /*
        problem: use another icon website
    */
    return ( 
        <div className='watch-list-container d-inline border border-start-end p-2'>
            <div className='border-bottom pb-2 mb-2'>
                <form class="d-flex" role="search">
                    <input id="search-input" class="form-control me-2" type="search" placeholder="Search (infy, ongc, ics)" aria-label="Search"
                    />
                </form>
            </div>
            {
                watchlist.map((item) => {
                    return(
                        <div className="d-flex justify-content-between border-bottom p-2 mb-1">
                            <p className={`table-data mb-0 ${item.isDown ? "stock_down_color" : "stock_up_color"}`}>
                                {item.name}
                            </p>
                            <div className="d-flex">
                                <p className="table-data mx-2 mb-0 align-self-start">
                                    {item.percent}
                                </p>
                                <p className={`table-data ms-2 mb-0 align-self-end ${item.isDown ? "stock_down_color" : "stock_up_color"} `}
                                style={{width: "70px"}}>
                                    {item.price}
                                </p>
                                
                            </div>
                        </div>
                    )
                })
            }
        </div>
    );
}

export default WatchList;