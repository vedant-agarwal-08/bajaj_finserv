const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); 
const app = express();

// Middleware to parse JSON bodies
app.use(bodyParser.json());
app.use(cors({
    origin: '*', // Allow all origins. You can specify a single domain or a list of domains instead of '*'
    methods: ['GET', 'POST'], // Allow specific methods
    
}));
// Helper function to find the highest lowercase alphabet
const highestLowercaseAlphabet = (alphabets) => {
    const lowercaseLetters = alphabets.filter(char => char >= 'a' && char <= 'z');
    return lowercaseLetters.length > 0 ? [Math.max(...lowercaseLetters)] : [];
};

// POST method endpoint
app.post('/bfhl', (req, res) => {
    const { data } = req.body;
    if (!data || !Array.isArray(data)) {
        return res.status(400).json({ is_success: false, error: 'Invalid input' });
    }

    const numbers = data.filter(item => !isNaN(item));
    const alphabets = data.filter(item => isNaN(item));
    const highestAlphabet = highestLowercaseAlphabet(alphabets);

    const response = {
        is_success: true,
        user_id: "john_doe_17091999", // Replace with dynamic user ID generation if needed
        email: "aman.sharma2021@vitsudent.ac.in", // Replace with dynamic email if needed
        roll_number: "21BCB0075", // Replace with dynamic roll number if needed
        numbers: numbers,
        alphabets: alphabets,
        highest_lowercase_alphabet: highestAlphabet
    };

    return res.json(response);
});

// GET method endpoint
app.get('/bfhl', (req, res) => {
    res.status(200).json({ operation_code: 1 });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
