import React from "react";
import './logo.css';


const Logo = () => {

    //public folder
    const pf = process.env.REACT_APP_PUBLIC_FOLDER;

    return( 
        <div className="logo">
            <img src={ pf + "img/logo/palmOil.png"} alt="palmOil" />
        </div>
    );
}

export default Logo;