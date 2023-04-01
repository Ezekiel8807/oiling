import Logo from "../logo/Logo";
import "./navbar.css"


import { BsList } from "react-icons/bs";

const navbar = {
    'fontSize': '40px',
    'padding': "5px 20px ",
    'color': "#fff"
}


const Navbar = () => {


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

            <div className="navbtn" onClick={ openCloseNav }>
                <BsList style={ navbar } />
            </div>

            <div className="nav-logo">
                <Logo />
            </div>

            

            <div className="navlink" id="navlink">
                <a href="/">Become a Seller</a>  
                <a href="/">Become a Dispatcher</a> 
                <a href="/">Sign In</a> 
                <a href="/">Join</a>   
            </div>
            
        </div>
    )
}

export default Navbar;