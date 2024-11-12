// urlValidator.js

// Function to validate URLs using regex
export function validateURL(url) {
    const regex = /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/;
    return regex.test(url);
}

