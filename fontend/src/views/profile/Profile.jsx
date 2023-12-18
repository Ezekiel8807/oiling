import "./profile.css";

import { useState } from "react";



const Profile = ({user}) => {

    const [firstname, setFirstname] = useState(user["user"].firstname);
    const [lastname, setLastname] = useState(user["user"].lastname);
    const [phone, setPhone] = useState(user["user"].phone);
    const [email, setEmail] = useState(user["user"].email);
    const [city, setCity] = useState(user["user"].city);
    const [state, setState] = useState(user["user"].state);
    const [country, setCountry] = useState(user["user"].country);
    const [address, setAddress] = useState(user["user"].address);
    const [newPassword, setNewPassword] = useState("");

    //public folder
    const pf = process.env.REACT_APP_PUBLIC_FOLDER;

    const handleProfileUpdate = (e) => {
        e.preventDefault();

        alert(`${firstname} ${lastname} ${phone} ${email} ${city} ${state} ${country} ${address}`);
    }

    const handleChangePassword = (e) => {
        e.preventDefault();

        if(!newPassword){
            alert("Enter password");

        }else {
            prompt("About to change your Password");

            alert("password changed: " + newPassword);
        }
    }


    return(
        <div className="profile">

            <div className="profileBlock">

                <div className="pro-card">

                    <div className="pro-card-photo">
                        <img src={pf + "img/bg/d.jpg"} alt="pro_photo" />
                    </div>

                    <div class="pro-card-label">
                        <h1 id="Username">{user["user"].username}</h1>
                    </div>

                    <div className="pro-more-action-desktop">
                        
                        <div className="pro-change-pass-block">
            
                            <h2>Change password</h2>

                            <form onSubmit={ handleChangePassword } method="POST">
                                <input type="text" placeholder="Enter New Password" onChange={ (e) => {setNewPassword(e.target.value)}}/>

                                <div className="pro-change-passBtn">
                                    <button type="subnit"> Change</button>
                                </div>
                            </form>
                        </div>

                        <div className="pro-delete-account">
                            <button type="button"> Delete Account </button>
                        </div>
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
                                    <label htmlFor="lastname">Lastnane: </label>
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
                                <button type="submit"> Update </button>
                            </div>
                            
                        </form>
                    </div>

                    <div className="pro-more-action-mobile">
                        
                        <div className="pro-change-pass-block">
            
                            <h2>Change password</h2>

                            <form action="">
                                <input type="text" placeholder="Enter New Password"/>

                                <div className="pro-change-passBtn">
                                    <button type="subnit"> Change</button>
                                </div>
                            </form>
                        </div>

                        <div className="pro-delete-account">
                            <button type="button"> Delete Account </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile;