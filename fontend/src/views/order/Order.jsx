import './order.css';

// components
import Order from '../../components/orderForm/OrderForm';


const OrderPage = ({serverWarn, serverSuccess, serverError}) => {
    return(
        <div className="orderPage">
            <Order serverWarn={ serverWarn } serverSuccess= {serverSuccess} serverError={ serverError} />
        </div>
    )
}

export default OrderPage;