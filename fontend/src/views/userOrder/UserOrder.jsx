import './userOrder.css'


//component
import Order from "../../components/order/Order.jsx"


const UserOrder = () => {

    return(
        <div className="userOrder">

            <Order />

            <div className="my_order">

            </div>
        </div>
    )
}


export default UserOrder;