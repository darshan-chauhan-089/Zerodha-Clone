import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return ( 
        <nav className="navbar navbar-expand-lg bg-body-tertiary sticky-top border border-bottom">
            <div className="container-fluid px-5 py-2">

                <div className='d-flex justify-content-center align-items-center' style={{position: "relative" , right: "-60px"}}>
                    <Link className="navbar-brand " to='/'><img className='' style={{width: "8rem" , position: "relative" , top: "-2px"}} src='media/images/logo.svg'></img></Link>
                </div>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>


                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-lg-0">

                        <li className="nav-item py-1 px-3">
                            <Link className="nav-link" to='/signup'>Signup</Link>
                        </li>
                        <li className="nav-item py-1 px-3">
                            <Link className="nav-link" to='/about'>About</Link>
                        </li>
                        <li className="nav-item py-1 px-3">
                            <Link className="nav-link" to='/products'>Products</Link>
                        </li>
                        <li className="nav-item py-1 px-3">
                            <Link className="nav-link" to='/pricing'>Pricing</Link>
                        </li>
                        <li className="nav-item py-1 px-3">
                            <Link className="nav-link" to='/support'>Support</Link>
                        </li>
                        
                    </ul>
                </div>
            

                
            </div>
        </nav>
    );
}

export default Navbar;