import React, {useEffect, useState} from 'react';
import {useNavigate} from "react-router-dom";
import {useCookies} from "react-cookie";
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
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