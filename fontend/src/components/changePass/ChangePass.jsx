import "./changePass.css";

import { useState } from "react";


const ChangePass = ({serverError, serverSuccess, conUser}) => {

    //password changing data
    const [oldPass, setOldPass] = useState("");
    const [newPass, setNewPass] = useState("");
    const [passBtn, SetPassBtn] = useState("change");

    //function to handle password update
    const handleChangePassword = async (e) => {
        e.preventDefault();
        SetPassBtn("Processing...")


        if(!oldPass || !newPass ){
            serverError("All fields required!");
            SetPassBtn("Update")

        }else{

            const userId = conUser._id;
    
            const passInfo = {
                oldPass,
                newPass,
                userId,
            }

            try{
                const response = await fetch(`${process.env.REACT_APP_BACKEND_API_BASE_URL}users/changePass`, {              
                    
                    // Adding method type
                    method: "PUT",
                    
                    // Adding body or contents to send
                    body: JSON.stringify(passInfo),
                    
                    // Adding headers to the request
                    headers: {
                        "Content-type": "application/json; charset=UTF-8"
                    }
                })

                const data = await response.json();


                if(response.status !== 200){
                    SetPassBtn("Update");
                    serverError(data.msg);

                }else{
                    SetPassBtn("Update");
                    window.location.reload();
                    serverSuccess(data.msg);
                }
    
            }catch(e){serverError(e.msg)};
        }
    }
    

    return(
        <div className="pro-change-pass-block">
            
            <h2>Change password</h2>

            <form onSubmit={ handleChangePassword } method="POST">
                <input type="password" placeholder="Enter old password" onChange={ (e) => {setOldPass(e.target.value)}}/>
                <input type="password" placeholder="Enter new password" onChange={ (e) => {setNewPass(e.target.value)}}/>

                <div className="pro-change-passBtn">
                    <button type="submit"> {passBtn} </button>
                </div>
            </form>
        </div>
    )
}

export default ChangePass;