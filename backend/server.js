const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const signupRoutes = require('./routes/signup');  // Import signup routes
const loginRoutes = require('./routes/login');    // Import login routes

dotenv.config(); // Load environment variables from .env file

const app = express();

// Middleware
app.use(cors());
app.use(express.json());  // Parse incoming JSON requests

// MongoDB Connection URI (use env variable)
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/mycollections'; // Default to local if not defined

// JWT Secret (use env variable)
const JWT_SECRET = process.env.JWT_SECRET || 'your_jwt_secret_here';  // Default secret for dev purposes

// MongoDB Connection
mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("Error connecting to MongoDB:", err));

// Routes
app.use('/api/signup', signupRoutes);  // Use signup routes under /api/signup path
app.use('/api/login', loginRoutes);    // Use login routes under /api/login path

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send({ message: 'Something went wrong!' });
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

