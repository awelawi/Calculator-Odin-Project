/**
 * Defining variables to manipulate the DOM
 */
let parent_container = document.querySelector("#parent-container");
let display = document.getElementById("display");
let clear_btn = document.querySelector("#clear");
let delete_btn = document.querySelector("#delete");
let equals_btn = document.querySelector("#the-equals");
let digit_1 = "";
let digit_2 = "";
let display_value = "";
const numbers_btns = document.querySelectorAll(".number-buttons");
const operator_btns = document.querySelectorAll(".operators-buttons");

/**
 * An object that holds tje numbers to be operated on, operation and result
 * returns None
 */
let operator_and_number = {
    num_1: 0,
    num_2: 0,
    operator: null,
    result: 0
};

clear_btn.addEventListener("click", handleClear);
delete_btn.addEventListener("click", handleDelete);

/**
 * For each number button pressed, we need to determine if it's part of number 1 or part of number 2
 */
numbers_btns.forEach(button => {
    button.addEventListener("click", () => {
        display_value = button.textContent;
        display.innerHTML += display_value;
        if (isOperator()){
            digit_2 += button.textContent;
            operator_and_number.num_2 = Number(digit_2);
        }

        else if(!isOperator()){
            digit_1 += button.textContent; 
            operator_and_number.num_1 = Number(digit_1);
        }
    })
}); 

operator_btns.forEach(button => {
    button.addEventListener("click", () => {
        display_value = button.textContent
        display.innerHTML += display_value
        operator_and_number.operator = button.textContent;
    })
});

equals_btn.addEventListener("click", handleOperator)

/**
 * Checks whether an operator has been clicked
 * @returns boolean
 * 
*/
function isOperator(){
    //if the operator button is checked, return true
    if(operator_and_number.operator != null){
        return true;
    }
    return false;
}

/**
 * Resets the calculator whenever the user presses the clear button
 * @returns None
 */
function handleClear () {
    operator_and_number.num_1 = 0;
    operator_and_number.num_2 = 0;
    operator_and_number.operator = null;
    operator_and_number.result = 0;
    display.innerHTML = "";
    digit_1 = "";
    digit_2 = "";
}

/**
 * Should delete the last digit entered on the screen and update the calculated values as needed
 * returns None
 */
function handleDelete () {
    let curr_display = display.textContent;
    display.textContent = curr_display.slice(0, curr_display.length - 1);
}

/**
 * Invokes one of four of the operation functions whenever an operation button is clicked.
 * @returns None
 */
function handleOperator () {
    const operator = operator_and_number.operator;

    // Perform an action based on the operator
    switch (operator) {
        case "+":
            operator_and_number.result = add(operator_and_number.num_1, operator_and_number.num_2);
            break;
        case "-":
            operator_and_number.result = subtract(operator_and_number.num_1, operator_and_number.num_2);
            break;
        case "*":
            operator_and_number.result = multiply(operator_and_number.num_1, operator_and_number.num_2);

            break;
        case "/":
            operator_and_number.result = divide(operator_and_number.num_1, operator_and_number.num_2);
            break;
        default:
            // Handle other operators or unknown cases
            break;
    }
    isResult();
}

/**
 * Displays the result in the text area
 * @returns void
 */
function isResult(){
    if (operator_and_number.result != null){
        display.textContent = operator_and_number.result;
    }
}

/**
 * Adds two numbers together
 * @param {A} x 
 * @param {*} y 
 * @returns 
 */
function add(x, y){

    return display_value = `${x + y}`;
}

/**
 * Subtracts one number from another
 * @param {*} x 
 * @param {*} y 
 * @returns 
 */
function subtract(x, y){
    return display_value = `${x-y}`;
}

/**
 * Divides two numbers
 * @param {*} x 
 * @param {*} y 
 * @returns 
 */
function divide(x, y){
    return display_value = `${x / y}`;
}

/**
 * Multiplies two numbers
 * @param {*} x 
 * @param {*} y 
 * @returns 
 */
function multiply(x, y){
    return display_value = `${x * y}`;
}