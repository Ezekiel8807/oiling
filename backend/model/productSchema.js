//user dataBase Schema
import mongoose from 'mongoose'


const productSchema = new mongoose.Schema({
    name: String,
    type: [
        {
            litre: Number,
            price: Number
        },
        {
            litre: Number,
            price: Number
        },
        {
            litre: Number,
            price: Number
        }
    ],

});

const   products = mongoose.model('products', productSchema);
export default products;