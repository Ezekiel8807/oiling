import { useState } from 'react';
import './delAcctBtn.css';



const DelAcctBtn = ({conUser}) => {

    const [delBtn, setDelBtn] = useState("Delete Account")

    const handleAcctDel = (e) => {
        e.preventDefault();
        setDelBtn("Deleting...")

        fetch(`${process.env.REACT_APP_BACKEND_API_BASE_URL}user/${conUser._id}`, {

            // Adding method type
            method: "DELETE",
            
            // Adding headers to the request
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }

        })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            console.log(data);
        })
        .catch(error => console.error("Error deleting User:", error));
    }

    return(
        <div className="pro-delete-account">
            <button onClick={ handleAcctDel } type="button"> {delBtn} </button>
        </div>
    )
}
export default DelAcctBtn;