import "./productCard.css";


const ProductCard = ({products}) => {
    return(
        <div className="productCard">

            { products.map((product) => {
                return(
                    <form id={product._id} className="productCard-form" method="post">
                        <h2 className="productCard-name">{product.name}</h2>

                        {product.type.map((type) => {
                            return(
                                <div className="_productCard">
                                    <label htmlFor="">{ (type.litre === 1) ?`${type.litre} Bottle`: `${type.litre} Litres` }</label>
                                    <input type="number" name="" id="" value={type.price}/>   
                                </div>  
                            )
                        })}
                        <button className="productCard-button" type="submit">Update</button>
                    </form>
                )
            })}
        </div>
    )
}

export default ProductCard;