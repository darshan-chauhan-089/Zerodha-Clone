import React from 'react';
import {Link} from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { kiteRegisterAlert } from '../../utils/utils';

function Hero() {
  const {user} = useAuth();
    return ( 
      <div className={`container mb-5 mt-3 ${user ? "pb-4" : ""}`}>
        <div className='row text-center'>
            <div className='hero-img-container d-flex justify-content-center mb-4'>
                <Link className='' to={`http://localhost:3001/${user?.id}`} onClick={(e) => kiteRegisterAlert(e, user)}>
                  <img className='' src='media/images/homeHero.png' alt='Hero_Image' style={{ width: "80%" }} ></img>
                </Link>
            </div>
            <h1 className='mb-3'>Invest in everything</h1>
            <p className='mb-4'>Online platform to invest in stocks, derivatives, mutual funds, 
                ETFs, bonds, and more.</p>
            {
              user ? "" : 
              <Link to={'/signup'}>
                <button style={{width: "fit-content" , margin: "0 auto"}} 
                className='btn btn-primary pr-4 pl-4 pt-2 pb-2 bg-blue'>Sing up for free</button>
              </Link>
            }
        </div>
      </div>  
    );
}

export default Hero;