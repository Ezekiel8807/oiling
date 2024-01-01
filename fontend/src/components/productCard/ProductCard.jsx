import { useState } from "react";
import "./productCard.css";


const ProductCard = ({products}) => {

    const [name, setName] = useState("")
    const [type, setType] = useState("")

    return(
        <div className="productCard">

            { products.map((product) => {
                return(
                    <div key={product._id} className="productCard-form" method="post">
                        <h2 className="productCard-name">{product.name}</h2>

                        {product.type.map((type) => {
                            return(
                                <div  className="_productCard">
                                    <label htmlFor="">{ (type.litre === 1) ?`${type.litre} Bottle`: `${type.litre} Litres` }</label>
                                    <input type="number" value={type.price}/>   
                                </div>  
                            )
                        })}
                    </div>
                )
            })}
        </div>
    )
}

export default ProductCard;