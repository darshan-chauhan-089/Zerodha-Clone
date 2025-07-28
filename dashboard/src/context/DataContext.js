import { useEffect, useContext, useState } from "react";
import axios from "axios";

const { createContext } = require("react")

const DataContext = new createContext();

export const DataContextProvider = ({children, userIdFromUrl: userId}) => {
    
    const [data, setData] = useState({});

    useEffect(() => {
            axios.get(`http://localhost:8080/${userId}/holdings`).then((res) => {
            setData(res.data);
        });
    }, []);
        
    return (
        <DataContext.Provider value={{data, setData}}>
            {children}
        </DataContext.Provider>
    )
}

export const useData = () => useContext(DataContext);