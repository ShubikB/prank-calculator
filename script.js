// Select the display element from the HTML document
const displayElement = document.querySelector(".display");

// Select all buttons with the class "input-btn" from the HTML document
const inputButtons = document.querySelectorAll(".input-btn");

// Initialize a variable to store the current input expression as an empty string
let currentInput = "";

// Function to update the display element with the provided value
function updateDisplay(value) {
    displayElement.innerText = value; // Set the inner text of the display element to the provided value
}

// Function to check if a character is one of the operators
function isOperator(character) {
    return ['+', '-', '*', '/'].includes(character); // Return true if the character is an operator
}

// Add event listeners to each button in the inputButtons NodeList
inputButtons.forEach(button => {
    button.addEventListener("click", () => { // Set up a click event listener for each button
        const buttonText = button.innerText; // Get the text content of the clicked button

        // Check if the button is the "AC" button to clear all input
        if (buttonText === "AC") {
            currentInput = "";           // Clear the current input
            updateDisplay("0.00"); // Reset the display to "0.00"

        // Check if the button is the "C" button to remove the last character
        } else if (buttonText === "C") {
            currentInput = currentInput.slice(0, -1); // Remove the last character from the current input
            updateDisplay(currentInput || "0.00"); // Update the display; show "0.00" if input is empty

        // Check if the button is the "=" button to evaluate the expression
        } else if (buttonText === "=") {
            try {
                const calculationResult = eval(currentInput).toString(); // Evaluate the current input expression and convert to string
                currentInput = calculationResult; // Store the valid calculation result
            } catch {
                currentInput = "Error"; // Set error message if there's an evaluation error
            }
            updateDisplay(currentInput); // Update the display with the current input

        // Handle input when the button is neither a function nor "="
        } else {
            // Handle decimal point input
            if (buttonText === '.') {
                const lastNumber = currentInput.split(/[\+\-\*\/]/).pop(); // Get the last number in the input
                // Prevent adding another decimal point if the last number already has one
                if (lastNumber.includes('.')) return; // Exit the function if there’s already a decimal point
            } 
            
            // Handle operator input
            if (isOperator(buttonText)) {
                // If the input is empty or last character is an operator, replace the operator
                if (currentInput.length === 0 || isOperator(currentInput[currentInput.length - 1])) {
                    currentInput = currentInput.slice(0, -1) + buttonText; // Remove the last operator and add the new one
                } else {
                    currentInput += buttonText; // Add the new operator to the input
                }
                updateDisplay(currentInput); // Update the display with the current input
                return; // Exit the function to skip the next update

            // For all other inputs, just add the button text to the input
            } else {
                currentInput += buttonText; // Concatenate the button text to the current input
            }

            updateDisplay(currentInput); // Update the display with the current input
            console.log(buttonText); // Log the button text to the console for debugging
        }
    });
});
