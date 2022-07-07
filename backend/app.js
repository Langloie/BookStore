const express = require('express');
const app = express();
const router = require("./routes/book-routes");
const mongoose = require('mongoose');
const dotenv = require('dotenv')

//connect config file
dotenv.config({
    path: './config.env',
});

//middleware
app.use(express.json());
app.use("/books", router) //localhost:5000/books

mongoose.connect(process.env.DATABASE)
.then(()=>{
    console.log('connected to database')
})
.then(()=>{
    app.listen(5000)
}).catch((err)=>{
    console.log(err)
});

