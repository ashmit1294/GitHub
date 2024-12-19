// src/server.ts
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/database';
import authRoutes from './routes/Auth.route';
import errorMiddleware from './middlewares/error.middleware';

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Database Connection
connectDB();

// Routes
app.use('/api/auth', authRoutes);

// Error Handling Middleware
app.use(errorMiddleware);

// Start Server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
