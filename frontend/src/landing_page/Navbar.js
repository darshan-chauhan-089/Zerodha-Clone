import {useState} from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

function Navbar() {

    const [activeLink, setActiveLink] = useState(0);
    console.log(activeLink);

    const {user, logout} =  useAuth();
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

                        {
                            user ? 
                                <li className="nav-item py-1 px-3">
                                    <Link className="nav-link" onClick={logout}>Logout</Link>
                                </li> :
                                <>
                                    <li className="nav-item py-1 px-3">
                                        <Link className={`nav-link ${activeLink === 1 ? 'text-primary' : ""} `} onClick={() => setActiveLink(1)} to='/signup'>Signup</Link>
                                    </li> 
                                    <li className="nav-item py-1 px-3">
                                        <Link className={`nav-link ${activeLink === 2 ? 'text-primary' : ""} `} onClick={() => setActiveLink(2)} to='/login'>Login</Link>
                                    </li> 
                                </>

                        }
                        <li className="nav-item py-1 px-3">
                            <Link className={`nav-link ${activeLink === 3 ? 'text-primary' : ""} `} onClick={() => setActiveLink(3)} to='/about'>About</Link>
                        </li>
                        <li className="nav-item py-1 px-3">
                            <Link className={`nav-link ${activeLink === 4 ? 'text-primary' : ""} `} onClick={() => setActiveLink(4)} to='/products'>Products</Link>
                        </li>
                        <li className="nav-item py-1 px-3">
                            <Link className={`nav-link ${activeLink === 5 ? 'text-primary' : ""} `} onClick={() => setActiveLink(5)} to='/pricing'>Pricing</Link>
                        </li>
                        <li className="nav-item py-1 px-3">
                            <Link className={`nav-link ${activeLink === 6 ? 'text-primary' : ""} `} onClick={() => setActiveLink(6)} to='/support'>Support</Link>
                        </li>
                        
                    </ul>
                </div>
            

                
            </div>
        </nav>
    );
}

export default Navbar;