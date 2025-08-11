import React, { useState } from 'react';
import {Link, useNavigate} from 'react-router-dom';
import axios from 'axios';
import { useAuth } from '../../context/AuthContext';
import { getCookie } from '../../utils/utils';
import { showError, showSuccess } from '../../utils/toast';

function Login() {
    const {login} = useAuth();
    const navigate = useNavigate();
    const [inputVal, setInputVal] = useState({
        email: "",
        password: ""
    });

    const {email, password} = inputVal;

    const handleOnChange = (e) => {
        const {name, value} = e.target;
        setInputVal({
            ...inputVal, 
            [name] : value
        });
    };

    
    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            const {data} = await axios.post(
                "http://localhost:8080/login",
                {
                    ...inputVal
                },
                { withCredentials: true }
            );

            const {message, success, user} = data;
            if(success){
                login(getCookie('token'), {username : user.username} );
                showSuccess(`Welcome back, ${user.username}`);
                setTimeout(() => {
                    navigate("/");
                }, 2000);
            }else{
                showError("Login failed");
            }
        }catch(err){
            alert("Login failed!!");
            console.log(err);
        }

        setInputVal({
            ...inputVal,
            email: "", 
            password: ""
        });
    }

    const handleReset = (e) => {
        setInputVal({
            ...inputVal, 
            email: "",
            username: "",
            password: ""    
        });
    }

    return ( 
        <div className="grantparent-div-form mt-3 mb-5 mx-2" style={{height: '75vh'}}>
                    
            <div className="parent-div-form">
                <h2 className='pt-3 pb-4'>Login</h2>

                
                <form onSubmit={handleSubmit}  className="needs-validation" novalidate>
                    
                    <div className="mb-4 pt-3">
                        <label htmlFor="email" className="form-label fs-5">Email</label>
                        <input type="email" className="form-control" id="email" name="email" 
                        placeholder="abc@example.com" value={email} onChange={handleOnChange} required />
                        <div className="valid-feedback">
                            acceptable
                        </div>
                        <div className="invalid-feedback">
                            Please enter valid email
                        </div>
                    </div>
                                    
                    <div className="mb-5">
                        <label htmlFor="password" className="form-label fs-5">Password</label>
                        <input type="password" className="form-control" id="password" name="password"
                            placeholder="Enter your password" value={password} onChange={handleOnChange} required />
                        <div className="valid-feedback">
                            acceptable
                        </div>
                        <div className="invalid-feedback">
                            Please enter valid password
                        </div>
                    </div>  
                    
                    
                    <div className="form-submit-reset justify-content-between mx-2 mb-3 ">
                        <button type="submit" className="btn btn-primary submit" >Login</button>
                        <button type="reset" className="btn btn-secondary reset" onClick={handleReset}>Reset</button>
                    </div>

                    <span className ='text-center'>
                        <p className =''>
                            Don't have an Account ?
                            <Link to={"/signup"} className =' ms-2 link-underline link-underline-opacity-50 fw-semibold text-primary'>Sign Up</Link>
                        </p>
                    </span>

                </form>
            </div>
        </div>
     );
}


export default Login;