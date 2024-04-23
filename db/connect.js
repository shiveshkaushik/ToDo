const mongoose = require('mongoose');
require('dotenv').config()

const connectionString = process.env.MONGO_URI;


const connectDB = (url) =>{
    return mongoose.connect(connectionString,{
        useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify : false
    })
}

module.exports = connectDB;