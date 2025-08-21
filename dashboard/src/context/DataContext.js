import { useEffect, useContext, useState, useRef } from "react";
import axios from "axios";

const { createContext } = require("react")

const DataContext = new createContext();

export const DataContextProvider = ({children, userIdFromUrl: userId}) => {
    
    const [data, setData] = useState({});
    const [walletData, setWalletData] = useState({});
    const [tradesData, setTradesData] = useState({});
    const ordersData = useRef([]);
    const openOrders = useRef([]);
    const [newOrder, setNewOrder] = useState(null);
    const [recentlySellOrder, setRecentlySellOrder] = useState(null);
    
    useEffect(() => {
        axios.get(`http://localhost:8080/${userId}/holdings`).then((res) => {
            if(res.data.holdings.length === 0){
                res.data.holdings = ["empty"];
            }
            setData(res.data);
        });

        axios.get(`http://localhost:8080/${userId}/orders`).then((res) => {
            
            ordersData.current = res.data;
            // sturcturing the API data
            openOrders.current = [];
            ordersData.current.forEach((item, index) => {
                if(item.status.toUpperCase() === "OPEN"){
                    openOrders.current.push(item);
                }
            });
        });

        axios.get(`http://localhost:8080/${userId}/wallet`).then((res) => {
            setWalletData(res.data);
            console.log("WalletData ", walletData);
        });

        axios.get(`http://localhost:8080/${userId}/trades`).then((res) => {
            if(res.data.length === 0){
                setTradesData(["empty"]);
                return;
            }
            setTradesData(["non-empty"]);
        });

        
    }, [newOrder, recentlySellOrder]);
    
    function getOrdersItem(itemId, origin) {
        // console.log("inside getOrdersItem function");
        // console.log("DataCotext openOrders: ", openOrders.current, itemId);

        if(origin){
            let j = 0;
            while(j < ordersData.current.length){
                if(itemId === ordersData.current[j][origin]){ // here itemId from holdings according to origin
                    itemId = ordersData.current[j]._id; // upadate the itemId for real one (order)
                    break;
                } 
                j++;
            }
        }
        console.log("just after finding the order itemId: ", itemId);
        let i = 0;
        while(i < openOrders.current.length){
            if(openOrders.current[i]._id === itemId){
                return openOrders.current[i];
            }
            i++;
        }

    }

    return (
        <DataContext.Provider value={{data, setData, newOrder, setNewOrder,
         recentlySellOrder, setRecentlySellOrder, openOrders, getOrdersItem,
         walletData, setWalletData, tradesData, setTradesData}}>
            {children}
        </DataContext.Provider>
    )
}

export const useData = () => useContext(DataContext);