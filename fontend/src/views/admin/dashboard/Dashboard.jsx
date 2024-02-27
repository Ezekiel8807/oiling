import './dashboard.css';

//components 
import Sider from '../../../components/sider/Sider';
// import OrderCard2 from '../../../components/orderCard2/OrderCard2';


const Dashboard = ({pf, serverSuccess, admin }) => {

    return (
        <div className="dashboard">

            <main className='-board'>
                <Sider pf={ pf } serverSuccess={serverSuccess} admin={admin}/>

                <div className="main-content">
                    <div className="main-block-content">
                        <h1 id='dash_heading' className='dash_heading'>New Orders</h1>

                        <div id="sub-content" className="sub-content">
                            {/* <OrderCard2 serverSuccess={serverSuccess}/> */}
                        </div>
                    </div>
                </div>
            </main>

        </div>
    )
}

export default Dashboard;