import "./orderForm.css";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router";


//components
const Order = ({user, serverError, serverWarn}) => {

    const [products, setProducts] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [selectedQuality, setSelectedQuality] = useState(null);
    const [quantity, setQuantity] = useState(1);
    const [totalAmount, setTotalAmount] = useState(0);

    //react router navigation
    const navigate = useNavigate();

    // fetch products on pageload
    useEffect(() => {
        // Fetch data from MongoDB or your backend API
        fetch(`${process.env.REACT_APP_BACKEND_API_BASE_URL}admin/products`)
            .then(response => response.json())
            .then(data => {
                setProducts(data);
                setSelectedProduct(data[0]); // Select the first oil by default
                setSelectedQuality(data[0]?.type[0]); // Select the first quality by default
            })
            .catch(error => console.error("Error fetching oils:", error));
    }, []);

    useEffect(() => {
        // Update total amount whenever selectedOil, selectedQuality, or quantity changes
        if (selectedProduct && selectedQuality) {
            const price = selectedQuality.price * quantity;
            setTotalAmount(price);
        }
    }, [selectedProduct, selectedQuality, quantity]);
    

    const handleOrder = (e) => {
        e.preventDefault();

        if(user === null) {
            navigate("/login");
            serverError("Login required!");
        } else if (user["user"].isUpdated === false) {
            navigate(`/${user["user"].username}`);
            serverWarn("Update your profile!!!");
        } else {
            console.log("hello");
            console.log(`you ordered ${selectedProduct.name}`);
            console.log(`${quantity} kegs - ${totalAmount}`);
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
                        const selectedQuality = selectedProduct.type.find(type => type.litre === parseInt(e.target.value));
                        setSelectedQuality(selectedQuality); }}>

                        {selectedProduct && selectedProduct.type.map(type => (
                            <option key={type.litre} value={type.litre}>{`${type.litre} litres`}</option>
                        ))}
                    </select>

                    <label htmlFor="quantity">Quantity: </label>
                    <input name="quantity" id="quantity" type="number" value={quantity}
                        onChange={(e) => setQuantity(parseInt(e.target.value))}
                        autoComplete="true"
                        placeholder="Number of kegs"
                        required
                    />

                    <div className="note">
                        <small className="deliveryFees"> Delivery fees: </small> <small>{`#${500}`}</small>
                    </div>

                    <div className="note">
                        <p>Total balance: </p> <span>{`#${totalAmount + 500}`}</span>
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