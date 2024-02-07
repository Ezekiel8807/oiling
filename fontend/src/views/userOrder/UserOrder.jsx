import './userOrder.css'
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

//component
import Order from "../../components/orderForm/OrderForm.jsx"
import OrderCard from '../../components/orderCard/OrderCard.jsx';



const UserOrder = ({ user, serverWarn, serverError}) => {

    const [orders, setOrders] = useState([]);

    // fetch products on pageload
    useEffect(() => {
        // Fetch data from MongoDB or your backend API
        fetch(`${process.env.REACT_APP_BACKEND_API_BASE_URL}user/orders/${user['user'].username}`, {

            // Adding method type
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
            .catch(error => console.error("Error fetching orders:", error));
    }, [user]);

    return(
        <div className="orders">
            
            <div className="make-order">
                <Order user={user} serverWarn={ serverWarn } serverError={ serverError} />
            </div>

            <div className="recent-orders">

                <div className="recent-orders-heading">
                    <h1>Recent orders</h1>
                    <Link  to="/#buyNow">Order Now</Link>
                </div>
                

                <div className="new-orders-container">
                    <OrderCard user={user} orders={orders}  serverWarn={ serverWarn } serverError={ serverError} />
                </div>
            </div>
        </div>
    )
}


export default UserOrder;