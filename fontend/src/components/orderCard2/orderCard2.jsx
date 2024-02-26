import './orderCard2.css';

import { useState, useEffect } from 'react';

const OrderCard2 = ({ serverSuccess }) => { 

    const [orders, setOrders] = useState([]);
    const [duration, setDuration] = useState("loading...");


    // function to fetch all orders on page load
    useEffect(() => {

        fetch(`${process.env.REACT_APP_BACKEND_API_BASE_URL}admins/orders`)
        .then(response => response.json())
        .then(data => {
            (data === null) ? setOrders([]) : setOrders(data);
        })
        .catch(err => console.error("Error fetching orders:", err ));
    }, []);



    // sort orders
    const filterOrders = orders.filter((order) => {
        if(order.status !== "Declined" && order.status !== "Delivered") return order;
    });

    //reverse order array
    const revArray  = [...filterOrders].reverse();


    // decline order function
    const decline = (id) => {
        
        const requirement = {
            status: "Declined"
        }

        fetch(`${process.env.REACT_APP_BACKEND_API_BASE_URL}users/orders/${id}`,{

            //methods
            method: "PUT",

            // Adding body or contents to send
            body: JSON.stringify(requirement),

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
        .catch(err => console.error("Error fetching orders:", err ));
    }


    //accept order and update duration function
    const accept = (id) => {
        
        const requirement = {
            status: "Accepted",
            deliveryTime: duration
        }

        fetch(`${process.env.REACT_APP_BACKEND_API_BASE_URL}users/orders/${id}`,{

            //methods
            method: "PUT",

            // Adding body or contents to send
            body: JSON.stringify(requirement),

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
        .catch(err => console.error("Error fetching orders:", err ));
        
    }


    return (
        <div>
           { revArray.map(order => 
                <div key={order._id} className="newOrder_div">
                    <table>
                        <tbody>
                            <tr className='space'> 
                                <td>Name: </td>
                                <td>{order.user}</td>
                            </tr>
                            <tr className='space'>
                                <td>Product: </td>
                                <td>{order.product}</td>
                            </tr>
                            <tr className='space'>
                                <td>Quality: </td>
                                <td>{(order.quality === 1) ?`${order.quality} Bottle`: `${order.quality} Litres`}</td>
                            </tr>
                            <tr className='space'>
                                <td>Quantity: </td>
                                <td>{order.quantity}</td>
                            </tr>
                            <tr className='space'>
                                <td>Amount: </td>
                                <td>{order.amount}</td>
                            </tr>
                            <tr className='space'>
                                <td>Duration: </td>
                                <td><input className='duration' onChange={ (e) => {setDuration(e.target.value)}} type="text" name="duration" defaultValue={ order.deliveryTime } /></td>
                            </tr>
                        </tbody>
                    </table>
                    <div className="actionsBtn">
                            { order.status !== "Accepted" &&
                                <>
                                    <button onClick={ () => { decline(order._id)}} className='decline'>Decline</button>
                                    <button onClick={ () => { accept(order._id)}} className='processing'>Accept</button>
                                </>
                            }
                    </div>
                </div>
            )}
        </div>
    )
}


export default OrderCard2;