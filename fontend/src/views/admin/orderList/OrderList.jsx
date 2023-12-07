import './orderList.css';
import { useState, useEffect } from 'react';

//components
import Sider from '../../../components/sider/Sider';




const OrderList = ({pf, serverSuccess, admin}) => {


    // get all Oders fron the localstorage
    const [orders, setOrders] = useState([]);

    const fetchOrders = () => {
        const getOrders = JSON.parse(localStorage.getItem("orders"));
        setOrders(getOrders);
    }

    useEffect(() => {
        fetchOrders();
    }, [])
    

    return (
        <div className="dashboard">
            <main className='-board'>
                <Sider pf={ pf } serverSuccess= {serverSuccess} admin={admin} />
                <div className="main-content">

                    <h1 id='dash_heading' className='dash_heading'>Order List</h1>

                    <div id="sub-content" className="sub-content">

                        <table className='adminList'>
                            <thead>
                                <tr className='adminList_head'>
                                    <th>Fullname</th>
                                    <th>Product</th>
                                    <th>Quality</th>
                                    <th>Quantity</th>
                                    <th>Amount</th>
                                    <th>Status</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            { orders.map(order => 

                                <tbody key={order._id} >
                                    <tr className='adminList_body'>
                                        <td>{order.fullname}</td>
                                        <td>{order.product}</td>
                                        <td>{(order.quality === 1) ?`${order.quality} Bottle`: `${order.quality} Litres`}</td>
                                        <td>{order.quantity}</td>
                                        <td>{order.amount}</td>
                                        <td>{order.status}</td>
                                        <td><button className='actionBtn'>Delete</button></td>
                                    </tr>
                                </tbody>
                            )}
                        </table>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default OrderList;