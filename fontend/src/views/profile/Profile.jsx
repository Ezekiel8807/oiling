import "./profile.css";

const Profile = ({user}) => {

    //public folder
    const pf = process.env.REACT_APP_PUBLIC_FOLDER;


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

                <div className="pro-other">
                    <div className="pro-other-block">
                        <form className="pro-info">
                            <div className="pro-info-person">
                                
                                <h2 className="pro-heading">Personal Details</h2>

                                <div className="input-box">
                                    <label htmlFor="firstname">Firstname: </label>
                                    <input type="text" name="firstname" id="firstname" />
                                </div>

                                <div className="input-box">
                                    <label htmlFor="lastname">Lastnane: </label>
                                    <input type="text" name="lastname" id="lastname" />
                                </div>

                                <div className="input-box">
                                    <label htmlFor="phone">Phone number: </label>
                                    <input type="tel" name="phone" id="phone" />
                                </div>

                                <div className="input-box">
                                    <label htmlFor="email">Email address: </label>
                                    <input type="email" name="email" id="email" />
                                </div>

                            </div>
                            <div className="pro-info-shipping">
                                <h2>Shipping Details</h2>

                                <div className="input-box">
                                    <label htmlFor="city">City: </label>
                                    <input type="text" name="city" id="city" />
                                </div>

                                <div className="input-box">
                                    <label htmlFor="state">State: </label>
                                    <input type="text" name="state" id="state" />
                                </div>

                                <div className="input-box">
                                    <label htmlFor="country">Country: </label>
                                    <input type="text" name="country" id="country" />
                                </div>
                                
                                <div className="input-box">
                                    <label htmlFor="address">Address: </label>
                                    <input type="text" name="address" id="address" />
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