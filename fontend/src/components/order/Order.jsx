import "./order.css";


//components


const Order = () => {
    return (
        <div className="order">

            <h1>Make Your Order <span>Now!!!</span></h1>

            <div className="orderForm">

                <form action="">

                <label>Product: </label>
                    <select name="product" id="product" required>
                        <option value="palmOil">Palm oil</option>
                        <option value="grountnutOil">Grountnut oil</option>
                    </select>

                    <label>Quality: </label>
                    <select name="quality" id="quality" required>
                        <option value="1">1 bottle</option>
                        <option value="5">5 liters</option>
                        <option value="25">25 liters</option>
                    </select>

                    <label>Quantity: </label>
                    <input type="number" placeholder="Number of kegs" required/>


                    <small><span>#500</span> for delivery fees</small>
                    <p>The amount below is to be paid on delivery <span>#5,700</span></p>

                    <button type="submit" className="orderBtn">Order</button>
                </form>
            </div>
        </div>
    )
}


export default Order;