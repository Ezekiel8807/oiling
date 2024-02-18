import "./product.css";


//components
import Sider from '../../../components/sider/Sider';
import ProductCard from "../../../components/productCard/ProductCard";
import { useEffect, useState } from "react";



const Product = ({pf, serverSuccess, admin}) => {

    const [products, setProducts] = useState([]);


    // fetch products on pageload
    useEffect(() => {
        // Fetch data from MongoDB or your backend API
        fetch(`${process.env.REACT_APP_BACKEND_API_BASE_URL}admins/products`)
            .then(response => response.json())
            .then(data => {
                setProducts(data);
            })
            .catch(error => console.error("Error fetching products:", error));
    }, []);
    

    return (
        <div className="dashboard">
            <main className='-board'>
                <Sider pf={ pf } serverSuccess= {serverSuccess} admin={admin} />

                <div className="main-content">
                    <div className="main-block-content">
                        <h1 id='dash_heading' className='dash_heading'>Products</h1>

                        <div id="sub-content" className="sub-content">
                            <ProductCard products={products}/>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Product;