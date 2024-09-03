const express = require('express');
const multer = require('multer');
const path = require('path');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { MongoClient, ObjectId } = require('mongodb');
const cors = require('cors');
const bodyParser = require('body-parser');
const fs = require('fs');
require('dotenv').config();



// Initialize Express app
const app = express();
const port = 3000;

// Connection URL and MongoDB setup
const url = 'mongodb://127.0.0.1:27017';
const client = new MongoClient(url);
const dbName = 'jb';

// Middleware setup
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

// Multer setup for file uploads
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname));
    }
});
const upload = multer({ storage });

// Connect to MongoDB
client.connect()
    .then(() => console.log('Connected successfully to MongoDB'))
    .catch(err => console.error('MongoDB connection error:', err));

const db = client.db(dbName);
const collection = db.collection('jobSeekers');

// Load JWT secret from environment variables
const jwtSecret = process.env.JWT_SECRET;
if (!jwtSecret) {
    throw new Error('JWT_SECRET is not defined');
}

// Create uploads directory if it doesn't exist
const uploadsDir = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadsDir)) {
    fs.mkdirSync(uploadsDir);
}

// Sign-up route with file upload
app.post('/', upload.single('resume'), async (req, res) => {
    try {
        const { fname, lname, email, password } = req.body;
        const resume = req.file;

        // Validate required fields
        if (!fname || !lname || !email || !password || !resume) {
            return res.status(400).json({ message: 'All fields are required including resume' });
        }

        // Check if email already exists
        const existingUser = await collection.findOne({ email });
        if (existingUser) {
            return res.status(409).json({ message: 'Email already exists' });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        await collection.insertOne({
            fname,
            lname,
            email,
            password: hashedPassword,
            resumePath: resume.path,
            address: '', // To be updated later
            age: '',
            school: '',
            university: '',
            skills: [],
        });

        // Create JWT payload
        const payload = { email };

        // Generate JWT
        const token = jwt.sign(payload, jwtSecret, { expiresIn: '1h' });

        // Return JWT in response
        res.status(201).json({ token });
    } catch (error) {
        console.error('Error during registration:', error);
        res.status(500).send('Internal Server Error');
    }
});

// Sign-in route
app.post('/signin', async (req, res) => {
    try {
        const { email, password } = req.body;

        // Validate required fields
        if (!email || !password) {
            return res.status(400).json({ message: 'Email and password are required' });
        }

        // Find user by email
        const user = await collection.findOne({ email });
        if (!user) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        // Compare password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        // Create JWT payload
        const payload = { email };

        // Generate JWT
        const token = jwt.sign(payload, jwtSecret, { expiresIn: '1h' });

        // Return JWT in response
        res.json({ token });
    } catch (error) {
        console.error('Error during sign-in:', error);
        res.status(500).send('Internal Server Error');
    }
});

// Middleware to verify JWT




const authenticateToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (token == null) return res.sendStatus(401); // Unauthorized

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
        if (err) return res.sendStatus(403); // Forbidden
        req.user = user;
        next();
    });
};


// Route to get profile information
app.get('/:email', authenticateToken, async (req, res) => {
    // try {
        const email = req.params.email; // Extract email from URL parameter
        
        const jobSeeker = await collection.findOne({ email: email });

    

        res.json(jobSeeker); // Send the job seeker's details as JSON response
  
});






app.put('/', async (req, res) => {
   
        // const userId = req.user.email; // Assuming user ID is included in the token
     
        

        const updateResult = await collection.updateOne({ email:  req.user.email }, { $set: req.body });
        res.send(updateResult);

});



// Start the server
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
