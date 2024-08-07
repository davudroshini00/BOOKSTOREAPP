import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import path from "path";
import bookRoute from "./route/book.route.js";
import userRoute from "./route/user.route.js";

// Initialize express app
const app = express();

// Middleware
app.use(cors()); // Enable CORS
app.use(express.json()); // Parse JSON bodies

// Load environment variables from .env file
dotenv.config();

// Define port
const PORT = process.env.PORT || 4000;

// MongoDB URI from environment variables
const uri = process.env.MONGO_URI;
console.log('MongoDB URI:', uri); 
mongoose.connect(uri, {
    
    serverSelectionTimeoutMS: 30000 // 30 seconds
  }).then(() => {
    console.log('MongoDB connected...');
  }).catch(err => {
    console.error('MongoDB connection error:', err);
  });

// Routes
app.use("/book", bookRoute); // Book routes
app.use("/user", userRoute); // User routes

// Serve frontend assets in production
if(process.env.NODE_ENV === "production"){
    const dirPath = path.resolve();
    app.use(express.static("Frontend/dist"));
    app.get("*",(req,res) => {
        res.sendFile(path.resolve(dirPath,"Frontend","dist","index.html"))
    })

}

// Start the server
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
