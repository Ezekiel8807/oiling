import './dashboard.css';
import { useEffect, useState } from 'react';

//components
import Sider from '../../../components/sider/Sider';
import OrderCard2 from '../../../components/orderCard2/orderCard2';


const Dashboard = ({pf, serverSuccess, admin }) => {

    const [orders, setOrders] = useState([]);

    //get all orders
    const getOders =  async () => {
        const response = await fetch(`http://127.0.0.1:5000/api/admin/order`)

        const data = await response.json();

        //check response status
        if (response.status !== 200){
            return console.log(data.msg);

        }else{ 
            localStorage.setItem( "orders", JSON.stringify([...data]));
        }
    } 


    const getAllNewOrders = () => {
        const allOrders = JSON.parse(localStorage.getItem("orders"));

        const newOrders = allOrders.filter(order => order.status === "new");
        setOrders(newOrders);
    }

    useEffect( () => {
        getOders();
        getAllNewOrders()
    },[])
    


    return (
        <div className="dashboard">
            <main className='-board'>
                <Sider pf={ pf } serverSuccess= {serverSuccess} admin={admin}/>
                <div className="main-content">
                    <h1 id='dash_heading' className='dash_heading'>New Orders</h1>

                    <div id="sub-content" className="sub-content">
                        <OrderCard2 orders={orders}/>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Dashboard;