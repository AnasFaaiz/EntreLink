require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const UserModel = require('./models/User');
const fs = require('fs');
const helmet = require('helmet');
// const https = require('https');
const http = require('http');

// Environment variables
const mongoUri = process.env.MONGODB_URI;
const PORT = process.env.PORT || 3003;

// Initialize Express
const app = express();

// Middleware
app.use(express.json());
app.use(cors({
    origin: ['http://localhost:5173'], // Convert HTTP to HTTPS later
    credentials: true
}));

app.use(helmet({
    contentSecurityPolicy: {
        directives: {
            defaultSrc: ["'self'"],
            scriptSrc: ["'self'", "'unsafe-inline'", "'unsafe-eval'"],
            styleSrc: ["'self'", "'unsafe-inline'"],
            imgSrc: ["'self'", "data:", "https:", "http:"],
            connectSrc: ["'self'","http://localhost:3003"], // Later add HTTPS for security purpose
        },
    },
}));

// MongoDB Connection
console.log('📍 Attempting MongoDB connection...');
mongoose.connect(mongoUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('✅ Connected to MongoDB'))
.catch(err => {
    console.error('❌ MongoDB connection error:', err);
    process.exit(1);
});

// Routes
app.post('/register', async (req, res) => {
  try {
      console.log('📍 Received registration request:', req.body);
      
      // Validate required fields
      if (!req.body.username || !req.body.email || !req.body.password) {
          return res.status(400).json({
              error: 'Validation Error',
              message: 'All fields are required'
          });
      }

      const user = await UserModel.create(req.body);
      console.log('✅ User created:', user);
      res.json({ success: true, user: { username: user.username, email: user.email } });
  } catch (err) {
      console.error('❌ Error creating user:', err);
      
      // Handle duplicate key errors
      if (err.code === 11000) {
          return res.status(400).json({
              error: 'Duplicate Error',
              message: 'Username or email already exists'
          });
      }

      res.status(500).json({ 
          error: 'Internal Server Error',
          message: err.message 
      });
  }
});

// SSL Configuration - Use Later when you use HTTPS
// let options;
// try {
//     options = {
//         key: fs.readFileSync("server.key"),
//         cert: fs.readFileSync("server.cert")
//     };
// } catch (error) {
//     console.error('❌ SSL certificate files not found:', error);
//     process.exit(1);
// }

// Start Server
const server = http.createServer( app)
    .listen(PORT, () => {
        console.log(`✅ Secure server running on http://localhost:${PORT}`);
    })
    .on('error', (error) => {
        console.error('❌ Server error:', error);
        process.exit(1);
    });

// Graceful shutdown
process.on('SIGTERM', () => {
    console.log('📍 SIGTERM received. Shutting down gracefully...');
    server.close(() => {
        console.log('✅ Server closed');
        mongoose.connection.close(false, () => {
            console.log('✅ MongoDB connection closed');
            process.exit(0);
        });
    });
});