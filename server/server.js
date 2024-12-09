const express = require('express'); // imports express.js frameworks
const mongoose = require('mongoose'); // connects mongodb with node.js
const cors = require('cors');
const UserModel = require('./models/User');
const dotenv = require('dotenv'); //This is useful for storing sensitive data like database URLs, API keys
require('dotenv').config();

const PORT = 3001;

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());


//MongoDB Connection
mongoose.connect("mongodb+srv://syedanasfaaiz:anasfaaiz2554@entrepreneur-website.uqmw0.mongodb.net/Users");

app.post('/register', (req, res)=> {  
    UserModel.create(req.body)
    .then(User => res.json(User))
    .catch(err => res.json(err))
})

app.listen(3001, () => {
    console.log("server is running!")
})