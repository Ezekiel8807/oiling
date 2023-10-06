import "./order.css";


//components


const Order = () => {
    return (
        <div className="order">

            <h1>Make Your Order <span>Now!!!</span></h1>

            <div className="orderForm">

                <form action="">

                    <label htmlFor="fullname">Fullname: </label>
                    <input type="text" id="fullname" name="fullname" placeholder=" Enter fullname" required/>

                    <label htmlFor="phone">Phone: </label>
                    <input type="tel" id="phone" name="phone" placeholder=" Enter Phone number" required/>

                    <label>Quality: </label>
                    <select name="quality" id="quality" required>
                        <option value="1">1 bottle</option>
                        <option value="5">5 liters</option>
                        <option value="25">25 liters</option>
                    </select>

                    <label>Quantity: </label>
                    <input type="number" placeholder="Number of kegs" required/>

                    <label>Country: </label>
                    <select name="State" id="" required>
                        <option selected value="ogun">Ogun</option>
                    </select>

                    <label>State: </label>
                    <select name="LocalGovernment" id="" placeholder="Local Government" required>
                        <option selected value="ado-odo-ota">Ado-odo-ota</option>
                    </select>

                    <label>Adress: </label>
                    <input type="tel" name="" id="" />
                    <textarea type="a" placeholder="Enter your address in details" required></textarea>


                    <small><span>#500</span> for delivery fees</small>
                    <p>The amount below is to be paid on delivery <span>#5,700</span></p>

                    <button type="submit" className="orderBtn">Order</button>
                </form>
            </div>
        </div>
    )
}


export default Order;