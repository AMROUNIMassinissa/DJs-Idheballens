// server.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const bcrypt = require('bcrypt');
const { check, validationResult } = require('express-validator');



const app = express();
const port = 4000;


// Connect to MongoDB (replace 'your_mongodb_uri' with your actual MongoDB URI)
//connect to mongo db
mongoose.connect("mongodb://127.0.0.1:27017/users");

//when connected
mongoose.connection.on("connected", () => {
    console.log("connected to database");
});

//if error when connecting to database
mongoose.connection.on("error", (err) => {
    console.log("error connecting to database: " + err);
});

// Define a Mongoose schema and model for your data
const userSchema = new mongoose.Schema({
    nom: String,
    prenom: String,
    num: Number,
    email: String,
    password: String,
});

const User = mongoose.model('Users', userSchema);

// Middleware
app.use(bodyParser.json());

app.use(cors());


// API endpoints
app.post('/api/user', [check('email').isEmail().normalizeEmail()], async (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ error: 'Invalid email format' });
        }

        const { nom, prenom, num, email, password } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);


        const newUser = await User.create({
            nom, prenom, num, email, password: hashedPassword
        });
        res.json(newUser);
    } catch (err) {
        res.status(500).json({ error: 'Error creating user' });
    }
});

app.get('/api/user', async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (err) {
        res.status(500).json({ error: 'Error retrieving users' });
    }
});
app.get('/api/validate/:token', async (req, res) => {
    const token = req.params.token;

    try {
        const user = await User.findOne({ validationToken: token });

        if (!user) {
            return res.status(400).json({ error: 'Invalid validation token' });
        }

        user.validationToken = null; // Mark the user as validated
        await user.save();

        res.json({ message: 'Email validated successfully' });
    } catch (err) {
        res.status(500).json({ error: 'Error validating email' });
    }
});
// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
