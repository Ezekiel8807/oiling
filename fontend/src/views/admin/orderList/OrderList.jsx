import './orderList.css';
import { useState, useEffect } from 'react';

//components
import Sider from '../../../components/sider/Sider';




const OrderList = ({pf, serverSuccess, admin}) => {

    const [orders, setOrders] = useState([]);


    // function to fetch all orders on page load
    useEffect(() => {

        fetch(`${process.env.REACT_APP_BACKEND_API_BASE_URL}admins/orders`)
        .then(response => response.json())
        .then(data => {
           (data === null) ? setOrders([]) : setOrders(data);
        })
        .catch(err => console.error("Error fetching orders:", err ));
    }, []);


    //reverse order array
    const revArray = [...orders].reverse();



    //oder delete function
    const deleteOrder = (id) => {

        fetch(`${process.env.REACT_APP_BACKEND_API_BASE_URL}admins/orders/${id}`,{

            //methods
            method: "DELETE",

            // Adding headers to the request
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }

        })
        .then(response => response.json())
        .then(data => {
            window.location.reload();
            serverSuccess(data.msg);
        })
        .catch(err => console.error("Error deleting order:", err ));
    }



    return (
        <div className="dashboard">
            <main className='-board'>
                <Sider pf={ pf } serverSuccess= {serverSuccess} admin={admin} />
                <div className="main-content">
                    <div className="main-block-content">
                        <h1 id='dash_heading' className='dash_heading'>Order List</h1>

                        <div id="sub-content" className="sub-content">

                            <div className="sub-content-block">
                                <table className='adminList'>
                                    <thead>
                                        <tr className='adminList_head'>
                                            <th>User</th>
                                            <th>Product</th>
                                            <th>Quality</th>
                                            <th>Quantity</th>
                                            <th>Amount</th>
                                            <th>Status</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>

                                        <tbody >

                                            { revArray.map( order => 
                                            <tr className='adminList_body' key={order._id}>
                                                <td>{order.user}</td>
                                                <td>{order.product}</td>
                                                <td>{(order.quality === 1) ?`${order.quality} Bottle`: `${order.quality} Litres`}</td>
                                                <td>{order.quantity}</td>
                                                <td>{order.amount}</td>
                                                <td>{order.status}</td>
                                                <td><button onClick={ () => { deleteOrder(order._id) }} className='actionBtn'>Delete</button></td>
                                            </tr>
                                            )}
                                        </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default OrderList;