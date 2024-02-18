import './orderCard.css';
import { TbTrash } from "react-icons/tb";

const OrderCard = ({orders, serverSuccess}) => {

    // Reverse order 
    const reversedOder = [...orders].reverse();


    //delete each other
    const deleteOrder = (id) => {

        fetch(`${process.env.REACT_APP_BACKEND_API_BASE_URL}users/orders/${id}`,{

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
        .catch(err => console.error("Error fetching orders:", err ));
    }


    //cancel each other
    const cancelOrder = (id) => {

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


    //Confirm delivered order
    const orderDelivered = (id) => {

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

    

    return(
        <>
            { reversedOder.map( order => {


                const value = ["#FEDE00", "#FE0000", "#11c049", "#00C2FF"];

                let color;

                switch(order.status){

                    case "Processing":
                        color = value[0];
                        break;

                    case "Declined":
                        color = value[1];
                        break; 
                        
                    case "Accepted":
                        color = value[2];
                        break;
                    
                    default:
                        color = value[3];
                        break;
                }

                const state = {
                    padding: '5px',
                    color: 'white',
                    fontSize: '10px',
                    fontWeight: 'bold',
                    backgroundColor: color,
                }

                return (

                    <div className="new_order" key={order._id}>

                        <div className="new-order-header">
                            <h3>{order.product}</h3>
                            <TbTrash onClick={ () => { deleteOrder(order._id) }}/>
                        </div>
            
                        <div className="new-order-body">
                            <div className="new-order-body-content">
            
                                <div className="new-order-body-content-item">
                                    <p>Quantity: </p> 
                                    <span> {order.quantity} </span> 
                                </div>
            
                                <div className="new-order-body-content-item">
                                    <p>Quality: </p> 
                                    <span>{order.quality}<i>litres</i></span>
                                </div>
            
                                <div className="new-order-body-content-item">
                                    <p>Amount: </p> 
                                    <span><i>#</i>{order.amount}</span>
                                </div>
            
                                <div className="new-order-body-content-item">
                                    <p>Duration: </p> 
                                    <span>{order.deliveryTime}</span>
                                </div>
                            </div>
            
                            <div className="new-order-badge">
                                <span style={state}>{order.status}</span>
                            </div>

                            <div className="new-order-actionBtn">
                                {(order.status === "Processing") && <button onClick={() => {cancelOrder(order._id)}} type="button">Cancel order</button>}
                                {(order.status === "Accepted") && <button onClick={() => {orderDelivered(order._id)}} type="button" className='confirm'>Confirm delivery</button> }
                            </div>
                        </div>
                    </div>
                )
            })}
        </>
    )
}

export default OrderCard;