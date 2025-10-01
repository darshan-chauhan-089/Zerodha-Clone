import React from 'react';
import { useEffect } from 'react';
import {useContext, createContext, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import { getCookie } from '../utils/utils';
import axios from 'axios';
import { showSuccess } from '../utils/toast';

const AuthContext = createContext({
    user: null,
    token : "",
    login: (jwttoken, userData) => {},
    logout: () => {}
});

export const AuthContextProvider = ({children}) => {
    // const demouser = "b3hytl0s-bpD";
    const navigate = useNavigate();
    const [user, setUser] = useState(null); //username
    const [token, setToken] = useState(() => getCookie("token"));

    useEffect(() => {
        const verifyToken = async () => {
            if(token){
                try{
                    const { data } = await axios.get(
                        `${process.env.REACT_APP_API_URL}/verify`,
                        {
                            headers: {
                                Authorization: `Bearer ${token}`,
                            },
                        },
                    );

                    const {user, status} = data;
                    console.log("Backend Response when verifying token: ", user, status);
                    if(status){
                        setUser({ username: user.username, id: user.slug });
                    }else{
                        setUser(null);
                    }
                }catch(err){
                    console.error("Token verification error: ", err.response?.data || err.message);
                    logout();
                }
            }else{
                setUser(null);
            }
        }
        verifyToken();
    }, [token]);

    const login = (jwtToken, userData) => {
        localStorage.setItem("username", userData.username);
        setToken(jwtToken);
        setUser({username: userData.username, id: userData.slug});
    };

    const logout = () => {
        if(localStorage.length) localStorage.removeItem("username");
        document.cookie = "token" + '=; Max-Age=0; path=/;';
        setToken(null);
        setUser(null);
        navigate('/'); //the previous page
        showSuccess("You have been logout.")
    };

    return(
        <AuthContext.Provider value={{user: user, token: token, login: login, logout: logout}}>
            {children}
        </AuthContext.Provider>
    )
}

// Hook to useanywhere in app
export const useAuth = () => useContext(AuthContext);