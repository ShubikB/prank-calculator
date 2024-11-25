// Select the display element from the HTML document
const displayElement = document.querySelector(".display")

// Select all buttons with the class "input-btn" from the HTML document
const inputButtons = document.querySelectorAll(".input-btn")

// Initialize a variable to store the current input expression as an empty string
let currentInput = ""

// Function to update the display element with the provided value
function updateDisplay(value) {
  displayElement.innerText = value
}

// Function to check if a character is one of the operators
function isOperator(character) {
  return ["+", "-", "*", "/"].includes(character)
}

//function to create a random number
const ramdomNum = () => {
  Math.round(Math.random() * 10)
  return randomNumber < 5 ? randomNumber : 0
}

// Add event listeners to each button in the inputButtons NodeList
inputButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const buttonText = button.innerText

    // Check if the button is the "AC" button to clear all input
    if (buttonText === "AC") {
      currentInput = ""
      updateDisplay("0.00")

      // Check if the button is the "C" button to remove the last character
    } else if (buttonText === "C") {
      currentInput = currentInput.slice(0, -1)
      updateDisplay(currentInput || "0.00")

      // Check if the button is the "=" button to evaluate the expression
    } else if (buttonText === "=") {
      try {
        const calculationResult = eval(currentInput).toString()
        currentInput = calculationResult
      } catch {
        currentInput = "Error"
      }
      updateDisplay(currentInput)

      // Handle input when the button is neither a function nor "="
    } else {
      // Handle decimal point input
      if (buttonText === ".") {
        const lastNumber = currentInput.split(/[\+\-\*\/]/).pop() // Get the last number in the input
        // Prevent adding another decimal point if the last number already has one
        if (lastNumber.includes(".")) return // Exit the function if there’s already a decimal point
      }

      // Handle operator input
      if (isOperator(buttonText)) {
        // If the input is empty or last character is an operator, replace the operator
        if (currentInput.length === 0 || isOperator(currentInput[currentInput.length - 1])) {
          currentInput = currentInput.slice(0, -1) + buttonText // Remove the last operator and add the new one
        } else {
          currentInput += buttonText // Add the new operator to the input
        }
        updateDisplay(currentInput) // Update the display with the current input
        return // Exit the function to skip the next update

        // For all other inputs, just add the button text to the input
      } else {
        currentInput += buttonText
      }

      updateDisplay(currentInput) // Update the display with the current input
      console.log(buttonText) // Log the button text to the console for debugging
    }
  })
})
