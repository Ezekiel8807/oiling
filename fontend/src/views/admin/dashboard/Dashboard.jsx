import './dashboard.css';
//components
import Sider from '../../../components/sider/Sider';
import Header from '../../../components/navbar/Navbar';
import NewOrder from '../../../components/newOrder/NewOrder';
import { useEffect, useState } from 'react';


const Dashboard = ({pf, serverSuccess, adminData }) => {

    const getOrders = JSON.parse(localStorage.getItem("orders"));
    const [orders, setOrders] = useState( getOrders != null ? getOrders : []);



    //get all orders
    const getOders =  async () => {
        const response = await fetch(`http://127.0.0.1:5000/api/admin/order`)

        const data = await response.json();

        //check login status
        if (response.status !== 200){
            return console.log(data.msg);

        }else{ 
            localStorage.setItem( "orders", JSON.stringify([...data]));
            const orders = JSON.parse(localStorage.getItem("orders"));
            setOrders(orders);
        }
    } 

    useEffect( () => {
        getOders();
    },[])
    


    return (
        <div className="dashboard">
            <Header adminData={adminData} />
            <main className='-board'>
                <Sider pf={ pf } serverSuccess= {serverSuccess} />
                <div className="main-content">
                    <h1 id='dash_heading' className='dash_heading'>New Orders</h1>
                    <div id="sub-content" className="sub-content">
                        <NewOrder orders={orders}/> 
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Dashboard;