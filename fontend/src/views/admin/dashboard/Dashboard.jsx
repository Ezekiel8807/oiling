import './dashboard.css';
import { useEffect, useState } from 'react';

//components
import Sider from '../../../components/sider/Sider';
import OrderCard2 from '../../../components/orderCard2/orderCard2';


const Dashboard = ({pf, serverSuccess, admin }) => {

    const [orders, setOrders] = useState([]);


    useEffect(() => {
        fetch(`${process.env.REACT_APP_BACKEND_API_BASE_URL}admins/orders`,{

            //methods
            method: "GET",

            // Adding headers to the request
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }

        })
        .then(response => response.json())
        .then(data => {
            setOrders(data);
        })
        .catch(err => console.error("Error fetching orders:", err ));
    }, []);


    return (
        <div className="dashboard">

            <main className='-board'>
                <Sider pf={ pf } serverSuccess={serverSuccess} admin={admin}/>

                <div className="main-content">
                    <div className="main-block-content">
                        <h1 id='dash_heading' className='dash_heading'>New Orders</h1>

                        <div id="sub-content" className="sub-content">
                            <OrderCard2 orders={orders} serverSuccess={serverSuccess}/>
                        </div>
                    </div>
                </div>
            </main>

        </div>
    )
}

export default Dashboard;