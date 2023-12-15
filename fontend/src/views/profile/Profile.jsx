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
                </div>

                <div className="pro-other">
                    <form className="pro-info">
                        <div className="pro-info-person">
                            <h2>Personal Details</h2>

                            <div className="input-box">
                                <label htmlFor="firstname"></label>
                                <input type="text" name="firstname" id="firstname" />
                            </div>

                            <div className="input-box">
                                <label htmlFor="lastname"></label>
                                <input type="text" name="lastname" id="lastname" />
                            </div>

                             <div className="input-box">
                                <label htmlFor="lastname"></label>
                                <input type="tel" name="lastname" id="lastname" />
                            </div>

                        </div>
                        <div className="pro-info-shipping">
                            <h2>Shipping Details</h2>

                            <input type="text" name="firstname" placeholder="First Name"/>
                            <input type="text" name="midname" placeholder="Middle Name"/>
                            <input type="text" name="lastname" placeholder="Last Name"/>
                        </div>
                        
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Profile;