//user dataBase Schema
import mongoose from 'mongoose'


const userSchema = new mongoose.Schema({
    username: String,
    firstname: {
        type: String,
        default: "",
    },
    lastname: {
        type: String,
        default: "",
    },
    phone: {
        type: String,
        default: "",
    },
    city: {
        type: String,
        default: "", 
    },
    state: {
        type: String,
        default: "",  
    },
    country: {
        type: String,
        default: "",  
    },
    address: {
        type: String,
        default: "",  
    },
    isUpdated: {
        type: Boolean,
        default: false,
    },
    isSeller: {
        type: Boolean,
        default: false,
    },
    email: String,
    password: String,
});

const users = mongoose.model('users', userSchema);
export default users;