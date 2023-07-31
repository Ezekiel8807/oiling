import './landing.css'


//import components
import Pseller from '../../components/pseller/Pseller';
import Header from '../../components/header/Header';
import Dispatch from '../../components/dispatch/Dispatch';
import Nseller from '../../components/nseller/Nseller';


const Landing = ({pf}) => {
    return( 
        <div className="landing_page">
            <Header />
            <Pseller pf={pf}/>
            <Dispatch />
            <Nseller pf={pf}/>
        </div>
    );
}

export default Landing;