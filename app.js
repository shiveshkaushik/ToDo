const express = require('express');
const app = express();
const taskRouter = require('./routes/tasks'); 
const port = 4000; 
const connectDB = require('./db/connect');
require('dotenv').config()
const notFound = require('./middleware/not-found');
const errorMiddlewareHandler = require('./middleware/errorhandler');

app.use(express.static('./public'));
app.use(express.json());
//order is important
app.use('/api/v1/tasks', taskRouter);
app.use(notFound); // should be below defined routes
app.use(errorMiddlewareHandler)

const start = async() => {
    try{
        await connectDB(process.env.MONGO_URI);
        console.log('db connected');
        app.listen(port,console.log('server is listening'));
    } catch(err)
    {
        console.log(err);
    }
}

start();