import "./navbar.css"


import { BsList } from "react-icons/bs";

const navbar = {
    'fontSize': '40px',
    'padding': "5px 20px ",
    'color': "#fff"
}


const Navbar = ({adminData, isLogin, openCloseAdminMobileNav}) => {


    //function to open and close user mobile navbar
    const openCloseUserMobileNav = () => {
        let nav =  document.getElementById("navlink");

        if(nav.style.display === "block"){
            nav.style.display = "none";
        }else {
            nav.style.display = "block";
        }
    }


    return (
        <div className="navbar">

        
            <a className="logo" href={ (adminData === null) ? "/" : "/admin"}>Oiling<span>.</span></a>
       
            
            <div className="navbtn" onClick={ (adminData === null) ? openCloseUserMobileNav : openCloseAdminMobileNav }>
                <BsList style={ navbar } />
            </div>


            { (adminData === null) && 
            <nav className="navlink" id="navlink"> 
                <a href="/"> Home </a> 
                <a href="/order"> Order </a>
                <a href="/about"> About </a> 
                <a href="/contact"> Contact </a> 
                <a href="/register">Register</a> 
                <a href="/login">Login</a> 
            </nav>}

            { isLogin && 
            <div className="header_profilePhoto_nav">
                <img src="" alt="" />
            </div>
            } 
        </div>
    )
}

export default Navbar;