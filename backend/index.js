import express from "express";
// import { PORT, mongoDBURL } from './config.js'
import mongoose  from "mongoose";
import { Book } from './models/bookModel.js'
import booksRoute from './routes/booksRoute.js'
import cors from 'cors';
import dotenv from 'dotenv'
// const dotenv = require('dotenv');
dotenv.config();
const mongoDBURL = process.env.mongoDBURL;

const app =  express();

// Middleware for parsing request body
app.use(express.json());

// Middleware for handling CORS POLICY
// Option 1: Allow All Origins with Default of cors(*)
// app.use(cors());
// Option 2: Allow Custom Origin
app.use(
    cors({
        origin: 'https://mern-app-frontend-gules.vercel.app',
        methods: ['GET', 'POST', 'PUT', 'DELETE'],
        allowedHeaders: ['Content-Type']
    })
); 

app.get('/', (request, response) => {
    console.log(request);
    return response.status(234).send("Welcome to Mern stack")
});

app.use('/books', booksRoute);

app.listen(process.env.PORT, () => {
    console.log(`App is listening to port : ${process.env.PORT}`)
})

mongoose.connect(mongoDBURL)
.then(() => {
    console.log("App connected to database")
})
.catch((err) => {
    console.log(err)
});


