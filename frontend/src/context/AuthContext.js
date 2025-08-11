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
    const demouser = "b3hytl0s-bpD";
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

                    const {user, status} = data;
                    if(status){
                        setUser({ username: user.username, id: user.slug });
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
        showSuccess("You have been logout.")
    };

    return(
        <AuthContext.Provider value={{user: user, token: token, login: login, logout: logout, demouser}}>
            {children}
        </AuthContext.Provider>
    )
}

// Hook to use anywhere in app
export const useAuth = () => useContext(AuthContext);