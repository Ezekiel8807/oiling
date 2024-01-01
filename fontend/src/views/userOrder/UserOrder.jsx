import './userOrder.css'


//component
import Order from "../../components/orderForm/OrderForm.jsx"
import OrderCard from '../../components/orderCard/OrderCard.jsx';


const UserOrder = ({ user, serverWarn, serverError}) => {

    return(
        <div className="userOrder">
            
            <div className="make-Order">
                <Order user={user} serverWarn={ serverWarn } serverError={ serverError} />
            </div>

            <div className="new-order">

                <h1>Recent orders</h1>

                <div className="recent-order-container">
                    <OrderCard user={user} serverWarn={ serverWarn } serverError={ serverError} />
                </div>
            </div>
        </div>
    )
}


export default UserOrder;