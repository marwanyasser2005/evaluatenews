const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.static('dist')); // Serves client files if you are using a built front-end

console.log(`Current directory: ${__dirname}`);

// Environment Variables for API configuration
const API_URL = process.env.API_URL;
const API_KEY = process.env.API_KEY;

// Root Route - Introduction Message
app.get('/', (req, res) => {
    res.send("This is the server API page. Access its services via the client app.");
});

// POST Route for Data Analysis
app.post('/analyze', async (req, res) => {
    const { text } = req.body;

    // Input validation
    if (!text) {
        return res.status(400).json({ error: 'Text is required for analysis.' });
    }

    try {
        // Simulate data processing (Replace with actual API logic if needed)
        const sentiment = analyzeSentiment(text);
        res.status(200).json({ sentiment });
    } catch (error) {
        console.error('Error analyzing text:', error);
        res.status(500).json({ error: 'An error occurred while analyzing the text.' });
    }
});

// Mock Sentiment Analysis Function
function analyzeSentiment(text) {
    // Replace with actual NLP sentiment analysis logic or API call
    return 'Positive'; // Placeholder sentiment result
}

// Error Handling for Undefined Routes
app.use((req, res) => {
    res.status(404).send('Route not found.');
});

// Start the Server
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}!`);
});


