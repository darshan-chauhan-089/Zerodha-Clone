import React, {useState, createContext} from 'react';
import BuyActionWindow from './BuyActionWindow';

const GeneralContext = createContext({
    openBuyWindow: (uid, topOffset) => {},
    closeBuyWindow: () => {}, 
});

export const GeneralContextProvider = (props) => {
    const [isBuyWindowOpen, setIsBuyWindowOpen] = useState(false);
    const [selectedStockUIDOffset, setselectedStockUIDOffset] = useState([]);

    const handleOpenBuyWindow = (uid, topOffset) => {
        setIsBuyWindowOpen(true);
        setselectedStockUIDOffset([uid, topOffset]);
    }

    const handleCloseBuyWindow = () => {
        setIsBuyWindowOpen(false);
        setselectedStockUIDOffset("");
    }

    return(
        <GeneralContext.Provider 
            value = {{ 
                openBuyWindow: handleOpenBuyWindow,
                closeBuyWindow: handleCloseBuyWindow, 
            }}
        >
            {props.children}
            {
                isBuyWindowOpen && <BuyActionWindow uid={selectedStockUIDOffset}/>
            }
        </GeneralContext.Provider>
    )
}

export default GeneralContext;
