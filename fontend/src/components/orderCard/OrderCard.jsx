import './orderCard.css';

const OrderCard = () => {
    return(
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
    )
}

export default OrderCard;