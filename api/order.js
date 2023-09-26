//DataBase model
import orders from "../model/orderSchema.js";


//get all order
export const allOrder = async (req, res) => {
    try{
        const { username } = req.params;

        //check if user exist with that username
        const userOrders= await orders.find();
        res.status(200).json(userOrders);

    }catch(err){
        res.status(403).json({ msg: "Something went wrong!" });
    }
}


//store user border
export const setOrder = async (req, res) => {
    try {
        const { fullname, product, quality, quantity, amount } = req.body;
        if(!fullname || !product || !quality || !quantity || !amount ) return res.status(400).json({ msg: "Invalid credentials. " });

        const newOrder = new orders({
            fullname,
            product,
            quality,
            quantity,
            amount
        });

        const savedOrder = await newOrder.save();
        res.status(201).json({ msg: "Ordered Successful" });

      } catch (err) {
        res.status(500).json({ error: err.message });
    }
}