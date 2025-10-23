import React from 'react';
function Loader({size}) {
    return ( 
        <div className='loader-container' style={{width: "50%", height: size}}>
            <div className="loader"></div>
        </div>
     );
}

export default Loader;