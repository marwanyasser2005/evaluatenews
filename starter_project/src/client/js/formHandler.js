// Importing the URL validation function
import { validateURL } from './urlValidator';  // Assuming `urlValidator.js` includes a URL validation function

// Server URL - Update this based on your server configuration
const serverURL = 'http://localhost:8000/api';

// Event listener for form submission
const form = document.getElementById('urlForm');
form.addEventListener('submit', handleSubmit);

// Handle form submission
function handleSubmit(event) {
    event.preventDefault();

    // Get the URL from the input field
    const formText = document.getElementById('name').value.trim();

    // Validate the URL
    if (!validateURL(formText)) {
        alert("Please enter a valid URL.");
        return;
    }

    // Send valid URL to the server
    sendDataToServer(formText);
}

// Function to send data to the server
async function sendDataToServer(url) {
    try {
        const response = await fetch(`${serverURL}/analyze`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ url })
        });

        // Check if the response is OK
        if (!response.ok) {
            throw new Error("Failed to analyze the URL.");
        }

        // Parse the JSON response from the server
        const data = await response.json();
        displayResults(data); // Assuming a function to display server results
    } catch (error) {
        console.error("Error:", error);
        alert("An error occurred while analyzing the URL. Please try again.");
    }
}

// Example function to display server response
function displayResults(data) {
    const resultDiv = document.getElementById('result');
    resultDiv.innerText = `Sentiment: ${data.sentiment}`;
}

// Export the handleSubmit function
export { handleSubmit };

