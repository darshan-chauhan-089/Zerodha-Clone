function EmptyYet({msg}) {
    msg = msg ? msg : "No Data Yet";
    return ( 
        <div className="empty-yet-container">
            <p>{msg}</p>
        </div>
     );
}

export default EmptyYet;