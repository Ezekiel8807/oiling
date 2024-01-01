//DataBase model
import Products from "../model/productSchema.js";


export const getProducts = async (req, res) => {
    try{

        //check if user exist with that username
        const products = await  Products.find();
        res.status(200).json(products);

    }catch(err){
        res.status(404).json({ msg: "Something went wrong. " });
    }

}

export const getProduct = (req, res) => {

}

export const updateProduct = (req, res) => {

}