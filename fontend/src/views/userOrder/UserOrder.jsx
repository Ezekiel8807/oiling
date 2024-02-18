import './userOrder.css'
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

//component
import Order from "../../components/orderForm/OrderForm.jsx"
import OrderCard from '../../components/orderCard/OrderCard.jsx';



const UserOrder = ({serverWarn, serverSuccess, serverError}) => {

    const [user, setUser ] = useState(null)
    const [orders, setOrders] = useState([]);


    //fetch user information
    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('user'));

        // Fetch data from MongoDB or your backend API
        fetch(`${process.env.REACT_APP_BACKEND_API_BASE_URL}users/${user["user"]._id}`)
            .then(response => response.json())
            .then(data => {
                setUser(data);
            })
            .catch(error => console.error("Error fetching current User:", error));

    }, []);

    // fetch products on pageload
    useEffect(() => {

        if(user){
            
            // Fetch data from MongoDB or your backend API
            fetch(`${process.env.REACT_APP_BACKEND_API_BASE_URL}users/orders/${user.username}`, {

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
        }

    }, [user]);

    return(
        <div className="orders">
            
            <div className="make-order">
                <Order serverWarn={ serverWarn } serverSuccess={serverSuccess} serverError={ serverError} />
            </div>

            <div className="recent-orders">

                <div className="recent-orders-heading">
                    <h1>Recent orders</h1>
                    <Link  to="/order">Order Now</Link>
                </div>
                

                <div className="new-orders-container">
                    <OrderCard orders={orders}  serverWarn={ serverWarn } serverSuccess={serverSuccess} serverError={ serverError} />
                </div>
            </div>
        </div>
    )
}


export default UserOrder;