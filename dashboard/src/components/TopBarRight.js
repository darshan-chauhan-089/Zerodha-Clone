import React, {useState} from 'react';
import './TopBarRight.css';
import { Link } from 'react-router-dom';

function TopBarRight() {

    const [ selectedMenu, setSelectedMenu ] = useState(0);
    const [ isProfileDDOpen, setIsProfileDDOpen ] = useState(false);

    const handleMenuClick = (index) => {
        setSelectedMenu(index);
    }

    const handleProfileClick = () => {
        setIsProfileDDOpen(!isProfileDDOpen);
    }

    const menuClass = 'menu-links';
    const activeMenuClass = 'active-menu-links';
    return ( 
        <div className='topbar-right-container d-flex justify-content-between align-items-center w-100 ps-3 pe-5 border-bottom' style={{width: ""}}>
            <div className='logo'>
                <Link to='/'>
                    <img className='kite-logo align-self-center' src='/media/kite-logo.svg' style={{width: '63px', height: '18px'}}></img>
                </Link>
            </div>

            <div className='spcific-link-container'>
                <ul className='menu-list-ul list-unstyled d-flex mb-0 align-self-center'>
                    <li className='px-3'>
                        <Link to='/holdings' className='menu-Link text-decoration-none' onClick={ () => handleMenuClick(2) }>
                            <p className= {`mb-0 ${selectedMenu === 2 ? activeMenuClass : menuClass} `}>Holdings</p>
                        </Link>
                    </li>
                </ul>
            </div>

            <div className='menu-list d-flex'>
                <ul className='menu-list-ul list-unstyled d-flex mb-0 align-self-center'>
                    <li className='px-3'>
                        <Link to='/' className='menu-Link' onClick={ () => handleMenuClick(0) }>
                            <p className= { selectedMenu === 0 ? activeMenuClass : menuClass } >Dashboard</p>
                        </Link>
                    </li>
                    <li className='px-3'>
                        <Link to='/orders' className='menu-Link' onClick={ () => handleMenuClick(1) }>
                            <p className= { selectedMenu === 1 ? activeMenuClass : menuClass }>Orders</p>
                        </Link>
                    </li>
                    <li className='px-3'>
                        <Link to='/holdings' className='menu-Link' onClick={ () => handleMenuClick(2) }>
                            <p className= { selectedMenu === 2 ? activeMenuClass : menuClass }>Holdings</p>
                        </Link>
                    </li>
                    <li className='px-3'>
                        <Link to='/positions' className='menu-Link' onClick={ () => handleMenuClick(3) }>
                            <p className= { selectedMenu === 3 ? activeMenuClass : menuClass }>Positions</p>
                        </Link>
                    </li>
                    <li className='px-3'>
                        <Link to='/funds' className='menu-Link' onClick={ () => handleMenuClick(4) }>
                            <p className= { selectedMenu === 4 ? activeMenuClass : menuClass }>Funds</p>
                        </Link>
                    </li>
                    <li className='px-3'>
                        <Link to='/apps' className='menu-Link' onClick={ () => handleMenuClick(5) }>
                            <p className= { selectedMenu === 5 ? activeMenuClass : menuClass }>Apps</p>
                        </Link>
                    </li>
                </ul>
                <div className='profile-link d-flex align-self-center ms-auto' onClick={handleProfileClick}>
                    <img className='mx-2' src='/media/userprofile_photo.png'></img>
                    <p className='mb-0 username'>Demouser</p>
                </div>
            </div>
        </div>
     );
}

export default TopBarRight;