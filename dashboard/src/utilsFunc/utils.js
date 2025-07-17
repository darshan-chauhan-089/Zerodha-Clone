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