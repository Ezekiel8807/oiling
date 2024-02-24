//DataBase model
import orders from "../model/orderSchema.js";


//get all order
export const allOrders = async (req, res) => {

    try{

        //get all orders
        const allOrders= await orders.find();

        //ckech if no orders
        if(!allOrders) return res.status(500).json({ msg: "No orders found!" });
    
        res.status(200).json(allOrders);

    }catch(err){
        res.status(403).json({ msg: "Something went wrong!" });
    }
}

//get single  userOrder
export const userOrder = async (req, res) => {

    const username = req.params.id;

    try{
        //check if user exist with that username
        const userOrders= await orders.find({user: username})
        res.status(200).json(userOrders);

    }catch(err){
        res.status(403).json({ msg: "Something went wrong!" });
    }
}


//store user order
export const setOrder = async (req, res) => {
    try {
        const { user, product, quality, quantity, amount } = req.body;
        if(!user || !product || !quality || !quantity || !amount ) return res.status(400).json({ msg: "Invalid credentials. " });

        const newOrder = new orders({
            user,
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



//Remove user order
export const removeOrder = async (req, res) => {
    try {

        const { id } = req.params;
        const order = await orders.findByIdAndDelete({_id: id});
        if(order) return res.status(200).json({ msg: "Ordered Removed" });

      } catch (err) {
        res.status(500).json({ error: err.message });
    }
}


//update user order
export const updateOrder = async (req, res) => {
    try {

        const { id } = req.params;

        const order = await orders.findByIdAndUpdate(id, req.body);
        if(!order) return res.status(404).json({ msg: "something went wrong" });

        return res.status(200).json({ msg: "updated" });

      } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

