import React from 'react';
function Awards() {
    return ( 
        <div className='container mt-5 mb-5 py-4'>
            <div className='row'>
                <div className='col-12 col-md-6 p-3 d-flex'>
                    <img src='media/images/largestBroker.svg'
                    alt=""
                    style={{ width: "100%", margin:"0 auto"}}x
                    className='align-self-center'></img>
                </div>
                <div className='col-12 col-md-6 p-3 d-flex flex-column justify-content-center'>
                    <div className='awards-detail-wrapper' >
                        <h2 className=''>Largest Broker of india</h2>
                        <p className='mb-5'>2+ million Zerodha clients contribute to over 15% of all retial order volumes in indial daily
                            by treding and investing :  </p>

                        <div className='investing-area-wrapper d-md-flex mb-3 ' >
                            <ul>
                                <li className='mb-2'>Futures and Options</li>
                                <li className='mb-2'>Commodity derivatives</li>
                                <li className='mb-2'>Currency derivatives</li>
                            </ul>
                            <ul>
                                <li className='mb-2'>Stock & IPOs</li>
                                <li className='mb-2'>Direct mutual funds</li>
                                <li className='mb-2'>Bonds & Gold</li>
                            </ul>
                        </div>
                        <img src='media/images/pressLogos.png'  
                        alt=""
                        style={{ width: "80%" , marginLeft: "1rem"}}></img>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Awards;