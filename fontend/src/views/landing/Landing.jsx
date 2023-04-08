import './landing.css'


//import components
import Pseller from '../../components/pseller/Pseller';
import Header from '../../components/header/Header';
// import Overhead from '../../components/overhead/Overhead';


const Landing = () => {
    return( 
        <div className="landing_page">
            <Header />
            <Pseller />
        </div>
    );
}

export default Landing;