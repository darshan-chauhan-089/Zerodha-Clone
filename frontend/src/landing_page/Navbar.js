import React from 'react';
import {useState, useEffect} from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { getCookie, kiteRegisterAlert } from '../utils/utils';

function Navbar() {

    const {user, logout} =  useAuth();
    useEffect(() => {
        console.log("Navbar mounted, user:", user);
        console.log("Document cookies:", document.cookie);
        console.log("getCookie result:", getCookie("token"));
    }, [user]);

    return ( 
        <nav className="navbar navbar-expand-lg bg-body-tertiary sticky-top border border-bottom">
            <div className="container-fluid px-5 py-2">

                <div className='d-flex justify-content-center align-items-center' style={{position: "relative" , right: "-60px"}}>
                    <Link className="navbar-brand " to='/'><img className='' style={{width: "8rem" , position: "relative" , top: "-6px"}} src='media/images/logo.svg' alt=""></img></Link>
                </div>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>


                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-lg-0">

                        <li className="nav-item py-1 px-3">
                            <Link className={`nav-link pb-0`} onClick={(e) => kiteRegisterAlert(e, user)} to={`${process.env.REACT_APP_ZERODHA_DASHBOARD}/${user?.id}`} ><p>Try Kite Demo</p></Link>
                        </li>
                        {
                            user ? 
                                <li className="nav-item py-1 px-3">
                                    <Link className="nav-link pb-0" onClick={logout}>Logout</Link>
                                    {/* <NavLink to='logout'  className={({isActive}) => `nav-link pb-0 ${isActive ? "text-primary": ""}`}>
                                        <p className='mb-0 p-0'>Logout</p>
                                    </NavLink> */}
                                </li> 
                                :
                                <>
                                    <li className="nav-item py-1 px-3">
                                        {/* <Link className={`nav-link pb-0 ${activeLink === 1 ? 'text-primary' : ""} `} onClick={() => setActiveLink(1)} to='/signup'>Signup</Link> */}
                                        <NavLink to='signup' onClick={(e) => logout()} className={({isActive}) => `nav-link pb-0 ${isActive ? "text-primary": ""}`}>
                                            <p className='mb-0 p-0'>Signup</p>
                                        </NavLink>
                                    </li> 
                                    <li className="nav-item py-1 px-3">
                                        {/* <Link className={`nav-link pb-0 ${activeLink === 2 ? 'text-primary' : ""} `} onClick={() => setActiveLink(2)} to='/login'>Login</Link> */}
                                        <NavLink to='login' className={({isActive}) => `nav-link pb-0 ${isActive ? "text-primary": ""}`}>
                                            <p className='mb-0 p-0'>Login</p>
                                        </NavLink>
                                    </li> 
                                </>

                        }
                        <li className="nav-item py-1 px-3">
                            {/* <Link className={`nav-link pb-0 ${activeLink === 3 ? 'text-primary' : ""} `} onClick={() => setActiveLink(3)} to='/about'>About</Link> */}
                            <NavLink to='about' className={({isActive}) => `nav-link pb-0 ${isActive ? "text-primary": ""}`}>
                                <p className='mb-0 p-0'>About</p>
                            </NavLink>
                        </li>
                        <li className="nav-item py-1 px-3">
                            {/* <Link className={`nav-link pb-0 ${activeLink === 4 ? 'text-primary' : ""} `} onClick={() => setActiveLink(4)} to='/products'>Products</Link> */}
                            <NavLink to='products' className={({isActive}) => `nav-link pb-0 ${isActive ? "text-primary": ""}`}>
                                <p className='mb-0 p-0'>Products</p>
                            </NavLink>
                        </li>
                        <li className="nav-item py-1 px-3">
                            {/* <Link className={`nav-link pb-0 ${activeLink === 5 ? 'text-primary' : ""} `} onClick={() => setActiveLink(5)} to='/pricing'>Pricing</Link> */}
                            <NavLink to='pricing' className={({isActive}) => `nav-link pb-0 ${isActive ? "text-primary": ""}`}>
                                <p className='mb-0 p-0'>Pricing</p>
                            </NavLink>
                        </li>
                        <li className="nav-item py-1 px-3">
                            {/* <Link className={`nav-link pb-0 ${activeLink === 6 ? 'text-primary' : ""} `} onClick={() => setActiveLink(6)} to='/support'>Support</Link> */}
                            <NavLink to='support' className={({isActive}) => `nav-link pb-0 ${isActive ? "text-primary": ""}`}>
                                <p className='mb-0 p-0'>Support</p>
                            </NavLink>
                        </li>
                        
                    </ul>
                </div>
            

                
            </div>
        </nav>
    );
}

export default Navbar;