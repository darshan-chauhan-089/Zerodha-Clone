import React, { useContext, useState } from 'react';
import './BuyActionWindow.css';
import GeneralContext from '../context/GeneralContext';
import axios from 'axios';
import { useAuth } from '../context/AuthContext';
import { useData } from '../context/DataContext';
import { showSuccess } from '../utilsFunc/toast';

function BuyActionWindow({uid}) {

    const {user} = useAuth();
    const generalContext = useContext(GeneralContext);
    const{newOrder, setNewOrder} = useData();
    // console.log("in BuyActionWindow new Order: ", generalContext.newOrder);
    console.log("in BuyActionWindow new Order: ", newOrder);

    const [stockQty, setStockQty] = useState(1);
    const [stockPrice, setStockPrice] = useState(0.0);


    const handleCancleClick = () => {
        generalContext.closeBuyWindow();
    }

    const handleBuyClick = async (itemInfo) => {
        // generalContext.openBuyWindow(uid[0], uid[1]);
        try{
            console.log("itemInfo in BuyActionWindow: ", itemInfo); 
            await axios.post(
                `http://localhost:8080/${user.id}/orders`,
                {
                    ...itemInfo,
                    qty: stockQty,  
                    time: new Date()
                }
            ).then((res) => {
                console.log("result", res.data);
                // generalContext.placeNewOrder({...itemInfo, updatedAt: Date.now()});
                setNewOrder({...itemInfo, updateAt: Date.now()})
                
                // console.log("in BuyActionWindow: ", generalContext.newOrder);
                console.log("in BuyActionWindow: ", newOrder);
                showSuccess(`Buy order placed successfully for ${itemInfo.name}`);
            })

            handleCancleClick();
        }catch(err){
            console.log(err);
        }
    }

    const print = () => {
        console.log("BuyActionWindow price: ", stockQty * uid[0].price)
    }

    return ( 
        <div className='buy-action-window  
        border rounded'
             style={uid[1] ? {top: uid[1]} : {bottom: "25px", left: `calc(100% - 300px)`}}>
            <p className='blue-blur text-center py-3 px-1 mb-0 h5 text-light rounded-top'>{uid[0].name}</p>
            <div className='p-3'>

                <div className='form-floating mb-3 border border-1 rounded-3'>
                    <input className='form-control' id='qty' type='number' placeholder=''
                    value={stockQty} onChange={(e) => setStockQty(e.target.value)}
                    min="1"></input>
                    <label for='qty'>Qty.</label>
                </div>
                <div className='form-floating mb-3 border border-1 rounded-3'>
                    <input className='form-control' id='price' type='number' placeholder=''
                    value={stockQty*uid[0].price} onChange={(e) => setStockPrice(stockQty*uid[0].price)}
                    />
                    {print()}
                    <label for='price'>Price</label> 
                </div>
                <div className='d-flex flex-column'>
                    <button className='buy btn blue-blur text-light mb-2'
                    onClick={() => handleBuyClick(uid[0])}>Buy</button>
                    <button className='btn btn-light border border-2' 
                    onClick={handleCancleClick}>Cancel</button>
                </div>
            </div>
        </div>
     );
}

export default BuyActionWindow;