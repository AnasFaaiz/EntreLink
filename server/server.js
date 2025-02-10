const express = require('express'); 
const mongoose = require('mongoose'); 
const cors = require('cors');
const UserModel = require('./models/User');
const dotenv = require('dotenv');
const fs = require('fs');
const helmet = require('helmet'); 
const https = require('https'); // Import https module

// Load environment variables from .env file
dotenv.config();

const PORT = 3003;

const app = express();
app.use(express.json());
app.use(cors());

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

// Log the environment variable to verify it is being loaded correctly
console.log('MongoDB URI:', process.env.MONGODB_URI);

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });

app.post('/register', (req, res) => {  
    UserModel.create(req.body)
    .then(User => res.json(User))
    .catch(err => res.json(err))
})

const options = {
    key: fs.readFileSync("server.key"),
    cert: fs.readFileSync("server.cert"),
};

https.createServer(options, app).listen(PORT, () => {
    console.log(`✅ Secure server running on https://localhost:${PORT}`);
});