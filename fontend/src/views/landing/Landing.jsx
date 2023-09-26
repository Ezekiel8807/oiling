import './landing.css'


//import header navBar and footer
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';


//import components
import Header from '../../components/header/Header';
import Order from '../../components/order/Order';


const Landing = ({ pf, vendors}) => {
    return( 
        <div className="landing_page">
            <Navbar  pf={pf} />
            <Header />
            <Order />
            <Footer />
        </div>
    );
}

export default Landing;