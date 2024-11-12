function checkForName(inputText) {
    console.log("::: Running checkForName :::", inputText);

    // List of valid captain names
    const validNames = [
        "Picard",
        "Janeway",
        "Kirk",
        "Archer",
        "Georgiou"
    ];

    // Check if inputText is valid and not empty
    if (!inputText || typeof inputText !== 'string') {
        alert("Please enter a name.");
        return;
    }

    // Clean up input text and check if it matches any name in the list (case-insensitive)
    const normalizedInput = inputText.trim().toLowerCase();
    const isCaptain = validNames.some(name => name.toLowerCase() === normalizedInput);

    // Alert based on the match result
    if (isCaptain) {
        const formattedName = normalizedInput.charAt(0).toUpperCase() + normalizedInput.slice(1);
        alert(`Welcome, Captain ${formattedName}!`);
    } else {
        alert("Please enter a valid captain name (e.g., Picard, Janeway).");
    }
}

// Export the function for testing purposes
export { checkForName };

