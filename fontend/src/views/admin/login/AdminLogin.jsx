import './adminLogin.css'
import { useState } from 'react';
import { Link } from 'react-router-dom';


//components
import InlineErrorMsg from '../../../components/errorMessages/InlineErrorMsg';


const AdminLogin = ({serverError, serverSuccess, setIsAdmin}) => {

    //local state to store user inputs
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loginFormValue, setLoginFormValue] = useState("Login");
    const [errMsg, setErrMsg] = useState("");



    //login Action
    const adminLogin = async (e) => {
        e.preventDefault();
        setLoginFormValue("Authenticating...")

        if(!username || !password ){
            setErrMsg("All fields required");

        }else {
            const loginInfo = { username, password };

            const response = await fetch(`${process.env.REACT_APP_BACKEND_API_BASE_URL}admins/login/`, {              
                
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
                localStorage.setItem( "admin", JSON.stringify({...data }));
                window.location.replace("/admin");
                serverSuccess('login Successful');

            }else if (response.status === 500){
                serverError("Sorry! something when wrong") 

            }else{
                setErrMsg(data.msg);
            }
        }
    }

    return(
        <div className="adminLogin">
            <form onSubmit={ adminLogin} method="post">
                <h1> Admin </h1>
                <b> Signin To Administrative Page</b>
                <InlineErrorMsg errMsg={ errMsg }/>
                <input onChange={ (e) => {setUsername(e.target.value)}} type="text" name="username" id="username" autoComplete="true" placeholder='Username' /> 
                <input onChange={ (e) => {setPassword(e.target.value)}} type="password" name="password" id="password" autoComplete="true" placeholder='Password' />
                <small style={{ "marginLeft" : "5%" }}><Link to="/"  target="_self" rel="noopener noreferrer">Back to homepage </Link></small>

                <div className ="loginButtonBlock">
                    <button type="submit">{ loginFormValue }</button>
                </div>  
                
            </form>
        </div>
    )

}

export default AdminLogin;