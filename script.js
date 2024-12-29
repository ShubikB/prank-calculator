console.log("JS Loaded Successfully")

const btnElem = document.querySelectorAll(".btn")
const displayElem = document.querySelectorAll(".display")

console.log(btnElem)
console.log(displayElem)

let stringToDisplay = ""
console.log(stringToDisplay)

btnElem.forEach((btn) => {
  btn.addEventListener("click", () => {
    btnValue = btn.innerText
    if (btnValue === "AC") {
      console.log(`All Clear function called`)
      allClearFn()
    } else if (btnValue === "C") {
      console.log(`Clear function called`)
      clearFn()
    } else if (btnValue === "=") {
      console.log(`Calculation function called`)
      calculateFn()
    } else {
      stringToDisplay += btnValue
      console.log(stringToDisplay)
    }
  })
})

const displayFn = () => {
  console.log("Display updated succesfully")
  displayElem.forEach((display) => {
    display.innerText = stringToDisplay
  })
}

const allClearFn = () => {
  stringToDisplay = ""
  displayFn()
}

const clearFn = () => {
  stringToDisplay = stringToDisplay.slice(0, -2)
  displayFn()
}

const calculateFn = () => {
  try {
    stringToDisplay = eval(stringToDisplay)
  } catch (error) {
    console.error("Invalid expression")
    stringToDisplay = "Error"
  }
  displayFn()
}
