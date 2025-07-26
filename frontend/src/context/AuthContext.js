import { useEffect } from 'react';
import {useContext, createContext, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import { getCookie } from '../utils/utils';
import axios from 'axios';

const AuthContext = createContext({
    user: null,
    token : "",
    login: (jwttoken, userData) => {},
    logout: () => {}
});

export const AuthContextProvider = ({children}) => {
    const navigate = useNavigate();
    const [user, setUser] = useState(null); //username
    const [token, setToken] = useState(() => getCookie("token"));

    useEffect(() => {
        const verifyToken = async () => {
            if(token){
                try{
                    const { data } = await axios.get(
                        "http://localhost:8080",
                        {
                            headers: {
                                Authorization: `Bearer ${token}`,
                            },
                        },
                    );

                    const {username, status} = data;
                    if(status){
                        setUser({ username: username });
                    }else{
                        setUser(null);
                    }
                }catch(err){
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
        setUser(userData);
    };

    const logout = () => {
        localStorage.removeItem("username");
        document.cookie = "token" + '=; Max-Age=0; path=/;';
        setToken(null);
        setUser(null);
        navigate('/'); //the previous page
    };

    return(
        <AuthContext.Provider value={{user: user, token: token, login: login, logout: logout}}>
            {children}
        </AuthContext.Provider>
    )
}

// Hook to use anywhere in app
export const useAuth = () => useContext(AuthContext);