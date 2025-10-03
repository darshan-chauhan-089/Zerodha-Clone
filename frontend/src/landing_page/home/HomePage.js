import React from 'react';
import Hero from './Hero';
import Awards from './Awards';
import State from './State';
import Pricing from './Pricing';
import Education from './Education';
import OpenAccount from '../OpenAccount';
import { useAuth } from '../../context/AuthContext';

function HomePage() {

    const {user} = useAuth();
    return ( 
        <> 
            <Hero />
            <State />
            <Awards />
            <Pricing />
            <Education />
            {
                user ? "" : <OpenAccount />
            }
        </>
    );
}

export default HomePage;