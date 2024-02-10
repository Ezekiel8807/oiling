//user dataBase Schema
import mongoose from 'mongoose'


const productSchema = new mongoose.Schema({
    name: String,
    type: [
        {
            litre: Number,
            price: Number,
            devFees: {
                type: Number,
                default: 200
            }
        },
        {
            litre: Number,
            price: Number,
            devFees: {
                type: Number,
                default: 500
            }
        },
        {
            litre: Number,
            price: Number,
            devFees: {
                type: Number,
                default: 200
            }
        }
    ],

});

const   products = mongoose.model('products', productSchema);
export default products;