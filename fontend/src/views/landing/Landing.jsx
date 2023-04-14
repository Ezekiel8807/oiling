import './landing.css'


//import components
import Pseller from '../../components/pseller/Pseller';
import Header from '../../components/header/Header';
import Dispatch from '../../components/dispatch/Dispatch';
// import Overhead from '../../components/overhead/Overhead';





const Landing = () => {
    return( 
        <div className="landing_page">
            <Header />
            <Pseller />
            <Dispatch />
        </div>
    );
}

export default Landing;