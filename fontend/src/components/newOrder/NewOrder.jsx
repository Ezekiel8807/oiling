import './newOrder.css';



const NewOrder = ({orders}) => {

    const decline = (id) => {
        
    }

    const processing = (id) => {
        
    }

    const delivered = (id) => {

    }



    return (
        <div>
           { orders.map(order => 
                <div key={order._id} className="newOrder_div">
                    <table>
                        <tbody>
                            <tr>
                                <td>Name: </td>
                                <td>{order.fullname}</td>
                            </tr>
                            <tr>
                                <td>Product: </td>
                                <td>{order.product}</td>
                            </tr>
                            <tr>
                                <td>Quality: </td>
                                <td>{order.quality}</td>
                            </tr>
                            <tr>
                                <td>Quantity: </td>
                                <td>{order.quantity}</td>
                            </tr>
                            <tr>
                                <td>Amount: </td>
                                <td>{order.amount}</td>
                            </tr>
                        </tbody>
                    </table>
                    <div className="actionsBtn">
                        <button onClick={decline} className='decline'>Decline</button>
                        <button onClick={processing} className='processing'>processing</button>
                        <button onClick={delivered} className='delivered'>Delivered</button>
                    </div>
                </div>
            )}
        </div>
    )
}


export default NewOrder;