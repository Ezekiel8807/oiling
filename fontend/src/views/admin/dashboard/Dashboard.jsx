import './dashboard.css';
import { useEffect, useState } from 'react';

//components
import Sider from '../../../components/sider/Sider';
import OrderCard2 from '../../../components/orderCard2/orderCard2';


const Dashboard = ({pf, serverSuccess, admin }) => {

    const [orders, setOrders] = useState([]);


    useEffect( () => {
        fetch(`http://127.0.0.1:5000/api/admin/order`)
        .then(response => response.json())
        .then(data => {
            setOrders(data);
        })
        .catch( err => console.log(err));

    },[])
    


    return (
        <div className="dashboard">
            <main className='-board'>
                <Sider pf={ pf } serverSuccess={serverSuccess} admin={admin}/>
                <div className="main-content">
                    <h1 id='dash_heading' className='dash_heading'>New Orders</h1>

                    <div id="sub-content" className="sub-content">
                        <OrderCard2 orders={orders} serverSuccess={serverSuccess}/>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Dashboard;