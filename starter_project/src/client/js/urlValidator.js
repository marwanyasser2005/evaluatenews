// Function to validate URLs using regex
export function validateURL(url) {
    // Improved regex pattern for URL validation
    const regex = /^(https?:\/\/)(www\.)?([a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)+)(:[0-9]{1,5})?(\/\S*)?$/;
    
    // Check if URL is a non-empty string before testing with regex
    if (typeof url !== 'string' || url.trim() === '') {
        return false;
    }
    
    return regex.test(url.trim());
}

