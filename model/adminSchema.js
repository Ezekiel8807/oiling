//user dataBase Schema
import mongoose from 'mongoose'


const adminSchema = new mongoose.Schema({
    username: String,
    password: String,
});

const admins = mongoose.model('admins', adminSchema);
export default admins;