import {Link} from 'react-router-dom';
function Team(){
    return(
        <div className='container mb-5 pb-5'>
            <h1 className="text-muted p-5 text-center my-3">
                The Person Behind This Project
            </h1>
            <div className='row justify-content-center'>

                {/* <div className="col-0 col-lg-1"></div> */}

                <div className='col-lg-4 d-flex flex-column align-items-center'>
                    <img src='media/images/profile_photo.jpg' className="mb-2" 
                    style={{borderRadius: "50%", width:"65%"}}></img>
                    <div className="align-self-center">
                        <h4 className="text-center text-muted my-1">Darshan Chauhan</h4>
                        <p className="text-center text-muted my-1">MERN Stack Developer, 
                            <br></br>Computer Engineering Student
                        </p>
                    </div>
                </div>
                <div className='col-lg-5 d-flex flex-column justify-content-evenly' style={{fontSize: '18px', opacity: '0.9'}}>
                    <p>
                        I am Darshan Chauhan, an aspiring software engineer passionate about 
                        full-stack web development and problem-solving.  
                    </p>

                    <p>
                        Currently, I am pursuing Computer Engineering at 
                        Vishwakarma Government Engineering College.  
                        Alongside my academics, I focus on strengthening my skills in 
                        modern web technologies like Node.js, Express, MongoDB and React.js, also DSA in java.  
                    </p>

                    <p>
                        In the past, I have taken up teaching roles and content creation 
                        projects, which helped me develop strong communication and 
                        storytelling skills in addition to technical expertise.  
                    </p>

                    <p>
                        Looking ahead, my goal is to secure an internship where I can gain 
                        real-world industry experience, contribute my skills to impactful 
                        projects, and continue growing as a developer.  
                    </p>
                    <p className='d-flex text-center align-content-center'>
                        Connect with me on
                        {/* <a className="link-primary link-underline link-underline-opacity-0" 
                            href="https://nithinkamath.me/">   Homepage  </a>/
                        <a className="link-primary link-underline link-underline-opacity-0" 
                            href="https://tradingqna.com/u/nithin/summary">  TradingQnA  </a> /
                        <a className="link-primary link-underline link-underline-opacity-0" 
                            href="https://x.com/Nithin0dha">  Twitter</a>  */}
                        <ul className='social-media-link-wrapper list-unstyled d-flex ms-3'>
                        {/* Upadate above links with your social media accounts.*/ }
                            <li className='pe-2'>
                                <Link to="https://www.linkedin.com/in/darshan-chauhan-5b9023276/">
                                <i className="fa-brands fa-linkedin-in fs-5 text-black text-muted"></i>
                                </Link>
                            </li>
                            <li className='px-2'>
                                <Link to="https://github.com/darshan-chauhan-089" >
                                    <i className="fa-brands fa-github fs-5 text-black text-muted"></i>
                                </Link>
                            </li>
                            <li className='px-2'>
                                <Link to="https://drive.google.com/file/d/15xLRzRmbqtatqPQ7vHxspVYrR-kgLICM/view?usp=sharing" >
                                    <i class="fa fa-file-text fs-5 text-black text-muted" aria-hidden="true"></i>
                                </Link>
                            </li>
                        </ul>   

                    </p>
                </div>

                {/* <div className="col-0 col-lg-2"></div> */}
            </div>
        </div>
    );

}

export default Team;