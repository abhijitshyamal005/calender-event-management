const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');
const eventRoutes = require('./routes/eventRoutes');
const { protect } = require('./middlewares/authMiddleware');
require('dotenv').config();

// Initialize the app
const app = express();

// Middleware
app.use(express.json());
app.use(cors()); // Allows cross-origin requests

// Routes
app.use('/api/auth', authRoutes); // Authentication routes
app.use('/api/events', protect, eventRoutes); // Protected event routes

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.log('Database connection error:', err));

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
