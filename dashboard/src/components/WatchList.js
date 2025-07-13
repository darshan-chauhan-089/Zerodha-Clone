import React ,{useState} from 'react';
import { watchList } from '../data/data';
import './WatchList.css';

// essential imports
import {Tooltip, Grow} from "@mui/material";
import KeyboardArrowUp from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
// import {Button} from '@mui/material';

// import {KeyboardArrowUpIcon, KeyboardArrowDownIcon} from '@mui/icons-material';
function WatchList() {
    /*
        problem: use another icon website
    */
    return ( 
        <div className='watch-list-container d-inline border border-start-end p-3'>
            <div className='border-bottom pb-2 mb-4'>
                <form class="d-flex" role="search">
                    <input id="search-input" class="form-control me-2" type="search" placeholder="Search (infy, ongc, ics)" aria-label="Search"
                    />
                </form>
            </div>
            <ul className='list list-unstyled p-0 m-0'>
                {
                    watchList.map((item, index) => {
                        return(
                            <WatchListItem item={item} key={index}></WatchListItem>
                        );
                    })
                }
                {
                    watchList.map((item, index) => {
                        return(
                            <WatchListItem item={item} key={index}></WatchListItem>
                        );
                    })
                }
            </ul>
        </div>
        
    );
}

const WatchListItem = ({item, index}) => {

    const [showWatchListActions, setshowWatchListActions] = useState(false);

    const handleMouseEnter = () => {
        setshowWatchListActions(true);
    }
    const handleMouseLeave = () => {
        setshowWatchListActions(false);
    }

    return (
        <li className='border-bottom' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <div className="watch-list-item d-flex justify-content-between" >
                <p className={`table-data mb-0 ${item.isDown ? "stock_down_color" : "stock_up_color"}`}>
                    {item.name}
                </p>
                <div className="d-flex">
                    <p className="table-data mx-2 mb-0 align-self-start">
                        {item.percent}
                    </p>
                    <span>
                        {
                            item.isDown ? <KeyboardArrowUp className='stock_up_color' /> : <KeyboardArrowDown className='stock_down_color' />
                        }
                    </span>
                    <p className={`table-data ms-2 mb-0 align-self-end ${item.isDown ? "stock_down_color" : "stock_up_color"} `}
                    style={{width: "70px"}}>
                        {item.price}
                    </p>
                </div>
                {showWatchListActions && <WatchListItemAction uid={item.name}/>}
            </div>
        </li>
    );
}

const WatchListItemAction = (({uid}) => {
    return (
        <span className='watchlist-item-action m-0 pe-3' uid={uid}>
            <span className=''>
                <Tooltip title="Buy" placement="top" arrow >
                    <button className='action-btn action-buy'>B</button>
                </Tooltip>
                <Tooltip title="Sell" placement="top" arrow >
                    <button className='action-btn action-sell'>S</button>
                </Tooltip>
                <Tooltip title="Analytics" placement="top" arrow >
                    <button className='action-btn action-analytics'>
                        <BarChartOutlinedIcon className="icon"/>
                    </button>
                </Tooltip>
                <Tooltip title="More" placement="top" arrow >
                    <button className='action-btn action-analytics'>
                        <MoreHorizOutlinedIcon className="icon"/>
                    </button>
                </Tooltip>
                
            </span>
        </span>
    )
})



export default WatchList;