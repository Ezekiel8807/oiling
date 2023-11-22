import './login.css'
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

//components
import InlineErrorMsg from '../../components/errorMessages/InlineErrorMsg';


const Login = ({serverError, serverSuccess}) => { 

    //local state to store user inputs
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errMsg, setErrMsg] = useState("");


    // initialize useNavigation
    const navigate = useNavigate();

    //sign in with email and password
    const signWithEmail = async (e) => {
        e.preventDefault();

        if(!username || !password ){
            setErrMsg("All fields required");

        }else {
            const loginInfo = { username, password };

            const response = await fetch(`${process.env.REACT_APP_BACKEND_API_BASE_URL}login/`, {              
                
                // Adding method type
                method: "POST",
                
                // Adding body or contents to send
                body: JSON.stringify(loginInfo),
                
                // Adding headers to the request
                headers: {
                    "Content-type": "application/json; charset=UTF-8"
                }
            })

            const data = await response.json(); 

            //check login status
            if (response.status === 200){
                navigate("/");
                serverSuccess('login Successful');
                console.log(data); 

            }else if (response.status === 500){
                serverError("Sorry! something when wrong") 

            }else{
                setErrMsg(data.msg)
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
                        <InlineErrorMsg errMsg={ errMsg }/>
                        <input onChange={ (e) => {setUsername(e.target.value)}} type="text" name="username" id="username" autoComplete="true" placeholder='Username' /> 
                        <input onChange={ (e) => {setPassword(e.target.value)}} type="password" name="password" id="password" autoComplete="true" placeholder='Password' />
                    </div>
                    
                    <small style={{ "margin" : "2% 5%", "textDecoration": "none" }}><Link to="/"  target="_self" rel="noopener noreferrer">Back to homepage </Link></small>
                    <Link className='forget' to="/forget" target="_self" rel="noopener noreferrer">Forget Password? </Link>

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