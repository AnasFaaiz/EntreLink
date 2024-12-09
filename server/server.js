const express = require('express'); // imports express.js frameworks
const mongoose = require('mongoose'); // connects mongodb with node.js
const cors = require('cors'); //  This middleware allows your API to accept requests from different domains
const dotenv = require('dotenv'); //This is useful for storing sensitive data like database URLs, API keys
require('dotenv').config();

dotenv.config();
const app = express();

//Middleware
app.use(cors());
app.use(express.json());

//MongoDB Connection
console.log('MongoDB URI:', process.env.MONGODB_URI);

mongoose.connect(process.env.MONGODB_URI || 'mongodb+srv://syedanasfaaiz:anasfaaiz2554@entrepreneur-website.uqmw0.mongodb.net/', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('MongoDB connected successfully'))
    .catch((err) => {
        console.error('MongoDB connection error:', err);
        console.log('Connection URI used:', process.env.MONGODB_URI);
    });

//Test route
app.get('/',(req, res) => {
    res.send('Backend is running!');
});

// start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`server is running on port ${PORT}`));