import "./profile.css";

const Profile = ({user}) => {

    //public folder
    const pf = process.env.REACT_APP_PUBLIC_FOLDER;


    return(
        <div className="profile">

            <div className="profileBlock">
                <div className ="profileStatus">
                    <div className="user-online-indicator is-online " data-user-id="103748313">
                        <i class="dot">·</i>Online
                    </div>
                </div>
                <div className="pro_photo">
                    <img src={pf + "img/bg/d.jpg"} alt="pro_photo" />
                </div>

                <div class="user-profile-label">
                    <label htmlFor="Username"><h2 id="Username">{user["user"].username}</h2></label>
                </div>

                <div className="profile_others">
                    <table>
                        <tr>
                            <td>City: </td>
                            <td>Sano Ota</td>
                        </tr>
                        <tr>
                            <td>Country: </td>
                            <td>Nigeria</td>
                        </tr>
                        <tr>
                            <td>Join Since: </td>
                            <td>may 2020</td>
                        </tr>
                    </table>
                </div>
            </div> 

                        <div className="otherInfo">
                            <div className="discription">
                                
                                <div className="discBox">
                                    <b>Discription</b>
                                    <span>Edit Discription</span>
                                </div>

                                <div className="discForm">
                                    <textarea></textarea>
                                    <div className="discFormButton"> 
                                        <button className="cancle">Cancel</button>
                                        <button className="update">Update</button>
                                    </div>
                                </div>

                                <p className="discContent">
                                I'm a Graphics designer, Web designer, and App developer currently a student at Olusegun Agagun University Of Science And Technology, 
                                Nigeria. My interests range from design to programming.
                                </p>
                            </div>

                            <div className="language">
                                <div className="discBox">
                                    <b>Languages</b>
                                    <span>Add New</span>
                                </div>

                                <ul>
                                    <li>English - Basic</li>
                                    <li>Yoruba - Basic</li>
                                </ul>
                            </div>
                        </div>  
 



                        <div className="gigNav">
                            <ul>
                                <li></li>
                                <li></li>
                                <li></li>
                            </ul>
                        </div>




            <div className="profileDisc">
            </div>       
        </div>
    )
}

export default Profile;