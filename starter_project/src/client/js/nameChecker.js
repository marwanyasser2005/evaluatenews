// checkForName.js

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

    // Clean up input text and check if it matches any name in the list (case-insensitive)
    const normalizedInput = inputText.trim().toLowerCase();
    const isCaptain = validNames.some(name => name.toLowerCase() === normalizedInput);

    // Alert based on the match result
    if (isCaptain) {
        alert(`Welcome, Captain ${inputText.charAt(0).toUpperCase() + inputText.slice(1).toLowerCase()}!`);
    } else {
        alert("Please enter a valid captain name (e.g., Picard, Janeway).");
    }
}

export { checkForName };
