import { createContext, useContext, useEffect, useState } from "react";
import axios from 'axios';

const AuthContext = createContext();

export const AuthContextProvider = ({children, userIdFromUrl: userId}) => {

    const [user, setUser] = useState(null);

    useEffect(() => {
        const verifyUserId = async () => {
            if(userId){
                try{
                    const {data} = await axios.get(
                        `http://localhost:8080/${userId}`, 
                    );

                    const { status, user } = data;
                    console.log("status" , status);
                    if(status){
                        setUser({ username: user.username, id: user.slug });
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
        verifyUserId();
    }, [userId]);

    const logout = () => {
        setUser(null);
        window.location.href = "http://localhost:3000/login";
    }

    return ( user ? <AuthContext.Provider value={{user, logout}}>
        {children}
    </AuthContext.Provider> : <h1>Verifying...</h1>);
}

export const useAuth = () => useContext(AuthContext);