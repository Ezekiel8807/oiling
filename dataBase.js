//MongoDB connection via mongoose
import mongoose from 'mongoose'

const server = '127.0.0.1:27017'; 
const database = 'oily';


const DataBase = () => {
    mongoose.connect(`mongodb://${server}/${database}`)
    .then(() => {
      console.log('Database connection successful');

    }).catch((err) => {
      console.error('Database connection failed');
    });
}

export default DataBase;