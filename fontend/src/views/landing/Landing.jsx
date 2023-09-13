import './landing.css'


//import header navBar and footer
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';


//import components
import Header from '../../components/header/Header';
import Dispatch from '../../components/dispatch/Dispatch';
import Nseller from '../../components/nseller/Nseller';
import Pseller from '../../components/pseller/Pseller';


const Landing = ({pf, isLogin}) => {
    return( 
        <div className="landing_page">
            <Navbar isLogin = {isLogin} pf={pf} />
            <Header />
            <Pseller />
            <Dispatch />
            <Nseller pf={pf}/>
            <Footer />
        </div>
    );
}

export default Landing;