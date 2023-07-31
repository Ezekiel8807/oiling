import './header.css'

import Search from '../search/Search';
// include header components
// import Logo from '../logo/Logo';
// import Divider from '../divider/Divider';
// import Navbar from '../navbar/Navbar';
// import Overhead from '../overhead/Overhead';
// import { BsSearch } from "react-icons/bs";

const Header = () => {

    // const searchbtn = {
    //     "fontWeight": "bold",
    //     "fontSize": "1em",
    //     "color": "#e41827",
    //     "padding": "10px"
    // }

    //public folder
    // const pf = process.env.REACT_APP_PUBLIC_FOLDER;

    return(
        <div className='header'>
            <div className='board'>

                <div className='div1'>

                    <div className="info">
                        <h1>Find the perfect <i>Vendor</i><br/> to get your palm oil at cheap rate.</h1>
                        <Search />
                    </div>
                </div>
             </div>
        </div>
    )
}

export default Header;