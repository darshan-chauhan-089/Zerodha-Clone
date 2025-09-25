import React, { useContext, useState } from 'react';
import './BuyActionWindow.css';
import GeneralContext from '../context/GeneralContext';
import axios from 'axios';
import { useAuth } from '../context/AuthContext';
import { useData } from '../context/DataContext';
import { showSuccess } from '../utilsFunc/toast';
import { getStockUpDown } from '../utilsFunc/utils';

function SellActionWindow({uid}) {

    console.log("In SellActionWindow uid: ", uid);

    const {user} = useAuth();
    const generalContext = useContext(GeneralContext);
    const{recentlySellOrder ,setRecentlySellOrder} = useData();

    let profit_loss = 0;
    if(uid[0].percentage < 0){
        profit_loss = parseInt(-(uid[0].qty*uid[0].price - uid[0].netPrice));
    }else{
        profit_loss = parseInt(uid[0].netPrice - uid[0].qty*uid[0].price);
    }
    // console.log("before profit_loss: ", profit_loss);
    let profit_loss_sign = uid[0].percentage >= 0 ? `+${profit_loss}` : profit_loss;
    // console.log(profit_loss);

    const handleCancleClick = () => {
        generalContext.closeSellWindow();
    }

    const handleSellClick = async (itemInfo) => {
        try{
            console.log("itemInfo in BuyActionWindow: ", itemInfo); 
            await axios.delete(
                `${process.env.API_URL}/${user.id}`,
                {
                    data: {
                        id: itemInfo._id,
                        holding: itemInfo.holding,
                        position: itemInfo.position,
                        netPrice: profit_loss,   // net Profit or Loss
                        totalCreditedAmount: uid[0].netPrice,
                    },
                }
            ).then((res) => {
                console.log("result", res.data);
                setRecentlySellOrder({...itemInfo})
                
                showSuccess(`Sell order executed successfully for ${itemInfo.name}`);
            })

            handleCancleClick();
        }catch(err){
            console.log(err);
        }
    }

    return ( 
        <div className='buy-action-window  
        border rounded'
             style={{bottom: "25px", left: `calc(100% - 300px)`}}>
            <p className='blue-blur text-center py-3 px-1 mb-0 h5 text-light rounded-top'>{uid[0].name}</p>
            <div className='p-3'>

                <div className='form-floating mb-3 border border-1 rounded-3'>
                    <input className='form-control' id='qty' type='number' placeholder=''
                    value={uid[0].qty}></input>
                    <label for='qty'>Qty.</label>
                </div>
                <div className='form-floating mb-3 border border-1 rounded-3 position-relative'>
                    <input className='form-control' id='price' type='number' placeholder=''
                    value={uid[0].netPrice.toFixed(2)} />
                    <label for='price'>Price</label> 
                    <p className={`profit-loss-text ${getStockUpDown(uid[0].percentage)}`}
                    >{profit_loss_sign}
                        <p className=''>({uid[0].percentage})</p>
                    </p>
                </div>
                <div className='d-flex flex-column'>
                    <button className='buy btn blue-blur text-light mb-2'
                    onClick={() => handleSellClick(uid[0])}>Sell</button>
                    <button className='btn btn-light border border-2' 
                    onClick={handleCancleClick}>Cancel</button>
                </div>
            </div>
        </div>
     );
}

export default SellActionWindow;