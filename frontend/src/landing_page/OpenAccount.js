import React from 'react';
import {Link} from 'react-router-dom';
function OpenAccount() {
    return ( 
        <div className='container mb-5 mt-5 py-5'>
            <div className='row text-center'>
                <h1 className='mb-4 fs-2'>Open a Zerodha account</h1>
                <p className='mb-4'>Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.</p>
                <Link to={"/signup"}>
                    <button style={{width: "fit-content" , margin: "0 auto"}}
                    className='btn btn-primary px-4 py-2 bg-blue fs-5'>Sing up for free</button>
                 </Link>
            </div>
        </div>  
     );
}

export default OpenAccount;