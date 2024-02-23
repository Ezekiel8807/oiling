import './orderCard2.css';
import { useState } from 'react';




const orderCard2 = ({orders, serverSuccess }) => { 

    //const [duration, setDuration] = useState


    // sort orders
    const filterOrders = orders.filter((order) => {
        if(order.status !== "Declined" && order.status !== "Delivered") return order;
    });

    //reverse order array
    const revArray  = [...filterOrders].reverse();

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

    const accept = (id) => {
        
        const requirement = {
            status: "Accepted",
            // duration: duration
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

    const delivered = (id) => {
                
        const requirement = {
            status: "Delivered"
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
                            <tr>
                                <td>Name: </td>
                                <td>{order.user}</td>
                            </tr>
                            <tr>
                                <td>Product: </td>
                                <td>{order.product}</td>
                            </tr>
                            <tr>
                                <td>Quality: </td>
                                <td>{(order.quality === 1) ?`${order.quality} Bottle`: `${order.quality} Litres`}</td>
                            </tr>
                            <tr>
                                <td>Quantity: </td>
                                <td>{order.quantity}</td>
                            </tr>
                            <tr>
                                <td>Amount: </td>
                                <td>{order.amount}</td>
                            </tr>
                            {/* <tr>
                                <td>Duration: </td>
                                <td><input onChange={ (e) => {setDuration(e.target.value)}} type="text" name="duration" id="duration" defaultValue={order.duration} /></td>
                            </tr> */}
                        </tbody>
                    </table>
                    <div className="actionsBtn">
                        <button onClick={ () => { decline(order._id)}} className='decline'>Decline</button>
                        <button onClick={ () => { accept(order._id)}} className='processing'>Accept</button>
                        <button onClick={ () => { delivered(order._id)}} className='delivered'>Delivered</button>
                    </div>
                </div>
            )}
        </div>
    )
}


export default orderCard2;