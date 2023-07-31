import { Link } from 'react-router-dom';
import './register.css'

import { axiosBaseUrl } from '../../config';
import { useState } from 'react';
import InlineErrorMsg from '../../components/errorMessages/InlineErrorMsg';





const Register = () => {

    //manage form data with react state
    const [errMsg, setErrMsg] = useState("");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    //form validation
    const handleRegister = async (e) => {

        //prevent form default behaviour
        e.preventDefault();
    
        if(!username || !email || !password ){
            setErrMsg("All fields required");

        }else {
            const registrationInfo = {
                username,
                email,
                password
            }


            const response = await axiosBaseUrl.post("auth/", registrationInfo);

            if(!response) {
                setErrMsg("Incoreect credentials");
            }
        }
    
    }

    return(
        <div className="register">
            <div className="loginBlock">

                <form action="" method="POST" onSubmit={ handleRegister }>

                    <h2 className='loginHead'>Join Us On Oily</h2>

                    <div className="login_with">
                        <button type='button'> Continue with google</button> 
                        <button type='button'> Continue with facebook </button> 
                    </div>

                    <div className="divider">
                        <span>-------------</span> <span> OR </span> <span>-------------</span>
                    </div>

                    <div className="login_">
                        <InlineErrorMsg msg={ errMsg } />
                        <input onChange={ (e) => setUsername(e.target.value)} type="text" name="username" id="username" autoComplete="true" placeholder='Username' required/> 
                        <input onChange={ (e) => setEmail(e.target.value)} type="email" name="email" id="email" autoComplete="true" placeholder='Email' required/> 
                        <input onChange={ (e) => setPassword(e.target.value)} type="password" name="password" id="password" autoComplete="true" placeholder='Password' required/>
                    </div>
                    {/* <a className='forget' href="http://">Forget Password?</a> */}

                    <div className="loginButtonBlock">
                        <button className='loginButton' type="submit">Register</button>
                    </div>

                    <div className="login_foot">
                        <p>Already a member? <Link to="/login" target="_self" rel="noopener noreferrer">Sign in</Link></p>
                    </div>
                    
                    
                </form>
            </div>
        </div>
    )
}

export default Register;