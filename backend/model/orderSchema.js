//user dataBase Schema
import mongoose from 'mongoose'


const orderSchema = new mongoose.Schema({
    orderBy: String,
    product: String,
    quality: Number,
    quantity: Number,
    status: {
        type: String,
        default: "new"
    },
    amount: Number
});

const orders = mongoose.model('orders', orderSchema);
export default orders;