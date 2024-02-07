//user dataBase Schema
import mongoose from 'mongoose'


const orderSchema = new mongoose.Schema({
    user: String,
    product: String,
    quality: Number,
    quantity: Number,
    deliveryTime: {
        type: String,
        default: "loading..."
    },
    status: {
        type: String,
        default: "processing",
    },
    amount: Number,
    time: {
        type: Date,
        default: Date.now(),
    }
});

const orders = mongoose.model('orders', orderSchema);
export default orders;