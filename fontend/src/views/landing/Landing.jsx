import './landing.css'
import React from "react";


//import components
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import Pseller from '../../components/pseller/Pseller';
// import Overhead from '../../components/overhead/Overhead';


const Landing = () => {
    return( 
        <div className="landing_page">
            <Header />
            <Pseller />
            <Footer />
        </div>
    );
}

export default Landing;