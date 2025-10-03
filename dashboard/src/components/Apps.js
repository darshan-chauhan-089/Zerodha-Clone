import React from 'react';
import {Navigate, RouterProvider, createBrowserRouter} from "react-router-dom";
import ContextWrapper from './ContextWrapper';
import Layout from './Layout';
import Summary from './Summary';
import Dashboard from './Dashboard';
import Orders from './Orders';
import Holdings from './Holdings';
import Positions from './Positions';
import Funds from './Funds';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Trades from './Trades';
import Profile from './Profile';
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
                            index: true, // When no child path is provided
                            // element: <Navigate to="dashboard" replace />
                            element: <Navigate to='dashboard' replace />
                        },
                        {
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
                        },
                        {
                            path: 'trades',
                            element: <Trades />
                        },
                        {
                            path: 'profile',
                            element: <Profile />
                        }
                    ]
                },
            ]
            
        }
    ])

    return ( 
        <>
            <RouterProvider router={router} />
            <ToastContainer
                position="top-right"
                autoClose={1500}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
        </>
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