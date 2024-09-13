import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import userRoutes from './routes/userroutes.js'; // Import routes
import cors from 'cors'; // Import cors

const app = express();

// Middleware configuration
app.use(cors({
    origin: 'http://localhost:5173', // Allow requests from this origin
    credentials: true // Allow credentials (cookies, authorization headers, etc.)
}));

app.use(bodyParser.json()); // Middleware to parse JSON requests

const url = "mongodb://localhost:27017/login"; // MongoDB connection URL

mongoose.connect(url)
    .then(() => {
        console.log("Connected to MongoDB");
    })
    .catch((err) => {
        console.log("MongoDB connection error:", err);
    });

// Routes
app.use('/api/users', userRoutes); // Use the user routes

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
