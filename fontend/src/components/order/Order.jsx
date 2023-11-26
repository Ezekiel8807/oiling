import { useState } from "react";
import { useNavigate } from "react-router";

import "./order.css";


//components


const Order = ({user, serverError}) => {

    const [product, setProduct] = useState("");
    const [quality, setQuality] = useState("");
    const [quantity, setQuantity] = useState("");


    //react router navigation
    const navigate = useNavigate();

    const handleOrder = (e) => {
        e.preventDefault();


        if(user === null) {
            navigate("/login");
            serverError("Login required!");
        }
            


        console.log("hello");
        console.log(`you order ${product}`);
        console.log(`${quality} litres - ${quantity}`);
    }

    return (
        <div id="buyNow" className="order">

            <h1>Make Your Order <span>Now!!!</span></h1>

            <div className="orderForm">

                <form onSubmit={ handleOrder } >

                    <label htmlFor="product">Product: </label>
                    <select name="product" id="product" autoComplete="true" required>
                        <option onChange={ (e)=>{ setProduct(e.target.value)}}  value="palm oil" default>Palm oil</option>
                        <option onChange={ (e)=>{ setProduct(e.target.value)}}  value="grountnut oil">Grountnut oil</option>
                    </select>

                    <label htmlFor="quality">Quality: </label>
                    <select name="quality" id="quality" autoComplete="true" required>
                        <option onChange={ (e)=>{ setQuality(e.target.value)}}  value="1" default>1 bottle</option>
                        <option onChange={ (e)=>{ setQuality(e.target.value)}}  value="5">5 liters</option>
                        <option onChange={ (e)=>{ setQuality(e.target.value)}}  value="25">25 liters</option>
                    </select>

                    <label htmlFor="quantity">Quantity: </label>
                    <input name="quantity" id="quantity" type="number" onChange={ (e)=>{ setQuantity(e.target.value)}} 
                    autoComplete="true" placeholder="Number of kegs" required/>
                    <small className="deleveryFees"><span>#500</span> for delivery fees</small>

                    <div className="note">
                        <p>The amount below is to be paid on delivery</p>
                        <h2>{`#${5700}`}</h2>
                    </div>

                    <div className="orderBtnDiv">
                        <button type="submit" className="orderBtn">Order</button>
                    </div>
                </form>
            </div>
        </div>
    )
}


export default Order;