import React from 'react';
import {Link, useNavigate} from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
function Universe(){
    const navigate = useNavigate();
    const {user} = useAuth();
    return(
        <div className={`container mt-5 mb-5 py-5 ${user ? "" : "border-bottom"}`}>
            <div className='row text-center'>
                <h5 className="text-center text-muted mb-5">
                    Want to know more about our technology stack? Check out the 
                    <Link to="/products"
                        className="link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0
                            link-underline-opacity-75-hover"
                    > Zerodha.tech 
                    </Link>
                    blog.
                </h5>
                <h1 className='mt-5 mb-4 fs-2 text-muted'>The Zerodha Universe</h1>
                <p className='mb-5 lh-base fs-6'>
                    Extend your trading and investment experience even further with our partner platforms
                </p>

            </div>

            <div className='row justify-content-center mb-3'>
                

                <div className="col-8 col-sm-5 col-md-4 col-lg-3 p-3 m-3 text-center">
                    <Link to="/products"
                    className="link-underline link-underline-opacity-0">
                        <img className="mb-3" src="media/images/zerodhaFundhouse.png" alt="" style={{width: "200px", height: "55.5px"}}></img>
                        <p className='text-muted footer-description text-center ' >
                            Our asset management venture
                            that is creating simple and transparent index
                            funds to help you save for your goals.
                        </p>
                    </Link>
                </div>
                <div className="col-8 col-sm-5 col-md-4 col-lg-3 p-3 m-3 text-center">
                    <Link to="/products"
                     className="link-underline link-underline-opacity-0">
                        <img className="mb-3" src="media/images/sensibullLogo.svg" alt="" style={{width: "200px", height: "55.5px"}}></img>
                        <p className='text-muted footer-description text-center ' >
                            Options trading platform that lets you
                            create strategies, analyze positions, and examine
                            data points like open interest, FII/DII, and more.

                        </p>
                    </Link>
                </div>
                <div className="col-8 col-sm-5 col-md-4 col-lg-3 p-3 m-3 text-center">
                    <Link to="/products"
                    className="link-underline link-underline-opacity-0">
                        <img className="mb-3" src="media/images/tijori.svg" alt="" style={{width: "200px", height: "55.5px"}}></img>
                        <p className='text-muted footer-description text-center ' >
                            Investment research platform
                            that offers detailed insights on stocks,
                            sectors, supply chains, and more.
                        </p>
                    </Link>
                </div>

                <div className="col-8 col-sm-5 col-md-4 col-lg-3 p-3 m-3 text-center">
                    <Link to="/products"
                    className="link-underline link-underline-opacity-0">
                        <img className="mb-3" src="media/images/streakLogo.png" alt="" style={{width: "200px", height: "55.5px"}}></img>
                        <p className='text-muted footer-description text-center ' >
                            Systematic trading platform
                            that allows you to create and backtest
                            strategies without coding.
                        </p>
                    </Link>
                </div>
                <div className="col-8 col-sm-5 col-md-4 col-lg-3 p-3 m-3 text-center">
                    <Link to="/products"
                    className="link-underline link-underline-opacity-0">
                        <img className="mb-3" src="media/images/smallcaseLogo.png" alt="" style={{width: "200px", height: "55.5px"}}></img>
                        <p className='text-muted footer-description text-center ' >
                            Thematic investing platform
                            that helps you invest in diversified
                            baskets of stocks on ETFs.
                        </p>
                    </Link>
                </div>
                <div className="col-8 col-sm-5 col-md-4 col-lg-3 p-3 m-3 text-center">
                    <Link to="/products"
                    className="link-underline link-underline-opacity-0">
                        <img className="mb-3" src="media/images/dittoLogo.png" alt="" style={{width: "140px", height: "55.5px"}}></img>
                        <p className='text-muted footer-description text-center ' >
                            Personalized advice on life
                            and health insurance. No spam
                            and no mis-selling.
                        </p>
                    </Link>
                </div>
                
            </div>

            {
                user ? "" :
                <div className="row justify-content-center mb-3">
                    <button style={{width: "fit-content" , margin: "0 auto"}} className='btn btn-primary px-4 py-2 bg-blue fs-5' 
                    onClick={() => navigate('/signup')}>
                        Sing up for free
                    </button>
                </div>
            }

        </div>  
    );

}

export default Universe;