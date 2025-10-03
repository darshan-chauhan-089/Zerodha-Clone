import React from 'react';
import Brokerage from './Brokerage';
import Hero from './Hero';
import OpenAccount from '../OpenAccount';
import { useAuth } from '../../context/AuthContext';

function PricingPage(){
    const {user} = useAuth();
    return(
        <>
            <Hero />
            {
                user ? "" : <OpenAccount />
            }
            <Brokerage />
        </>
    );

}

export default PricingPage;