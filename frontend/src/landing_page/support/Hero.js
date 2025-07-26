import {Link} from 'react-router-dom';
function Hero(){
    return(
        <div className='container-fluid py-5 px-md-5' style={{background: "#387ed1",}}>

            <div className='row mb-3 py-3 px-md-5'>

                <div className="col-12 col-md-7 ps-md-5">
                    <Link to={"/support"}
                        className="text-light link-underline link-underline-opacity-0 fs-5"
                        style={{fontWeight: "500", padding:"1rem 0 1rem 0", margin:"1rem 0 1rem 0"}}>
                        Support Portal
                    </Link>

                    <p className=" text-light mt-5 mb-4" style={{fontSize: "1.5rem"}}>
                        Search for an answer or browse help topics to create a ticket
                    </p>

                    <input className="p-3 mb-3" style={{width: "85%"}} placeholder="Eg: how do i activate F&O, why is my order getting rejected ..."></input>

                    <div className="mb-3 d-flex flex-wrap">
                        <Link className="me-3 mb-2 text-light link-underline link-underline-opacity-0 text-nowrap border-bottom" to={'/support'}>
                            Track account opening
                        </Link>
                        <Link className="me-3 mb-2 text-light link-underline link-underline-opacity-0 text-nowrap border-bottom" to={'/support'}>
                            Track segment activation
                        </Link>
                        <Link className="me-3 mb-2 text-light link-underline link-underline-opacity-0 text-nowrap border-bottom" to={'/support'}>
                            Intraday margins
                        </Link>
                        <Link className="text-light mb-2 link-underline link-underline-opacity-0 text-nowrap border-bottom" to={'/support'}>
                            Kite user manual
                        </Link>
                    </div>

                </div>

                <div className="col-12 col-md-5 pe-md-5">
                    <div className="d-flex justify-content-md-end">
                        <Link className="text-light link-underline link-underline-opacity-0 text-nowrap border-bottom" to={'/support'}>
                            Track tickets
                        </Link>
                    </div>
                    <div className="fs-5 mt-3 mt-md-5 mb-0 text-light"
                        style={{fontWeight: "500", padding:"1rem 0 1rem 0", margin:"1rem 0 1rem 0"}}>
                        Featured
                    </div>
                    <div>
                        <ol className="text-light">
                            <li className="mb-3">
                                <Link className="text-light link-underline-light" to={'/support'}>
                                    Surveillance measure on scrips - June 2025
                                </Link>
                            </li>
                            <li className="mb-3">
                                <Link className="text-light link-underline-light" to={'/support'}>
                                    Latest Intraday leverages and Square-off timings
                                </Link>
                            </li>
                        </ol>
                    </div>
                </div>
                
            </div>
        </div> 
    );

}

export default Hero;