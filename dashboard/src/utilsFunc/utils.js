import axios from 'axios';
import { useData } from '../context/DataContext';
import { useAuth } from '../context/AuthContext';
export const getStockUpDown = (param) => {
    return param === 0 || 0.0 || 0.00 ? "text-dark" : param > 0 ? "stock_up_color" : "stock_down_color";
}
export const getDisplayNoneInline = (param) => {
    return param ? "d-inline" : "d-none";
}

export const search = (event, data, setData) => {
    const query = event.target.value.toUpperCase();
    console.log("query: ", query);
    let filteredData = data.filter((item) => item.name.includes(query));
    if(filteredData.length === 0){
        filteredData = ["searchEmpty"];
    }
    setData(filteredData);
}

export const handleSort = (columnKey, sortConfig, setSortConfing, data, setData) => {
    let direction = 'asc';

    // Toggle direction if same column is clicked again
    if (sortConfig.key === columnKey && sortConfig.direction === 'asc') {
      direction = 'desc';
    }

    const sortedData = [...data].sort((a, b) => {
        if(typeof a[columnKey] === "string"){
            return direction === "asc" 
            ? a[columnKey].localeCompare(b[columnKey]) : 
            b[columnKey].localeCompare(a[columnKey]);
        }else{
            return direction === "asc" 
            ? a[columnKey] - b[columnKey] : 
            b[columnKey] - a[columnKey];

        }
    });

    setData(sortedData);
    setSortConfing({key: columnKey , direction});
}

export const formatCompactNumber = (number) => {
    const formatter = new Intl.NumberFormat('en-US', {
        notation: "compact", // Use compact notation (e.g., K, M, B)
        compactDisplay: "short" // Use short abbreviations (e.g., K, not thousands)
    });
    return formatter.format(number);
}

export const getCookie = (name) =>  {
  const cookieString = document.cookie;
  const cookies = cookieString.split("; ");
  const found = cookies.find(row => row.startsWith(name + "="));
  return found ? found.split("=")[1] : null;
}

export const verifyToken = async (token, setAuthenticated, setLoading) => {
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
            const { status } = data;
            console.log("status" , status);
            if(status){
                localStorage.setItem("token", token);
                setAuthenticated(true);
                setLoading(false);
            }else{                        
                window.location.href = "http://localhost:3000/login";
            }
        }catch(err){
            console.error("Verifytoken error: " , err);
            window.location.href = "http://localhost:3000/login";
        }
    }else{
        window.location.href = "http://localhost:3000/login";
    }
}

// export const placeOrder = async (itemInfo, stockQty) => {
//     const {user} = useAuth();
//     const {newOrder, setNewOrder} = useData();
//      try{
//         console.log("itemInfo in BuyActionWindow: ", itemInfo); 
//         await axios.post(
//             `http://localhost:8080/${user.id}/orders`,
//             {
//                 ...itemInfo,
//                 qty: stockQty,  
//                 time: new Date()
//             }
//         ).then((res) => {
//             console.log("result", res.data);
//             // generalContext.placeNewOrder({...itemInfo, updatedAt: Date.now()});
//             setNewOrder({...itemInfo, updateAt: Date.now()})
            
//             // console.log("in BuyActionWindow: ", generalContext.newOrder);
//             console.log("in BuyActionWindow: ", newOrder);
//             showSuccess(`Buy order placed successfully for ${itemInfo.name}`);
//         })

//         handleCancleClick();
//     }catch(err){
//         console.log(err);
//     }
// }

export const decideProfitOrLoss = (price, qty) => {
    const POrL = Math.floor(Math.random() * 10) ; 

    const percentage = parseFloat(Math.random().toFixed(2)); 
    // console.log("percentage: ", percentage);
    // return percentage of either profit or loss for 1 qty of selected stock 
    
    if(POrL >= 5){ // profit
        return {
            percentage: percentage, 
            netPrice: (price + price*percentage) * qty
        }
    }else{
        return {
            percentage: -percentage, 
            netPrice: (price + price*(-percentage)) * qty
        };
    }

} 