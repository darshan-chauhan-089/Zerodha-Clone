function CreateTicketParts({linkData, headingData, icon}){
    return(
        
        <div className='col-sm-6 col-lg-4 mb-3 px-md-5'>

            <ul className='list-unstyled'>
                <li className='py-2'>
                    <a className='link-underline text-dark fw-normal link-underline-opacity-0' 
                        href={headingData[1]}>
                        <h3 style={{fontSize: "1.2rem", fontWeight: "400"}}>
                        <i className={icon} aria-hidden="true" style={{fontSize: "1rem"}}></i>
                            {headingData[0]}
                        </h3>
                    </a>
                </li>
                {linkData.map(([title, url], index) => (
                    <li className='py-2 ps-4' key={index}>
                        <a className='sky-blue link-underline text-dark fw-normal link-underline-opacity-0' 
                            href={url}>
                            {title}
                        </a>
                    </li>
                ))}
            </ul>
        </div>

    );

}

export default CreateTicketParts;