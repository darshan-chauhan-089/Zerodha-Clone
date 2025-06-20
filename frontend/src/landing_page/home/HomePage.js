import React from 'react';
import Hero from './Hero';
import Awards from './Awards';
import State from './State';
import Pricing from './Pricing';
import Education from './Education';
import OpenAccount from '../OpenAccount';

function HomePage() {
    return ( 
        <> 
            <Hero />
            <Awards />
            <State />
            <Pricing />
            <Education />
            <OpenAccount />
        </>
    );
}

export default HomePage;