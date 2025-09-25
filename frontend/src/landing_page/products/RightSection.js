import {Link} from 'react-router-dom';

function RightSection(
    {
        imageURL,
        ProductName, 
        description,
        btn, 
        // btnUrl
    }
){
    return(
        <div className='container mt-5 mb-5 py-4'>
            <div className='row'>
                <div className="col-0 col-lg-2"></div>
                
                <div className='col-12 col-md-5 col-lg-4 p-md-5 d-flex flex-column justify-content-center align-items-between'>
                    <div className='awards-detail-wrapper' >
                        <h1 className='text-muted mb-3 '>{ProductName}</h1>
                        <p className='mb-6 lh-base fs-6'>{description}</p>
                        
                        <div className="d-flex mb-2">
                            <Link className="me-3 link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0
                            link-underline-opacity-75-hover mb-3 text-nowrap" to={"/products"}>
                                {btn}
                                <i className="fa fa-long-arrow-right m-1" 
                                style={{position: "relative", top: "2px", color: "0d6efd", opacity: "0.6"}}></i>
                            </Link>
                        </div>
    

                    </div>
                </div>

                <div className='col-12 col-md-6 col-lg-5 p-3 d-flex'>
                    <Link to={"/products"}>
                        <img src={imageURL}
                        alt=""
                        style={{ width: "100%", margin:"0 auto"}}x
                        className='align-self-center'></img>
                    </Link>
                </div>

            </div>
        </div>
    );

}

export default RightSection;