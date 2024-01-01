import "./product.css";


//components
import Sider from '../../../components/sider/Sider';
import ProductCard from "../../../components/productCard/ProductCard";
import { useEffect, useState } from "react";



const Product = ({pf, serverSuccess, admin}) => {

    const data = [
        {
            "_id": 1,
            "name": "Palm Oil",
            "type": [
                {
                    litre: 1,
                    price: 1000
                }, 
                {
                    litre: 5,
                    price: 5200
                },
                {
                    litre: 25,
                    price: 24000
                }
            ]
        },
        {
            "_id": 2,
            "name": "Groundnut Oil",
            "type": [
                {
                    litre: 1,
                    price: 1200
                }, 
                {
                    litre: 5,
                    price: 5400
                },
                {
                    litre: 25,
                    price: 26000
                }
            ]   
        }
    ]

    const [products, setProducts] = useState(data);


    useEffect(() => {
      
        fetch(``)
        .then((products) => {
            return setProducts(JSON.Stringify(products));
        })
        .catch(e => {console.log(e)});
    }, [])
    

    return (
        <div className="dashboard">
            <main className='-board'>
                <Sider pf={ pf } serverSuccess= {serverSuccess} admin={admin} />
                <div className="main-content">
        
                    <h1 id='dash_heading' className='dash_heading'>Products</h1>

                    <div id="sub-content" className="sub-content">
                        <ProductCard products={products}/>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Product;