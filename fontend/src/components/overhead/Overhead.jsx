import React from "react";
import './overhead.css';

import { BsTelephoneFill } from "react-icons/bs";


const Overhead = () => {
    return( 
        <div className="overhead">
            <span className="call"><BsTelephoneFill className="call_icon"/> <a href="tel:+">08100196214</a><a href="tel:+">08100196214</a></span>
            <div className="over_container">
                <ul className="overhead_items">
                    <li className="item">a</li>
                    <li className="item">b</li>
                    <li className="item">c</li>
                </ul>
            </div>
        </div>
    );
}

export default Overhead;