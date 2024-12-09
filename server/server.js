const express = require('express'); // imports express.js frameworks
const mongoose = require('mongoose'); // connects mongodb with node.js
const cors = require('cors'); //  This middleware allows your API to accept requests from different domains
const dotenv = require('dotenv'); //This is useful for storing sensitive data like database URLs, API keys
require('dotenv').config();

const PORT = 5000;

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

// User Schema
const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
});

const User = mongoose.model('User', userSchema);


app.post("/api/register", async (req, res) => {
    const { username, email, password } = req.body;
  
    // Hash password before saving
    const hashedPassword = await bcrypt.hash(password, 10);
  
    const newUser = new User({ username, email, password: hashedPassword });
    await newUser.save();
    res.status(201).json({ message: "User registered successfully!" });
  });
  
  // User Login Route
  app.post("/api/login", async (req, res) => {
    const { email, password } = req.body;
  
    // Find user by email
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: "User not found" });
  
    // Compare the passwords
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });
  
    // Generate JWT token
    const token = jwt.sign({ userId: user._id }, "your_jwt_secret", { expiresIn: "1h" });
    res.status(200).json({ message: "Login successful", token });
  });
// start server

app.listen(PORT, () => console.log(`server is running on port ${PORT}`));