import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import axios from "axios";
import { getStockUpDown } from "../utilsFunc/utils";
import { useData } from "../context/DataContext";
import Wallet from "./Wallet";

function Profile() {

    const {user} = useAuth();
    const [userData, setUserData] = useState({});
    // const [walletData, setWalletData] = useState({});
    

    useEffect(() => {
        axios.get(`${process.env.API_URL}/${user.id}/profile`).then((res) => {
            console.log("userData", userData);
            setUserData(res.data);
        });

        // axios.get(`http://localhost:8080/${user.id}/wallet`).then((res) => {
        //     console.log("walletData", walletData);
        //     setWalletData(res.data);
        // });
    }, [])

    return ( 
        <div className="profile-container">
            <div className="header-container pb-4 mb-5 d-flex justify-content-around align-items-center">

                <div className="align-self-start">
                    <p className='border-bottom fs-3 fs-md-4 fw-light pb-3 mb-4'>Profile</p>
                    <div className="header-info-container d-flex">
                        <img className="" style={{borderRadius: '50%', width: '110px', height: '105px'}} src='/media/userprofile_photo.png' />
                        <p className=" fs-3 fs-md-4 align-self-center ms-5">{user.username}</p>
                    </div>
                </div>
                
                <Wallet />


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