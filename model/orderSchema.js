//user dataBase Schema
import mongoose from 'mongoose'


const orderSchema = new mongoose.Schema({
    id: Number,
    fullname: String,
    product: String,
    quality: Number,
    quantity: Number,
    amount: Number
});

const orders = mongoose.model('orders', orderSchema);
export default orders;