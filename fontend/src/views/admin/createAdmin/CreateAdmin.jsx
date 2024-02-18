import "./createAdmin.css";


import { useState } from "react";
import { useNavigate } from "react-router";


//components
import Sider from '../../../components/sider/Sider';
import InlineErrorMsg from "../../../components/errorMessages/InlineErrorMsg";


const CreateAdmin = ({pf, serverSuccess, serverError, admin}) => {

    //local state to store user inputs
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errMsg, setErrMsg] = useState("");


    //navigation
    const navigate = useNavigate();


    const createAdmin = async(e) => {
        e.preventDefault();

        const adminInfo = { username, email, password };
        const response = await fetch(`${process.env.REACT_APP_BACKEND_API_BASE_URL}admins/register`, {              
            
            // Adding method type
            method: "POST",
            
            // Adding body or contents to send
            body: JSON.stringify(adminInfo),
            
            // Adding headers to the request
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })

        const data = await response.json(); 

        //check radmin registration status
        if(response.status === 500) {
            serverError(data.msg);

        }else if (response.status !== 201){
            setErrMsg(data.msg);

        }else { 
            setUsername("");
            setEmail("");
            setPassword("");
            navigate("/admin/adminList");
            serverSuccess(data.msg);
        }
    }

    return(
        <div className="createAdmin">
            <main className='-board'>
                <Sider pf={ pf } serverSuccess= {serverSuccess} admin={admin} />

                <div className="main-content">
                    <div className="main-block-content">

                        <h1 id='dash_heading' className='dash_heading'>Create Admin</h1>

                        <div id="sub-content" className="sub-content">
                            
                            <form className="adminForm" method="Post">
                                <InlineErrorMsg errMsg={ errMsg }/>
                                <input onChange={ (e) => {setUsername(e.target.value)}} type="text" name="username" id="username" value={username} placeholder="Admin Username" required/>
                                <input onChange={ (e) => {setEmail(e.target.value)}} type="email" name="email" id="email" value={email} placeholder="Admin Email"/>
                                <input onChange={ (e) => {setPassword(e.target.value)}} type="password" name="password" id="password" value={password} placeholder="Admin Password" required/>
                                <button onClick={createAdmin} type='submit'>Create Admin</button>
                            </form>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default CreateAdmin;