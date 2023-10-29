//MongoDB connection via mongoose
import mongoose from 'mongoose'


const DataBase = () => {
    mongoose.connect(`${process.env.MONGOLINK}`)
    .then(() => {
      console.log('Database connection successful');

    }).catch((err) => {
      console.error('Database connection failed');
    });
}

export default DataBase;