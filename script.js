function displayResult () {
    // get the firstNumber element and it's value
    let inputElement1 = document.getElementById("firstNumber")
    let firstInput = inputElement1.value
    // get the secondNumber element and it's value
    let inputElement2 = document.getElementById("secondNumber")
    let secondInput = inputElement2.value
    // get the result element
    let resultElement = document.getElementById("result")

    if ((firstInput.length == 0) || (secondInput.length == 0)) {
        //display the alert message if input is empty
        resultElement.textContent = "Empty input!"
    } else if(isNaN(firstInput) || isNaN(secondInput)) {
        //display the alert message if any input is not a number
        resultElement.textContent = "Invalid input!"
    }
    else {
        // Convert input string to number
        let firstNum = Number(firstInput)
        let secondNum = Number(secondInput)
        // get the operator element
        let operatorElement = document.getElementById("operator")
        // extract the operator selected
        let operatorSelected = operatorElement.options[operatorElement.selectedIndex].value
        // do calculation
        let displayResult = calculate(firstNum,secondNum,operatorSelected) 
        //update the element to display the result    
        resultElement.textContent = displayResult
    }    
}

// Do calculation
function calculate (firstNum, secondNum, operator) {
    switch(operator){
        case "+":
            return firstNum + secondNum
        case "-":
            return firstNum - secondNum
        case "*":
            return firstNum * secondNum
        case "/":
            return firstNum / secondNum

        default:
            return ""
    }
}

//clear the calculation result when user changes operator
function clearResult() {   
    //find the result elements to clear
    let resultElement = document.getElementById("result")
    
    // then set the values to ""
    resultElement.textContent = "Result"
}

//clear first input and result in the form
function clearFirst () {
    // find all 3 elements to clear
    let inputElement1 = document.getElementById("firstNumber")
    let resultElement = document.getElementById("result")
    
    // then set their values to ""
    inputElement1.value = ""
    resultElement.textContent = ""
}

//clear second input and result in the form
function clearSecond () {
    let inputElement2 = document.getElementById("secondNumber")
    let resultElement = document.getElementById("result")
    
    inputElement2.value = ""
    resultElement.textContent = " "
}
//clear entire form when user reset
function clearForm () {
    // find all 3 elements to clear
    let inputElement1 = document.getElementById("firstNumber")
    let inputElement2 = document.getElementById("secondNumber")
    let resultElement = document.getElementById("result")
    
    // then set their values to ""
    inputElement1.value = ""
    inputElement2.value = ""
    resultElement.textContent = ""

}