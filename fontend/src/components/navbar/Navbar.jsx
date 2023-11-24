import "./navbar.css"


import { BsList } from "react-icons/bs";

const navbar = {
    'fontSize': '40px',
    'padding': "5px 20px ",
    'color': "#fff"
}


const Navbar = ({admin, user, serverSuccess, openCloseAdminMobileNav}) => {

    const userLogout = () => {
        localStorage.clear("user");
        window.location.replace("/");
        serverSuccess("logout Successful");
    }


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

        
            <a className="logo" href={ (admin === null) ? "/" : "/admin"}>Oiling<span>.</span></a>
       
            
            <div className="navbtn" onClick={ (admin === null) ? openCloseUserMobileNav : openCloseAdminMobileNav }>
                <BsList style={ navbar } />
            </div>


            { (admin === null) && 
            <nav className="navlink" id="navlink"> 
                <a href="/"> Home </a> 
                {user && <a href={`/${user["user"].username}`}> profile </a>}
                {user && <a href={`/${user["user"]._id}/orders`}> Order </a>}
                <a href="/about"> About </a> 
                {!user && <a href="/register">Register</a>} 
                {!user && <a href="/login">Login</a> }
                {user && <button className="userLogout" onClick={ userLogout }> Logout </button>}
            </nav>}

            { admin && 
            <div className="header_profilePhoto_nav">
                <img src="" alt="" />
            </div>
            } 
        </div>
    )
}

export default Navbar;