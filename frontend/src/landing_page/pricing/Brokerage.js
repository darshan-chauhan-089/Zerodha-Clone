import React from 'react';
function Brokerage(){
    return(
        <div className='container py-2'>
            
            <div className='row mb-3'>

                <div className="col-12 col-md-7">
                    <h1 style={{fontSize: "1.5rem", color: "#0d6efd"}} className='mt-5 mb-4 text-center'>Brokerage Calculator</h1>
                    <ul className="">
                        <li className="lh-lg">
                            Call & Trade and RMS auto-squareoff: Additional charges of ₹50 + GST per order.
                        </li>
                        <li className="lh-lg">
                            Digital contact notes will be sent via e-mail.
                        </li>
                        <li className="lh-lg">
                            Physical copies of content notes, if required, shall be charged ₹20 per contranct note.
                            Couries charges apply. 
                        </li>
                    </ul>
                </div>
                <div className="col-12 col-md-5">
                <h1 style={{fontSize: "1.5rem", color: "#0d6efd"}} className='mt-5 mb-4 text-center'>List of charges</h1>
                    <ul className="">
                        <li className="lh-lg">
                            Digital contact notes will be sent via e-mail.
                        </li>
                        <li className="lh-lg">
                            Call & Trade and RMS auto-squareoff: Additional charges of ₹50 + GST per order.
                        </li>
                        <li className="lh-lg">
                            Physical copies of content notes, if required, shall be charged ₹20 per contranct note.
                            Couries charges apply. 
                        </li>
                    </ul>
                </div>
                
            </div>
        </div> 
    );

}

export default Brokerage