import Logo from "../logo/Logo";
import "./navbar.css"


import { BsList } from "react-icons/bs";

const navbar = {
    'fontSize': '40px',
    'padding': "5px 20px ",
    'color': "#fff"
}


const Navbar = ({isLogin, pf}) => {


    //function to open and close navbar
    const openCloseNav = () => {
        let nav =  document.getElementById("navlink");

        if(nav.style.display === "block"){
            nav.style.display = "none";
        }else {
            nav.style.display = "block";
        }
    }

    return (
        <div className="navbar">
            
            { !isLogin && 
            <div className="navbtn" onClick={ openCloseNav }>
                <BsList style={ navbar } />
            </div>}

            <div className="nav-logo">
                <Logo />
            </div>

            { !isLogin && 
            <div className="navlink" id="navlink">  
                <a href="/dispatcher">Become a Dispatcher</a> 
                <a href="/register">Register</a> 
                <a href="/login">Login</a> 
  
            </div>}

            { isLogin && 
            <div className="header_profilePhoto_nav">
                <img src="" alt="" />
            </div>
            } 
        </div>
    )
}

export default Navbar;