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
                    Personal Information
                    f
                </div>
            </div>
        </div>
    )
}

export default Profile;