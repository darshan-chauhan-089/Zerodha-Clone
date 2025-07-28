import React, { useEffect, useState } from 'react';
import {Route, RouterProvider, Routes, createBrowserRouter, useParams} from "react-router-dom";
import Home from './Home';
import { AuthContextProvider } from '../context/AuthContext';
import ContextWrapper from './ContextWrapper';
import Layout from './Layout';
import Summary from './Summary';
import Dashboard from './Dashboard';
import Orders from './Orders';
import Holdings from './Holdings';
import Positions from './Positions';
import Funds from './Funds';

function Apps() {
    // const [loading, setLoading] = useState(true);
    // const [authenticated, setAuthenticated] = useState(false);

    // useEffect(() => {
    //     const params = new URLSearchParams(window.location.search);
    //     const tokenFromUrl = params.get("token");

    //     if (tokenFromUrl) { 
    //         window.history.replaceState({}, document.title, "/"); // Clean URL
    //     }

    //     verifyToken(tokenFromUrl, setAuthenticated, setLoading);
    // }, []);

    // if(loading) return <h1>Verifying</h1>;

    const router = new createBrowserRouter([
        {
            path: "/:userId",
            // loader: ({params}) => params.userId,
            element: 
                <ContextWrapper>
                    <Layout />
                </ContextWrapper>,
            children: [
                {
                    path: '',
                    element: <Dashboard />,
                    children: [
                        {
                            // index: true,
                            path: 'dashboard',
                            element: <Summary />
                        },
                        {
                            path: 'orders',
                            element: <Orders />
                        },
                        {
                            path: 'holdings',
                            element: <Holdings />
                        },
                        {
                            path: 'positions',
                            element: <Positions />
                        },
                        {
                            path: 'funds',
                            element: <Funds />
                        }
                    ]
                },
            ]
            
        }
    ])

    return ( 
        <RouterProvider router={router} />
    );
    // return ( 
    //     authenticated && 
    //         (
    //         <BrowserRouter>
    //             <AuthContextProvider>
    //                 <Routes>
    //                     <Route path='/:userId/*'
    //                     loader={(params) => params.userId}
    //                     element={
    //                         <ContextWrapper>
    //                             <Home />
    //                         </ContextWrapper>
    //                     } />  
    //                 </Routes>
    //             </AuthContextProvider>
    //         </BrowserRouter>
    //         )
    //  );
}

export default Apps;