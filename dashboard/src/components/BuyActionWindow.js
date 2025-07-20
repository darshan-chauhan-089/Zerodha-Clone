import React, { useContext, useState } from 'react';
import './BuyActionWindow.css';
import GeneralContext from './GeneralContext';
function BuyActionWindow({uid}) {

    const [stockQty, setStockQty] = useState(1);
    const [stockPrice, setStockPrice] = useState(0.0);

    const generalContext = useContext(GeneralContext);

    const handleCancleClick = () => {
        generalContext.closeBuyWindow();
    }

    return ( 
        <div className='buy-action-window  
        border rounded
        ' style={{top: uid[1]}}>
            <p className='blue-blur text-center py-3 px-1 mb-0 h5 text-light rounded-top'>{uid[0]}</p>
            <div className='p-3'>

                <div className='form-floating mb-3 border border-1 rounded-3'>
                    <input className='form-control' id='qty' type='number' placeholder=''
                    value={stockQty} onChange={(e) => setStockQty(e.target.value)}
                    min="1"></input>
                    <label for='qty'>Qty.</label>
                </div>
                <div className='form-floating mb-3 border border-1 rounded-3'>
                    <input className='form-control' id='price' type='number' placeholder=''
                    value={stockPrice} onChange={(e) => setStockPrice(e.target.value)}
                    min="0.0"></input>
                    <label for='price'>Price</label> 
                </div>
                <div className='d-flex flex-column'>
                    <button className='buy btn blue-blur text-light mb-2'>Buy</button>
                    <button className='btn btn-light border border-2' 
                    onClick={handleCancleClick}>Cancel</button>
                </div>
            </div>
        </div>
     );
}

export default BuyActionWindow;