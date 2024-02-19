import "./profile.css";

import { useState, useEffect } from "react";
import { useNavigate } from "react-router";


//components
import ChangePass from "../../components/changePass/ChangePass";
import DelAcctBtn from "../../components/delAcctBtn/DelAcctBtn";



const Profile = ({serverError, serverSuccess}) => {

    //user data store
    const [conUser, setConUser] = useState(null);

    //personal details
    const [firstname, setFirstname] = useState(conUser ? conUser.firstname : "" );
    const [lastname, setLastname] = useState(conUser ? conUser.lastname : "");
    const [phone, setPhone] = useState(conUser ? conUser.phone : "");
    const [email, setEmail] = useState(conUser ? conUser.email : "");

    // Shipping deatails
    const [city, setCity] = useState(conUser ? conUser.city : "");
    const [state, setState] = useState(conUser ? conUser.state : "");
    const [country, setCountry] = useState(conUser ? conUser.country : "");
    const [address, setAddress] = useState(conUser ? conUser.address : "");


    //button state value
    const [btnValue, setBtnValue] = useState("Update");

    //public folder
    const pf = process.env.REACT_APP_PUBLIC_FOLDER;

    // initialize useNavigation
    const navigate = useNavigate();

    //fetch user information
    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('user'));

        // Fetch data from MongoDB or your backend API
        fetch(`${process.env.REACT_APP_BACKEND_API_BASE_URL}users/${user["user"]._id}`)
            .then(response => response.json())
            .then(data => {
                setConUser(data);
                setUserData(data);
            })
            .catch(error => console.error("Error fetching current User:", error));
    }, []);


    // function to update user state
    const setUserData = (data) => {

        //personal information
        setFirstname(data.firstname);
        setLastname(data.lastname);
        setPhone(data.phone);
        setEmail(data.email);

        // Shipping deatails
        setCity(data.city);
        setState(data.state);
        setCountry(data.country);
        setAddress(data.address);
    }

    //function to handle profile update
    const handleProfileUpdate = async (e) => {
        e.preventDefault();

        //change button status to updating
        setBtnValue("Updating...");

        if(!firstname || !lastname || !phone || !email || !city || !state || !country || !address ) {

            serverError("Enter All fields!");
            setBtnValue("Update");

        }else {

            try {

                const updateInfo = { 
                    firstname, 
                    lastname, 
                    phone, 
                    email,
                    city,
                    state,
                    country,
                    address 
                };
    
                const response = await fetch(`${process.env.REACT_APP_BACKEND_API_BASE_URL}users/${conUser._id}`, {              
                    
                    // Adding method type
                    method: "PUT",
                    
                    // Adding body or contents to send
                    body: JSON.stringify(updateInfo),
                    
                    // Adding headers to the request
                    headers: {
                        "Content-type": "application/json; charset=UTF-8"
                    }
                })

                const data = await response.json(); 

                //check login status
                if (response.status === 200){
                    navigate(`/${conUser.username}`);
                    serverSuccess('Account Updated');
                    setBtnValue("Update");
    
                }else{
                    serverError(data.msg);
                    setBtnValue("Update");
                }

            }catch(e){serverError(e.message)};

        }
    }


    return(
        <div className="profile">

            <div className="profileBlock">

                <div className="pro-card">

                    <div className="pro-card-photo">
                        <img src={pf + "img/bg/d.jpg"} alt="pro_photo" />
                    </div>

                    <div className="pro-card-label">
                        <h1 id="Username">{ conUser ? conUser.username : "Username" }</h1>
                    </div>

                    <div className="pro-more-action-desktop">
                        
                        <ChangePass serverError={serverError} serverSuccess={serverSuccess} conUser={conUser}/>

                        <DelAcctBtn conUser={conUser}/>
                    </div>
                </div>

                <div className="pro-other">
                    <div className="pro-other-block">
                        <form onSubmit={ handleProfileUpdate } className="pro-info" method="POST">

                            <div className="pro-info-person">

                                <h2 className="pro-heading">Personal Details</h2>

                                <div className="input-box">
                                    <label htmlFor="firstname">Firstname: </label>
                                    <input type="text" name="firstname" id="firstname" defaultValue={firstname} placeholder="Enter Firstname" onChange={ (e) => {setFirstname(e.target.value)}}/>
                                </div>

                                <div className="input-box">
                                    <label htmlFor="lastname">Lastname: </label>
                                    <input type="text" name="lastname" id="lastname" defaultValue={lastname} placeholder="Enter Lastname" onChange={ (e) => {setLastname(e.target.value)}}/>
                                </div>

                                <div className="input-box">
                                    <label htmlFor="phone">Phone number: </label>
                                    <input type="tel" name="phone" id="phone" defaultValue={phone} 
                                    placeholder="Enter Mobile" onChange={ (e) => {setPhone(e.target.value)}}/>
                                </div>

                                <div className="input-box">
                                    <label htmlFor="email">Email address: </label>
                                    <input type="email" name="email" id="email" defaultValue={email} placeholder="Enter Email" onChange={ (e) => {setEmail(e.target.value)}}/>
                                </div>

                            </div>

                            <div className="pro-info-shipping">
                                <h2>Shipping Details</h2>

                                <div className="input-box">
                                    <label htmlFor="city">City: </label>
                                    <input type="text" name="city" id="city" defaultValue={city} placeholder="Enter City" onChange={ (e) => {setCity(e.target.value)}}/>
                                </div>

                                <div className="input-box">
                                    <label htmlFor="state">State: </label>
                                    <input type="text" name="state" id="state" defaultValue={state} placeholder="Enter State" onChange={ (e) => {setState(e.target.value)}}/>
                                </div>

                                <div className="input-box">
                                    <label htmlFor="country">Country: </label>
                                    <input type="text" name="country" id="country" defaultValue={country} placeholder="Enter Country" onChange={ (e) => {setCountry(e.target.value)}}/>
                                </div>
                                
                                <div className="input-box">
                                    <label htmlFor="address">Address: </label>
                                    <input type="text" name="address" id="address" defaultValue={address} placeholder="Enter Address" onChange={ (e) => {setAddress(e.target.value)}}/>
                                </div>
                            </div>

                            <div className="pro-update-button-block">
                                <button type="submit"> { btnValue } </button>
                            </div>
                            
                        </form>
                    </div>

                    <div className="pro-more-action-mobile">
                        
                        <ChangePass serverError={serverError} serverSuccess={serverSuccess} conUser={conUser}/>

                        <DelAcctBtn conUser={conUser}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile;