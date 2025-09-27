import React ,{useState, useEffect, useRef, useContext} from 'react';
// import { watchList } from '../data/data';
import './WatchList.css';
import { getStockUpDown, search } from '../utilsFunc/utils';

// essential imports
import {Tooltip, Grow} from "@mui/material";
import KeyboardArrowUp from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import Loader from './Loader';
import axios from 'axios';
import GeneralContext from '../context/GeneralContext';
import { useAuth } from '../context/AuthContext';

let data; 

export function getWatchListItem(name) {
    let i = 0;
    while(i <= data.length){
        if(data[i].name === name.toUpperCase()){
            return data[i];
        }
        i++;
    }
}

function WatchList() {

    const {user} = useAuth();
    const watchlists = useRef([]);
    const [wData, setWData] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            axios.get(`${process.env.REACT_APP_API_URL}/${user.id}/watchlists`).then((res)=> {
                watchlists.current = res.data;
                data = res.data;
                setWData(res.data);
            });
        }, 500);
    }, []); 

    return ( 
        <div className='watch-list-container d-inline border-end p-3 position-relative'>
            <div className='border-bottom pb-2 mb-4'>
                <form className="d-flex" role="search">
                    <input id="search-input" className="form-control me-2" type="search" placeholder="Search (infy, ongc, ics)" aria-label="Search"
                    onChange={(event) => search(event, watchlists.current, setWData)}/>
                </form>
            </div>
            {
                wData.length === 0
                ?
                <Loader></Loader> : 
                <ul className='list list-unstyled p-0 m-0'>
                    {
                        wData.map((item, index) => {
                            return(
                                <WatchListItem item={item} key={index}></WatchListItem>
                            );
                        })
                    }
                </ul>
            }
            {/* <BuyActionWindow></BuyActionWindow> */}
        </div>
        
    );
}

const WatchListItem = ({item}) => {

    const [showWatchListActions, setshowWatchListActions] = useState(false);

    const handleMouseEnter = () => {
        setshowWatchListActions(true);
    }
    const handleMouseLeave = () => {
        setshowWatchListActions(false);
    }
    

    return (
        <li className='border-bottom' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}> {/*position: relative; */}
            <div className="watch-list-item d-flex justify-content-between" >
                <p className={`table-data mb-0 ${getStockUpDown(item.percent)}`}>
                    {item.name}
                </p>
                <div className="d-flex">
                    <p className="table-data mx-2 mb-0 align-self-center">
                        {item.percent}
                    </p>
                    <span>
                        {
                            item.percent >= 0 ? <KeyboardArrowUp className='stock_up_color' /> : <KeyboardArrowDown className='stock_down_color' />
                        }
                    </span>
                    <p className={`table-data ms-2 mb-0 align-self-center ${getStockUpDown(item.percent)} `}
                    style={{width: "70px"}}>
                        {item.price}
                    </p>
                </div>
                {showWatchListActions && <WatchListItemAction itemInfo={item} />}  
                {/* itemInfo object of name and price(fixed) */}
            </div>
        </li>
    );
}

const WatchListItemAction = (({itemInfo}) => {
    const generalContext = useContext(GeneralContext);

    const handleBuyClick = (e) => {
        const rect = e.target.getBoundingClientRect();

        let topOffset = rect.bottom - 50;
        if(topOffset > 365){
            topOffset = 365;
        }
        
        generalContext.openBuyWindow(itemInfo, topOffset);
    }
    return (
        <span className='watchlist-item-action item-action m-0 pe-3' uid={itemInfo.name}>
            <span className=''>
                <Tooltip title="Buy" placement="top" arrow >
                    <button className='action-btn action-buy'
                    onClick={handleBuyClick}>B</button>
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
