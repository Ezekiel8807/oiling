import Logo from "../logo/Logo";
import "./navbar.css"


const Navbar = () => {

    return (
        <div className="navbar">

            <div className="navbtn">

            </div>

            <Logo />

            <div className="navlink">
                <a href="/">Become a Seller</a>  
                <a href="/">Become a Dispatcher</a> 
                <a href="/">Sign In</a> 
                <a href="/">Join</a>   
            </div>
            
        </div>
    )
}

export default Navbar;