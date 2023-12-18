import './userOrder.css'


//component
import Order from "../../components/order/Order.jsx"


const UserOrder = () => {

    return(
        <div className="userOrder">
            
            <div className="make-Order">
                <Order />
            </div>

            <div className="new-order">

                <h1>Recent orders</h1>

                <div className="recent-order-container">
                    <div className="recent_order">
                        <div className="recent-order-header">
                            <h3>palmoil</h3>
                            <i>icon</i>
                        </div>

                        <div className="recent-order-body">
                            <div className="recent-order-body-content">

                                <div className="recent-order-body-content-item">
                                    <b>Quantity: </b> 
                                    <span> 2 </span> 
                                </div>

                                <div className="recent-order-body-content-item">
                                    <b>Quality: </b> 
                                    <span>5<i>litres</i></span>
                                </div>

                                <div className="recent-order-body-content-item">
                                    <b>Amount: </b> 
                                    <span><i>#</i>50000</span>
                                </div>

                                <div className="recent-order-body-content-item">
                                    <b>Duration: </b> 
                                    <span>loading...</span>
                                </div>
                            </div>

                            <div className="recent-order-badge">
                                <span className="state">Processing</span>
                            </div>

                            <div className="recent-order-actionBtn">
                                <button type="button">Cancel order</button>
                            </div>
                        </div>
                    </div>


                    <div className="recent_order">
                        <div className="recent-order-header">
                            <h3>groundnut oil</h3>
                            <i>icon</i>
                        </div>

                        <div className="recent-order-body">
                            <div className="recent-order-body-content">

                                <div className="recent-order-body-content-item">
                                    <b>Quantity: </b> 
                                    <span> 2 </span> 
                                </div>

                                <div className="recent-order-body-content-item">
                                    <b>Quality: </b> 
                                    <span>5<i>litres</i></span>
                                </div>

                                <div className="recent-order-body-content-item">
                                    <b>Amount: </b> 
                                    <span><i>#</i>50000</span>
                                </div>

                                <div className="recent-order-body-content-item">
                                    <b>Duration: </b> 
                                    <span>1d 3hr</span>
                                </div>
                            </div>

                            <div className="recent-order-badge">
                                <span className="state">Processing</span>
                            </div>

                            <div className="recent-order-actionBtn">
                                <button type="button">Cancel order</button>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    )
}


export default UserOrder;