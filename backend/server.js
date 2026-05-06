// server.js
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './config/db.js';
import authRoutes from './routes/auth.js'; // Import your auth routes


dotenv.config();   // Load Environment Variables
connectDB();

const app = express();

// Middleware
app.use(express.json());
app.use(cors({
  origin: "http://localhost:5173" // Replace with your Vercel URL after deployment
}));

// Routes
// We use the imported authRoutes instead of 'require'
app.use("/api/auth", authRoutes);

// Test Route
app.get('/', (req, res) => {
    res.send("DSA Visualizer Backend is Live!");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));