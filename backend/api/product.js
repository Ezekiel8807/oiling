//DataBase model
import Products from "../model/productSchema.js";


export const getProducts = async (req, res) => {
    try{

        //check if user exist with that username
        const products = await Products.find();
        res.status(200).json(products);

    }catch(err){
        res.status(404).json({ msg: "Something went wrong. " });
    }

}

export const getProduct = (req, res) => {

}

export const setProduct = (req, res) => {

    const product = {
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

    const newProduct = new Products(product);

    const savedproduct = newProduct.save();
    res.status(201).json({ msg: "Ordered Successful" });

}

export const updateProduct = (req, res) => {

}