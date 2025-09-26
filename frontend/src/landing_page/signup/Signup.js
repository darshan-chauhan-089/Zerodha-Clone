import React , {useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import axios from 'axios';
import { getCookie } from '../../utils/utils';
import { useAuth } from '../../context/AuthContext';
import { showError, showSuccess } from '../../utils/toast';

function Signup(){
    const {login} = useAuth();
    const navigate = useNavigate();
    const [inputVal, setInputVal] = useState({
        email: "",
        username: "",
        password: "",
    });

    const {email, username, password} = inputVal;

    const handleOnChange = (e) => {
        const {name , value} = e.target;
        setInputVal({
            ...inputVal, 
            [name] : value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            const { data } = await axios.post(
                `${process.env.API_URL}/signup`,
                {
                    ...inputVal
                },
                { withCredentials: true }
            );

            const { success, message } = data;
            if(success){
                login(getCookie('token'), {username: username});
                showSuccess('Account created successfully.');
                setTimeout(() => {
                    navigate("/"); // it can be updated/improve from navigate previous page when it's done
                }, 2000);
            }else{
                showError("Signup failed. Try again later!");
            }
        }catch(err){
            console.log(err);
        }
        setInputVal({
            ...inputVal, 
            email: "",
            username: "",
            password: ""
        });
    };

    const handleReset = (e) => {
        setInputVal({
            ...inputVal, 
            email: "",
            username: "",
            password: ""    
        });
    }

    return(
        <div className="grantparent-div-form my-5 mx-2 " style={{height: '70vh'}}>
            
            <div className="parent-div-form">
                <h2>Sign Up</h2>


                <form onSubmit={handleSubmit}  className="needs-validation" noValidate>

                    <div className="mb-2">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input type="email" className="form-control" id="email" name="email" 
                        placeholder="abc@example.com" value={email} onChange={handleOnChange} required />
                        <div className="valid-feedback">
                            acceptable
                        </div>
                        <div className="invalid-feedback">
                            Please enter valid email
                        </div>
                    </div>
                
                    <div className="mb-2">
                        <label htmlFor="username" className="form-label">Username</label>
                        <input type="text" className="form-control" id="username" name="username" 
                        placeholder="manoj123" value={username} onChange={handleOnChange} required />
                        <div className="valid-feedback">
                            acceptable
                        </div>
                        <div className="invalid-feedback">
                            Please enter valid username
                        </div>
                    </div>
                    
                    <div className="mb-5">
                        <label htmlFor="password" className="form-label">Password</label>
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
                        <button type="submit" className="btn btn-primary submit" >Sign Up</button>
                        <button type="reset" className="btn btn-secondary reset" onClick={handleReset}>Reset</button>
                    </div>

                    <span className ='text-center'>
                        <p className =''>
                            Already have an account ?
                            <Link to={"/login"} className =' ms-2 link-underline link-underline-opacity-50 fw-semibold text-primary'>Login</Link>
                        </p>
                    </span>

                </form>
            </div>
        </div>
    );

}

export default Signup;