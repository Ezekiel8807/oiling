import './orderCard.css';
import { BsDropbox} from 'react-icons/bs';

const OrderCard = ({orders}) => {


    return(
        <>
            { orders.map(order => {
                return (
                    <div className="new_order" key={order._id}>
                        <div className="new-order-header">
                            <h3>{order.product}</h3>
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
                                <span className="state">{order.status}</span>
                            </div>
            
                            <div className="new-order-actionBtn">
                                <button type="button">Cancel order</button>
                            </div>
                        </div>
                    </div>
                )
            })}
        </>
    )
}

export default OrderCard;