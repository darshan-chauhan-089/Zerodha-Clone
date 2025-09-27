import {Link} from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { kiteRegisterAlert } from '../../utils/utils';
function State() {
    const {user} = useAuth();
    return ( 
        <div className='container mt-5 mb-5 py-4'>
            <div className='row'>
                <div className='col-12 col-lg-6 p-3 d-flex flex-column justify-content-evenly'>
                    <div className='awards-detail-wrapper' >
                        <h2 className='mb-4'>Trust with confidence</h2>
                        <div className='info-wrapper'>
                            <h5 className='info-title mb-2 fw-normal lh-base'>Customer-first always</h5>
                            <p className='info-detail lh-base text-muted'>
                            That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores of equity 
                            investments and contribute to 15% of daily retail exchange volumes in India.
                            </p>
                        </div>
                        <div className='info-wrapper'>
                            <h5 className='info-title mb-2 fw-normal lh-base'>No spam or gimmicks</h5>
                            <p className='info-detail lh-base text-muted'>
                            No gimmicks, spam, "gamification", or annoying push notifications. 
                            High quality apps that you use at your pace, the way you like. Our philosophies.
                            </p>
                        </div>
                        <div className='info-wrapper'>
                            <h5 className='info-title mb-2 fw-normal lh-base'>The Zerodha universe</h5>
                            <p className='info-detail lh-base text-muted'>
                            Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you 
                            tailored services specific to your needs.
                            </p>
                        </div>
                        <div className='info-wrapper'>
                            <h5 className='info-title mb-2 fw-normal lh-base'>Do better with money</h5>
                            <p className='info-detail lh-base text-muted'>
                            With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, 
                            but actively help you do better with your money.
                            </p>
                        </div>
                        
                    </div>
                </div>
                <div className='col-12 col-lg-6 p-3 d-flex flex-column justify-content-evenly'>
                    <Link to={`${process.env.REACT_APP_ZERODHA_DASHBOARD}/${user?.id}`} onClick={(e) => kiteRegisterAlert(e, user)}>
                        <img src='media/images/ecosystem.png'
                        alt=""
                        style={{ width: "90%", margin:"0 auto"}}
                        className='align-self-center object-fit-contain'></img>
                    </Link>
                    <div className='btn-wrapper d-flex justify-content-evenly'>
                        <Link className="link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0
                        link-underline-opacity-75-hover" to={'/products'}>
                            Explore our products 
                                <i className="fa fa-long-arrow-right m-1" style={{position: "relative", top: "2px", opacity: "0.6"}}></i>
                        </Link>
                        <Link className="link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0
                        link-underline-opacity-75-hover" to={`${process.env.REACT_APP_ZERODHA_DASHBOARD}/${user?.id}`}
                        onClick={(e) => kiteRegisterAlert(e, user)}>
                            Try Kite demo
                                <i className="fa fa-long-arrow-right m-1" style={{position: "relative", top: "2px", opacity: "0.6"}}></i>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default State;