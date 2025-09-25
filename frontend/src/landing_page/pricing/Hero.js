function Hero(){
    return(
        <div className='container mt-5 mb-5 py-5'>
            <div className='row text-center pt-2 pb-5'>
                <h1 className='mb-3' style={{fontSize: "2.75rem", opacity: "0.85", letterSpacing: "1px"}}>Charges</h1>
                <h5 className="opacity-50 fs-4 mb-3 fw-normal">
                    List of all charges and taxes
                </h5>
                
            </div>
            <div className='row justify-content-center pt-5 mt-5 mb-3'>
                

                <div className="col-12 col-md-4 col-lg-3 text-center p-2">
                    <img className="" src="media/images/pricing0.svg" alt="" style={{width: "250px", height: "180px"}}></img>
                    <h1 style={{fontSize: "1.75rem"}} className='mt-5 mb-4'>Free equity delivery</h1>
                    <p className='text-muted text-center lh-4 p-2' >
                        All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.
                    </p>
                </div>
                <div className="col-12 col-md-4 col-lg-3 text-center p-2">
                    <img className="" src="media/images/other-trades.svg" alt="" style={{width: "250px", height: "180px"}}></img>
                    <h1 style={{fontSize: "1.75rem"}} className='mt-5 mb-4 text-lg-nowrap'>Intraday and F&O trades</h1>
                    <p className='text-muted text-center lh-4 p-2' >
                    Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.
                    </p>
                </div>
                <div className="col-12 col-md-4 col-lg-3 text-center p-2">
                    <img className="" src="media/images/pricingMF.svg" alt="" style={{width: "250px", height: "180px"}}></img>
                    <h1 style={{fontSize: "1.75rem"}} className='mt-5 mb-4'>Free direct MF</h1>
                    <p className='text-muted text-center lh-4 p-2' >
                    All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.
                    </p>
                </div>
                

            </div>
        </div> 
    );

}

export default Hero;