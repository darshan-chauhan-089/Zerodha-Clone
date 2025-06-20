function Team(){
    return(
        <div className='container mb-5 mt-5 py-5'>
            <h1 className="text-muted p-5 text-center my-3">
                People       
            </h1>
            <div className='row'>

                <div className="col-0 col-lg-1"></div>

                <div className='col-lg-4 d-flex flex-column align-items-center'>
                    <img src='media/images/nithinKamath.jpg' className="mb-2" 
                    style={{borderRadius: "50%", width:"65%"}}></img>
                    <div className="align-self-center">
                        <h4 className="text-center text-muted my-1">Nithin Kamath</h4>
                        <p className="text-center text-muted my-1">Founder, CEO</p>
                    </div>
                </div>
                <div className='col-lg-5 d-flex flex-column justify-content-evenly'>
                    <p>
                        Nithin bootstrapped and founded Zerodha in 2010 to overcome the
                        hurdles he faced during his decade long stint as a trader.
                        Today, Zerodha has changed the landscape of the Indian broking
                        industry.
                    </p>
                    <p>
                        He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and 
                        the Market Data Advisory Committee (MDAC).
                    </p>
                    <p>
                        Playing basketball is his zen.
                    </p>
                    <p>
                        Connect on 
                        <a className="link-primary link-underline link-underline-opacity-0" 
                            href="https://nithinkamath.me/">   Homepage  </a>/
                        <a className="link-primary link-underline link-underline-opacity-0" 
                            href="https://tradingqna.com/u/nithin/summary">  TradingQnA  </a> /
                        <a className="link-primary link-underline link-underline-opacity-0" 
                            href="https://x.com/Nithin0dha">  Twitter</a> 
                    </p>
                </div>

                <div className="col-0 col-lg-2"></div>
            </div>
        </div>
    );

}

export default Team;