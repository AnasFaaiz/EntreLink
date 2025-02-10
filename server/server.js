const express = require('express'); 
const mongoose = require('mongoose'); 
const cors = require('cors');
const UserModel = require('./models/User');
const dotenv = require('dotenv'); // Ensure dotenv is required correctly
const fs = require('fs');
const helmet = require('helmet'); 
const https = require('https'); // Import https module

// Load environment variables from .env file
dotenv.config();

const PORT = 3003;

const app = express();
app.use(express.json());
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}));

app.use(
  helmet({
    contentSecurityPolicy: {
      directives: {
        defaultSrc: ["'self'"],
        scriptSrc: ["'self'", "'unsafe-inline'"], 
        styleSrc: ["'self'", "'unsafe-inline'"],  
        imgSrc: ["'self'", "data:", "https:"],    
        connectSrc: ["'self'", "https://localhost:3003"],
      },
    },
  })
);

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('✅ Connected to MongoDB'))
  .catch(err => console.error('❌ MongoDB connection error:', err));

app.post('/register', (req, res) => {  
    console.log('Recieved registration request:', req.body);
    UserModel.create(req.body)
    .then(User => {
        console.log('✅ User created:', User);
        res.json(User);
    })
    .catch(err => {
        console.error('❌ Error creating user:', err);
        res.status(500).json({ error: 'Internal Server Error' });
    });
});

const options = {
    key: fs.readFileSync("server.key"),
    cert: fs.readFileSync("server.cert"),
};

https.createServer(options, app).listen(PORT, () => {
    console.log(`✅ Secure server running on https://localhost:${PORT}`);
});