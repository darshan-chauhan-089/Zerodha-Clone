import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import axios from "axios";

function Profile() {

    const {user} = useAuth();
    const [userData, setUserData] = useState({});

    useEffect(() => {
        axios.get(`http://localhost:8080/${user.id}/profile`).then((res) => {
            console.log("userData", userData);
            setUserData(res.data);
        })
    }, [])

    return ( 
        <div className="profile-container">
            <div className="header-container pb-4 mb-5">
                <h2 className='border-bottom fs-3 fs-md-4 fw-light pb-3 mb-4'>Profile</h2>
                <div className="header-info-container d-flex">
                    <img className="" style={{borderRadius: '50%', width: '110px', height: '105px'}} src='/media/userprofile_photo.png' />
                    <p className=" fs-3 fs-md-4 align-self-center ms-5">{user.username}</p>
                </div>
            </div>
            <div className="account-container ">
                <h2 className='border-bottom fs-3 fs-md-4 fw-light pb-3 mb-4'>Account</h2>
                <div className="container ms-4 text-nowrap px-4" style={{maxWidth: '500px' ,justifyContent: "start"}}>

                    <div className="row mb-3 fs-5">
                        <div className="col opacity-8">E-mail</div>
                        <div className="col">{userData.email}</div>
                    </div>
                    <div className="row mb-3 fs-5">
                        <div className="col opacity-8">Username</div>
                        <div className="col">{userData.username}</div>
                    </div>
                    <div className="row mb-3 fs-5">
                        <div className="col opacity-8">Password</div>
                        <div className="col">**************</div>
                    </div>
                    
                </div>
            </div>
        </div>
     );
}

export default Profile;