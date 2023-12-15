import './userOrder.css'


//component
import Order from "../../components/order/Order.jsx"


const UserOrder = () => {

    return(
        <div className="userOrder">
            
            <div className="new-Order">
                <Order />
            </div>

            <div className="my_order">
                <div className="recent-order">
                    <h1>Recent Orders</h1>
                </div>
            </div>
        </div>
    )
}


export default UserOrder;