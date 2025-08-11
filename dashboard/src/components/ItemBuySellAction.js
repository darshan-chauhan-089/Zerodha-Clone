import GeneralContext from "../context/GeneralContext";
import { useContext } from "react";
import {Tooltip} from "@mui/material";
import './ItemBuySellAction.css';
import { getWatchListItem } from './WatchList';
import { decideProfitOrLoss } from "../utilsFunc/utils";
import { useData } from "../context/DataContext";

function ItemBuySellAction({style, itemName, itemId, origin}) {
    const generalContext = useContext(GeneralContext);
    const {getOrdersItem} = useData();

    const handleBuyClick = () => {
        let itemInfo = getWatchListItem(itemName);
        generalContext.openBuyWindow(itemInfo);          
    }
    
    const handleSellClick = () => {
        // let itemInfo = getHoldingsItem(itemId);
        // let itemInfo = getOrdersItem(itemId);
        console.log("itemId: ", itemId);
        let itemInfo = getOrdersItem(itemId, origin);
        console.log("handleSellClick: ", itemInfo);

        let tradeData = decideProfitOrLoss(itemInfo.price, itemInfo.qty);
        console.log("tradeData: ", tradeData);

        generalContext.openSellWindow({...itemInfo, ...tradeData});
    }

    return ( 
        <span className='item-buy-sell-action item-action m-0'
        style={style}>
            <span className=''>
                <Tooltip title="Buy" placement="top" arrow >
                    <button className='action-btn action-buy z-1'
                    onClick={handleBuyClick}>B</button>
                </Tooltip>
                <Tooltip title="Sell" placement="top" arrow >
                    <button className='action-btn action-sell z-1'
                    onClick={handleSellClick}>S</button>
                </Tooltip> 
            </span>
        </span>

     );
}

export default ItemBuySellAction;