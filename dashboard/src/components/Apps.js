import React, { useEffect, useState } from 'react';
import {Route, Routes, BrowserRouter} from "react-router-dom";
import Home from './Home';
import { verifyToken } from '../utilsFunc/utils';
import { AuthContextProvider } from '../context/AuthContext';

function Apps() {
    const [loading, setLoading] = useState(true);
    const [authenticated, setAuthenticated] = useState(false);

    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const tokenFromUrl = params.get("token");

        if (tokenFromUrl) { 
            window.history.replaceState({}, document.title, "/"); // Clean URL
        }

        verifyToken(tokenFromUrl, setAuthenticated, setLoading);
    }, []);


    if(loading) return <h1>Verifying</h1>;

    return ( 
        authenticated && 
            (
            <BrowserRouter>
                <AuthContextProvider>
                    <Routes>
                        <Route path='/*' 
                        loading=
                        element={<Home />} />  
                    </Routes>
                </AuthContextProvider>
            </BrowserRouter>
            )
     );
}

export default Apps;