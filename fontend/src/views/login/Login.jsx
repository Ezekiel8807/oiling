import './login.css'
import axios from 'axios'
import { useState } from 'react';
import { Link } from 'react-router-dom';


import ErrMsg from '../../components/errmsg/ErrMsg';


const Login = () => { 

    //local state to store user inputs
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errMsg, setErrMsg] = useState("");



    const signWithEmail = async (e) => {
        e.preventDefault();

        if(!username || !password ){
            setErrMsg("All fields required");

        }else {
            const loginInfo = {
                username,
                password
            }

            const response = await axios.post(`/e`, loginInfo);

            if(!response) {
                setErrMsg("Incoreect credentials");
            }
        }
    }



    return(
        <div className="login">
            <div className="loginBlock">

                <form onSubmit={ signWithEmail } action="" method="POST">

                    <h2 className='loginHead'>Sign In To Oily</h2>

                    <div className="login_with">
                        <button type='button'> Continue with google</button> 
                        <button type='button'> Continue with facebook </button> 
                    </div>

                    <div className="divider">
                        <span>-------------</span> <span> OR </span> <span>-------------</span>
                    </div>

                    <div className="login_">
                        <ErrMsg errMsg={ errMsg }/>
                        <input onChange={ (e) => {setUsername(e.target.value)}} type="text" name="username" id="username" placeholder='Username' required/> 
                        <input onChange={ (e) => {setPassword(e.target.value)}} type="text" name="password" id="password" placeholder='Password' required/>
                    </div>
                    <a className='forget' href="http://">Forget Password?</a>

                    <div className="loginButtonBlock">
                        <button className='loginButton' type="submit">Login</button>
                    </div>

                    <div className="login_foot">
                        <p>Not a member yet? <Link to="/register" target="_self" rel="noopener noreferrer">Sign up</Link></p>
                    </div>
                    
                </form>
            </div>

        </div>
    )
}

export default Login;