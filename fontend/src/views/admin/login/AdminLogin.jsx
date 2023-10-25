import './adminLogin.css'
import { useState } from 'react';
import { Link } from 'react-router-dom';


//components
import InlineErrorMsg from '../../../components/errorMessages/InlineErrorMsg';


const AdminLogin = ({serverError, serverSuccess, setIsAdmin}) => {

    //local state to store user inputs
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errMsg, setErrMsg] = useState("");



    //login Action
    const adminLogin = async (e) => {
        e.preventDefault();

        if(!username || !password ){
            setErrMsg("All fields required");

        }else {
            const loginInfo = { username, password };

            const response = await fetch(`http://127.0.0.1:5000/api/admin/login`, {              
                
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
            
            if(response.status === 500) {
                serverError("Sorry! something when wrong");

            }else if (response.status !== 200){
                setErrMsg(data.msg);

            }else{ 
                localStorage.setItem( "adminData", JSON.stringify({...data }));
                window.location.replace("/admin");
                serverSuccess('login Successful');
            }
        }
    }

    return(
        <div className="adminLogin">
            <form onSubmit={ adminLogin} method="post">
                <h1> Admin </h1>
                <b> Signin To Administrative Page</b>
                <InlineErrorMsg errMsg={ errMsg }/>
                <input onChange={ (e) => {setUsername(e.target.value)}} type="text" name="username" id="username" autoComplete="true" placeholder='Username' required/> 
                <input onChange={ (e) => {setPassword(e.target.value)}} type="password" name="password" id="password" autoComplete="true" placeholder='Password' required/>
                <small style={{ "marginLeft" : "5%" }}><Link to="/"  target="_self" rel="noopener noreferrer">Back to homepage </Link></small>

                <div className ="loginButtonBlock">
                    <button type="submit"> Login</button>
                </div>  
                
            </form>
        </div>
    )

}

export default AdminLogin;