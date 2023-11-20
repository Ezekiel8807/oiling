import "./order.css";


//components


const Order = () => {
    return (
        <div id="buyNow" className="order">

            <h1>Make Your Order <span>Now!!!</span></h1>

            <div className="orderForm">

                <form action="">

                    <label>Product: </label>
                    <select name="product" id="product" required>
                        <option value="palmOil" default>Palm oil</option>
                        <option value="grountnutOil">Grountnut oil</option>
                    </select>

                    <label>Quality: </label>
                    <select name="quality" id="quality" required>
                        <option value="1" default>1 bottle</option>
                        <option value="5">5 liters</option>
                        <option value="25">25 liters</option>
                    </select>

                    <label>Quantity: </label>
                    <input type="number" placeholder="Number of kegs" default="1" required/>
                    <small class="deleveryFees"><span>#500</span> for delivery fees</small>

                    <div className="note">
                        <p>The amount below is to be paid on delivery</p>
                        <h2>{`#${5700}`}</h2>
                    </div>

                    <div className="orderBtnDiv">
                        <button type="submit" className="orderBtn">Order</button>
                    </div>
                .
                </form>
            </div>
        </div>
    )
}


export default Order;