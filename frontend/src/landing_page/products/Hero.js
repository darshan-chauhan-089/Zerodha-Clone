import React from 'react';
import {Link} from 'react-router-dom';
function Hero(){
    return(
        <div className='container mt-5 mb-5 py-5 border-bottom'>
            <div className='row text-center'>
                <h1 className='mb-4 fs-1 text-muted'>Zerodha Products</h1>
                <h5 className="text-muted fs-5 mb-3">
                    Sleek, modern, and intuitive trading platforms
                </h5>
                <h6 className="text-muted fs-6">Check out our
                <Link className="link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0
                        link-underline-opacity-75-hover" to={'/products'}>  investment offerings
                                <i className="fa fa-long-arrow-right m-1" style={{position: "relative", top: "2px", color: "0d6efd", opacity: "0.6"}}></i>
                </Link>
                </h6>
            </div>
        </div>  
    );

}

export default Hero;