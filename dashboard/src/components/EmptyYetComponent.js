export function EmptyYet({msg}) {
    msg = msg ? msg : "No Data Yet";
    return ( 
        <div className="empty-yet-container">
            <p className="empty-msg">{msg}</p>
        </div>
     );
}

export function EmptyYetMsg({msg}) {
    msg = msg ? msg : "No Data Yet";
    return ( 
        <div className="text-center d-flex justify-content-center align-items-center">
            <p className="empty-msg">{msg}</p>
        </div>
     );
}
