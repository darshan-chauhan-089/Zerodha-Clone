import {Link} from 'react-router-dom';
function Pricing() {
    return ( 
        <div className='container py-4'>
            <div className='row'>
                <div className='col-12 col-md-6 mb-3'>
                    <h1 className='info-title mb-3 fw-normal lh-base'>Unbeatable pricing</h1>
                    <p className='info-detail lh-base text-muted'>
                    We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.z
                    </p>
                    <Link className="link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0
                        link-underline-opacity-75-hover" 
                        to='/pricing'>
                            See pricing 
                                <i class="fa fa-long-arrow-right m-1" style={{position: "relative", top: "2px", opacity: "0.6"}}></i>
                    </Link>
                </div>
                
                <div className='col-0 col-md-1'></div>
                <div className='col-12 col-md-5 d-flex justify-content-evenly'>
                    <div className='fee-wrapper text-center p-3 border border-right-0 d-flex flex-column justify-content-center' 
                    style={{width: "240px", height: "570ox"}}>
                        <h1 className='mb-2'>₹0</h1>
                        <p>Free equity delivery and direct mutual funds</p>
                    </div>
                    <div className='fee-wrapper text-center p-3 border border-left-0 d-flex flex-column justify-content-center' 
                    style={{width: "240px" , height: "570ox"}}>
                        <h1 className='mb-2'>₹20</h1>
                        <p>Inraday and F&O <p className='opacity-0 m-0 p-0'>direct mutual funds</p></p>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Pricing;