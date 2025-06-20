import React from 'react';

function Education() {
    return ( 
        <div className='container mt-5 mb-5 py-5'>
            <div className='row'>
                <div className='col-11 col-md-6 p-3 d-flex'>
                    <img src='media/images/education.svg'
                    style={{margin:"0 auto"}}x
                    className='w-75 w-lg-100 align-self-center'></img>
                </div>
                <div className='col-12 col-md-6 p-3 d-flex flex-column justify-content-center'>
                    <h2 className='mb-4 fs-2'>Free and open market education</h2>
                    <p className='info-detail lh-base text-muted'>
                        Varsity, the largest online stock market education book in the world covering 
                        everything from the basics to advanced trading.
                    </p>
                    <a className="link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0
                        link-underline-opacity-75-hover mb-3" href="#">
                            Versity
                            <i class="fa fa-long-arrow-right m-1" style={{position: "relative", top: "2px", color: "0d6efd", opacity: "0.6"}}></i>
                    </a>
                    <p className='info-detail lh-base text-muted'>
                    TradingQ&A, the most active trading and investment community in India for all your market related queries.
                    </p>
                    <a className="link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0
                        link-underline-opacity-75-hover" href="#">
                            TredingQ&A
                            <i class="fa fa-long-arrow-right m-1" style={{position: "relative", top: "2px", color: "0d6efd", opacity: "0.6"}}></i>
                    </a>
                </div>
            </div>
        </div>
     );
}

export default Education;