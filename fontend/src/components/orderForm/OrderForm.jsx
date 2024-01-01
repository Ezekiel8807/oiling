import "./orderForm.css";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router";


//components


const Order = ({user, serverError, serverWarn}) => {

    // product options
    const productOptions = [
        {label: "Palm oil", value: "Palm oil"},
        {label: "Grountnut oil", value: "Grountnut oil"}
    ]

    // quality options
    const qualityOptions = [
        {label: "1 bottle", value: 1},
        {label: "5 liters", value: 5},
        {label: "25 liters", value: 25}
    ]

    //react router navigation
    const navigate = useNavigate();

    // State data
    const [products, setProducts] = useState("");

    const [product, setProduct] = useState("");
    const [quality, setQuality] = useState("");
    const [quantity, setQuantity] = useState(1);
    
    // fetch products on pageload
    useEffect(() => {
      
        let response = fetch(`${process.env.REACT_APP_BACKEND_API_BASE_URL}products`);

        let products = JSON.stringify(response);
        console.log(products);
        // return setProducts(());

    }, [])
    

    const handleOrder = (e) => {
        e.preventDefault();

        if(user === null) {
            navigate("/login");
            serverError("Login required!");
        }
        else if(user["user"].isUpdated === false){
            navigate(`/${user["user"].username}`);
            serverWarn("Update your profile!!!");
        }
        else {  
            console.log("hello");
            console.log(`you order ${product}`);
            console.log(`${quality} litres - ${quantity}`);
        }
    }

    return (
        <div id="buyNow" className="order">

            <h1>Make Your Order <span>Now!!!</span></h1>

            <div className="orderForm">

                <form onSubmit={ handleOrder } >

                    <label htmlFor="product">Product: </label>
                    <select name="product" id="product" required>
                        {productOptions.map(product => {
                            return (
                                <option key={product.label} onChange={ (e)=>{ setProduct(e.target.value)}} value={product.value} default>{product.label}</option>
                            )
                        })}
                     </select>
                    
                    <label htmlFor="quality">Quality: </label>
                    <select name="quality" id="quality" required>
                        { qualityOptions.map(quality => {
                            return (
                                <option key={ quality.label} onChange={ (e)=>{ setQuality(e.target.value)}} value={quality.value}>{quality.label}</option>
                            )
                        })}
                    </select>

                    <label htmlFor="quantity">Quantity: </label>
                    <input name="quantity" id="quantity" type="number" onChange={ (e)=>{ setQuantity(e.target.value)}} 
                    autoComplete="true" placeholder="Number of kegs" defaultValue={ quantity } required/>

                    <div className="note">
                        <small className="deleveryFees"> Delivery fees: </small> <small>{`#${500}`}</small>
                    </div>

                    <div className="note">
                        <p>Total balance: </p> <span>{`#${5700}`}</span> 
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