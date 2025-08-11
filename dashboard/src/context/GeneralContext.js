import React, {useState, createContext} from 'react';
import BuyActionWindow from '../components/BuyActionWindow';
import { useData } from './DataContext';
import SellActionWindow from '../components/SellActionWindow';

const GeneralContext = createContext();

export const GeneralContextProvider = (props) => {
    // const [newOrder, setNewOrder] = useState(null);
    // const {newOrder, setNewOrder} = useData();
    const [isBuyWindowOpen, setIsBuyWindowOpen] = useState(false);
    const [isSellWindowOpen, setIsSellWindowOpen] = useState(false);
    const [selectedStockUIDOffset, setselectedStockUIDOffset] = useState([]);

    const handleOpenBuyWindow = (itemInfo, topOffset) => {
        setIsBuyWindowOpen(true);
        setselectedStockUIDOffset([itemInfo, topOffset]);
    }

    const handleCloseBuyWindow = () => {
        setIsBuyWindowOpen(false);
        setselectedStockUIDOffset("");
    }

    const handleOpenSellWindow = (itemInfo, topOffset) => {
        setIsSellWindowOpen(true);
        setselectedStockUIDOffset([itemInfo, topOffset]);
    }

    const handleCloseSellWindow = () => {
        setIsSellWindowOpen(false);
        setselectedStockUIDOffset("");
    }

    // const placeNewOrder = (args) => {
    //     console.log("args: ", args)
    //     setNewOrder(args);
    // }

    return(
        <GeneralContext.Provider 
            value = {{ 
                openBuyWindow: handleOpenBuyWindow,
                closeBuyWindow: handleCloseBuyWindow, 
                openSellWindow: handleOpenSellWindow,
                closeSellWindow: handleCloseSellWindow, 
                // newOrder,
                // placeNewOrder,
            }}
        >
            {props.children}
            {
                isBuyWindowOpen && <BuyActionWindow uid={selectedStockUIDOffset}/>
            }
            {
                isSellWindowOpen && <SellActionWindow uid={selectedStockUIDOffset} />
            }
        </GeneralContext.Provider>
    )
}

export default GeneralContext;
