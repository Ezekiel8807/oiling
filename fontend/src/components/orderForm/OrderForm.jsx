import "./orderForm.css";
import { useState, useEffect } from "react";

//components
const Order = ({ serverSuccess, serverError, serverWarn}) => {

    //user store
    const [user, setUser ] = useState(null);

    const [products, setProducts] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [selectedQuality, setSelectedQuality] = useState(null);
    const [deliveryFees, setDeliveryFees] = useState(null);
    const [quantity, setQuantity] = useState(1);
    const [totalAmount, setTotalAmount] = useState(0);

    //react router navigation
    // const navigate = Navigate();

    //fetch user information
    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('user'));

        if(user){
            // Fetch data from MongoDB or your backend API
            fetch(`${process.env.REACT_APP_BACKEND_API_BASE_URL}user/${user["user"]._id}`)
            .then(response => response.json())
            .then(data => {
                setUser(data);
            })
            .catch(error => console.error("Error fetching current User:", error));
        }

    }, []);

    // fetch products on pageload
    useEffect(() => {
        // Fetch data from MongoDB or your backend API
        fetch(`${process.env.REACT_APP_BACKEND_API_BASE_URL}admin/products`)
            .then(response => response.json())
            .then(data => {
                setProducts(data);
                setSelectedProduct(data[0]); // Select the first oil by default
                setSelectedQuality(data[0]?.type[0]); // Select the first quality by default
                setDeliveryFees(data[0]?.type[0].devFees);
            })
            .catch(error => console.error("Error fetching products:", error));
    }, []);

    // Update total amount whenever selectedOil, selectedQuality, or quantity changes
    useEffect(() => {
        if (selectedProduct && selectedQuality ) {
            const price = (selectedQuality.price * quantity) + (deliveryFees * quantity) / quantity ;
            setTotalAmount(price);
        }
    }, [selectedProduct, selectedQuality, quantity, deliveryFees]);
    

    const handleOrder = (e) => {
        e.preventDefault();

        if(user === null) {
            window.location.replace("/login");
            serverError("Login required!");

        } else if (user.isUpdated === false) {
            window.location.replace(`/${user.username}`);
            serverWarn("Update your profile!!!");

        } else {
            if(!selectedProduct || !selectedQuality || !quantity ){
                serverError("All fields require");

            }else{

                const orderObj = {
                    user: user.username,
                    product: selectedProduct['name'],
                    quality: selectedQuality['litre'],
                    quantity: quantity,
                    amount: totalAmount,
                }

                fetch(`${process.env.REACT_APP_BACKEND_API_BASE_URL}user/orders`, {
                                        
                    // Adding method type
                    method: "POST",
                    
                    // Adding body or contents to send
                    body: JSON.stringify(orderObj),
                    
                    // Adding headers to the request
                    headers: {
                        "Content-type": "application/json; charset=UTF-8"
                    }
                })
                .then(response => response.json())
                .then(data => {
                    window.location.replace(`/${user.username}/orders`);
                    serverSuccess(data.msg);
                })
                .catch(e => serverError(e.msg))

            }
        }
    }

    return (
        <div id="buyNow" className="order">

            <h1>Make Your Order <span>Now!!!</span></h1>

            <div className="orderForm">

                <form onSubmit={ handleOrder } >

                    <label htmlFor="product">Product: </label>
                    <select name="product" id="product" value={selectedProduct ? selectedProduct.name : ""} onChange={(e) => {
                        const selectedProduct = products.find(product => product.name === e.target.value); setSelectedProduct(selectedProduct);
                        setSelectedQuality(selectedProduct?.type[0]); }}>

                        {products.map(product => (
                            <option key={product._id} value={product.name}>{product.name}</option>
                        ))}
                    </select>

                    <label htmlFor="quality">Quality (Litres): </label>
                    <select name="quality" id="quality" value = { selectedQuality ?  
                        selectedQuality.litre : ""} onChange={(e) => {
                            const selectedQuality = selectedProduct.type.find(type => type.litre === parseInt(e.target.value)); setSelectedQuality(selectedQuality); setDeliveryFees(selectedQuality.devFees)}}>

                        {selectedProduct && selectedProduct.type.map(type => (
                            <option key={type.litre} value={type.litre}>{`${type.litre} litres`}</option>
                        ))}
                    </select>

                    <label htmlFor="quantity">Quantity: </label>
                    <input name="quantity" id="quantity" type="number" value={quantity}
                        onChange={(e) => {
                            setQuantity(parseInt(e.target.value))}
                        }
                        autoComplete="true"
                        placeholder="Number of kegs"
                        required
                    />

                    <div className="note">
                        <small className="deliveryFees"> Delivery fees: </small> <small>{`#${deliveryFees}`}</small>
                    </div>

                    <div className="note">
                        <small className="deliveryFees"> price per one: </small> <small>{`#${(selectedQuality && selectedQuality.price)}`}</small>
                    </div>

                    <div className="note">
                        <p>Total balance: </p> <span>{`#${totalAmount}`}</span>
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