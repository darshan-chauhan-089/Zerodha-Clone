import React, {useState} from 'react';
import './TopBarRight.css';
import { NavLink, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

function TopBarRight() {

    const [selectedMenu, setSelectedMenu] = useState(0);

    const [ isProfileDDOpen, setIsProfileDDOpen ] = useState(false);

    const {user} = useAuth();

    const handleMenuClick = (index) => {
        setSelectedMenu(index);
    }

    const handleProfileClick = () => {
        setIsProfileDDOpen(!isProfileDDOpen);
    }

    const menuClass = 'menu-links';
    const activeMenuClass = 'active-menu-links';
    return ( 
        <div className='topbar-right-container d-flex justify-content-between align-items-center w-100 ps-3 pe-5 border-bottom
        bg-white'>
            <div className='logo'>
                <Link to=''>
                    <img className='kite-logo align-self-center' src='/media/kite-logo.svg' style={{width: '63px', height: '18px'}}></img>
                </Link>
            </div>

            <div className='spcific-link-container'>
                <ul className='menu-list-ul list-unstyled d-flex mb-0 align-self-center'>
                    <li className='px-3'>
                        <NavLink to='holdings' className='menu-Link text-decoration-none' onClick={ () => handleMenuClick(2) }>
                            <p className= {`mb-0 ${selectedMenu === 2 ? activeMenuClass : menuClass} `}>Holdings</p>
                        </NavLink>
                    </li>
                </ul>
            </div>

            <div className='menu-list d-flex'>
                <ul className='menu-list-ul list-unstyled d-flex mb-0 align-self-center'>
                    <li className='px-3'>
                        <NavLink to='dashboard' className={({isActive}) => `menu-Link ${isActive ? activeMenuClass : menuClass}`}>
                            <p >Dashboard</p>
                        </NavLink>
                    </li>
                    <li className='px-3'>
                        <NavLink to='orders' className={({isActive}) => `menu-Link  ${isActive ? activeMenuClass : menuClass}`}>
                            <p >Orders</p>
                        </NavLink>
                    </li>
                    <li className='px-3'>
                        <NavLink to='trades' className={({isActive}) => `menu-Link  ${isActive ? activeMenuClass : menuClass}`}>
                            <p >Trades</p>
                        </NavLink>
                    </li>
                    <li className='px-3'>
                        <NavLink to='holdings' className={({isActive}) => `menu-Link  ${isActive ? activeMenuClass : menuClass}`}>
                            <p>Holdings</p>
                        </NavLink>
                    </li>
                    <li className='px-3'>
                        <NavLink to='positions' className={({isActive}) => `menu-Link  ${isActive ? activeMenuClass : menuClass}`}>
                            <p >Positions</p>
                        </NavLink>
                    </li>
                    <li className='px-3'>
                        <NavLink to='funds' className={({isActive}) => `menu-Link  ${isActive ? activeMenuClass : menuClass}`}>
                            <p >Funds</p>
                        </NavLink>
                    </li>
                    
                    {/* <li className='px-3'>
                        <NavLink to='apps' className='menu-Link' onClick={ () => handleMenuClick(5) }>
                            <p className= { selectedMenu === 5 ? activeMenuClass : menuClass }>Apps</p>
                        </NavLink>
                    </li> */}
                </ul>
                <div className='profile-link d-flex align-self-center ms-auto' onClick={handleProfileClick}>
                    <img className='mx-2 position-relative' style={{top: "3px"}} src='/media/userprofile_photo.png'></img>
                    {/* <p className='mb-0 username'>{user.username}</p> */}
                     <NavLink to='profile' className={({isActive}) => `menu-Link  ${isActive ? activeMenuClass : menuClass}`}>
                        <p className='mb-0'>{user.username}</p>
                    </NavLink>
                </div>
            </div>
        </div>
     );
}

export default TopBarRight;