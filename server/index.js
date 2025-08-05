// server/index.js

// 1. Load environment variables first
// This ensures process.env variables are available throughout the app
require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path'); // Needed for serving static files in production
// const nodemailer = require('nodemailer'); // Uncomment if you're using it for emails

const app = express();

// 2. Middleware Setup
// CORS: Allows your client-side application to make requests to this server.
// You might want to restrict this to your client's domain in production.
app.use(cors({
  origin: process.env.CLIENT_URL || 'http://localhost:3000', // Allow requests from your client
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allowed HTTP methods
  credentials: true // Allow cookies to be sent (if needed for auth)
}));

// Body-parser: Parses incoming request bodies
app.use(bodyParser.json()); // For parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // For parsing application/x-www-form-urlencoded

// 3. Database Connection
// Removed deprecated options useNewUrlParser and useUnifiedTopology
mongoose.connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.error('MongoDB connection error:', err);
    // Exit process if DB connection fails
    process.exit(1);
  });

// 4. Define your API Routes
// Example: A simple test route for the API base
app.get('/api', (req, res) => {
  res.send('Comfort Cooling API is running!');
});

// Mount your contact routes
app.use('/api/contact', require('./routes/contactRoutes'));

// Add a root route for development to confirm server is running
// This will only be active in development environments
if (process.env.NODE_ENV !== 'production') {
  app.get('/', (req, res) => {
    res.send('Comfort Cooling Server is running in development mode!');
  });
}


// 5. Serve static assets if in production
// This block should be *after* your API routes
if (process.env.NODE_ENV === 'production') {
  // Serve any static files from the React build folder
  app.use(express.static(path.join(__dirname, '../client/build')));
  
  // Handle any other route by serving the index.html file
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../client/build/index.html'));
  });
}

// 6. Error Handling Middleware (Optional but Recommended)
// This should be one of the last middlewares
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});


// 7. Start the Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
