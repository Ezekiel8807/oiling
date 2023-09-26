import "./order.css";


//components


const Order = () => {
    return (
        <div className="order">

            <h1>Make Your Order Now!!!</h1>

            <div className="orderForm">

                <form action="">

                    <input type="text" placeholder="Fullname" required/>

                    <label>Quality: </label>
                    <input type="number" placeholder="Number of kegs" required/>
                    <select name="State" id="" required>
                        <option selected value="5">5 liters</option>
                        <option value="25">25 liters</option>
                    </select>

                    <label>Location: </label>
                    <select name="State" id="" required>
                        <option selected value="ogun">Ogun</option>
                    </select>

                    <select name="LocalGovernment" id="" placeholder="Local Government" required>
                        <option selected value="ado-odo-ota">Ado-odo-ota</option>
                    </select>

                    <textarea type="text" placeholder="Enter your address in details" required></textarea>
                    <small><span>#500</span> for delivery fees</small>
                    <p>The amount below is to be paid on delivery <span>#5,700</span></p>

                    <button type="submit" className="orderBtn">Order</button>
                </form>
            </div>
        </div>
    )
}


export default Order;