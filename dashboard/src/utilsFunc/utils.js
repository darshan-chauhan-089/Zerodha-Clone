import axios from 'axios';
export const getStockUpDown = (param) => {
    return param >= 0 ? "stock_up_color" : "stock_down_color";
}

export const search = (event, data, setData) => {
    const query = event.target.value.toUpperCase();
    setData(data.filter((item) => item.name.includes(query)));
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