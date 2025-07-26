import { createContext, useContext, useEffect, useState } from "react";
import axios from 'axios';

const AuthContext = createContext();

export const AuthContextProvider = ({children}) => {

    const [user, setUser] = useState(null);
    console.log("user: ", user);
    const [token , setToken] = useState(localStorage.getItem("token"));
    console.log("token: ", token);

    useEffect(() => {
        const verifyToken = async () => {
            if(token){
                try{
                    const {data} = await axios.get(
                        "http://localhost:8080", 
                        {
                            headers: {
                                Authorization: `Bearer ${token}`,
                            },
                        },
                    );
                    const { status, username } = data;
                    console.log("status" , status);
                    if(status){
                        localStorage.setItem("username", username);
                        setUser({ username: username });
                    }else{                        
                        logout();
                    }
                }catch(err){
                    alert("Invalid User!!");
                    logout();
                }
            }else{
                setUser(null);
            }
        }
        verifyToken();
    }, [token]);

    const logout = () => {
        localStorage.removeItem("token");
        setToken(null);
        setUser(null);
        window.location.href = "http://localhost:3000/login";
    }


    return <AuthContext.Provider value={{user, token, logout}}>
        {children}
    </AuthContext.Provider>
}

export const useAuth = () => useContext(AuthContext);