import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import path from "path";

import bookRoute from "./route/book.route.js";
import userRoute from "./route/user.route.js";

const app = express();

app.use(cors());
app.use(express.json());

// Load environment variables
dotenv.config();

const PORT = process.env.PORT || 4001;
const URI = process.env.MongoDBURI;

console.log('MongoDB URI:', URI);

// Connect to MongoDB
mongoose.connect(URI, {
    
})
    .then(() => {
        console.log("Connected to mongoDB");
    })
    .catch((error) => {
        console.error("Error connecting to mongoDB:", error);
    });

// Define routes
app.use("/book", bookRoute);
app.use("/user", userRoute);

// Serve frontend assets in production
if (process.env.NODE_ENV === "production") {
    const __dirname = path.resolve();
    app.use(express.static(path.join(__dirname, "Frontend", "dist")));
    app.get("*", (req, res) => {
        res.sendFile(path.join(__dirname, "Frontend", "dist", "index.html"));
    });
}

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
