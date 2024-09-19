import express from "express";
import bodyParser from "body-parser";
import cors from "cors"; // Import cors
import connectDB from "./config/db.js";
import "dotenv/config.js";
import morgan from "morgan";
import userRoutes from "./routes/userroutes.js"; // Import routes

const PORT = process.env.PORT || 5000;
connectDB();

const app = express();

// Body Parser Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Middleware configuration
app.use(
    cors({
        origin: "http://localhost:5173", // Allow requests from this origin
        credentials: true, // Allow credentials (cookies, authorization headers, etc.)
    })
);

app.use(bodyParser.json()); // Middleware to parse JSON requests

// Routes
app.get("/", (req, res) => {
    res.send("API is running.......");
});

// app.use("/api/users", userRoutes); // Use the user routes

app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
});
