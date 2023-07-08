let parent_container = document.querySelector("#parent-container");
let display = document.getElementById("display");
let clear_btn = document.querySelector("#clear");
let delete_btn = document.querySelector("#delete");
let one_btn = document.querySelector("#the-one");
let two_btn = document.querySelector("#the-two");
let three_btn = document.querySelector("#the-three");
let add_btn = document.querySelector("#the-add");
let four_btn = document.querySelector("#the-four");
let five_btn = document.querySelector("#the-five");
let six_btn = document.querySelector("#the-six");
let subtract_btn = document.querySelector("#the-subtract");
let seven_btn = document.querySelector("#the-seven");
let eight_btn = document.querySelector("#the-eight");
let nine_btn = document.querySelector("#the-nine");
let multiply_btn = document.querySelector("#the-star");
let zero_btn = document.querySelector("#the-zero");
let dot_btn = document.querySelector("#the-dot");
let equals_btn = document.querySelector("#the-equals");
let divide_btn = document.querySelector("#the-divide");
console.log(display);
let number_str = "";
let number_str_2 = "";

let display_value = "";
const numbers_btns = document.querySelectorAll(".number-buttons");
const operator_btns = document.querySelectorAll(".operators-buttons");
let operator_and_number = {
    num_1: 0,
    num_2: 0,
    operator: 0,
    result: 0
};
clear_btn.addEventListener("click", handlerClear);
delete_btn.addEventListener("click", handleDelete);
numbers_btns.forEach(button => {
    button.addEventListener("click", () => {
        display_value = button.textContent;
        display.innerHTML += display_value;
        if (isOperator()){
            console.log("num_2 is pressed");
            console.log("button textContent: ", button.textContent);
            number_str_2 += button.textContent;
            console.log("num_2: ", number_str_2);
            operator_and_number.num_2 = Number(number_str_2);
            console.log(operator_and_number.num_2)
        }

        else if(!isOperator()){
            console.log("num_1 is pressed");
            console.log("button textContent: ", button.textContent);
            number_str += button.textContent; 
            operator_and_number.num_1 = Number(number_str);
            console.log(operator_and_number.num_1)
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
 * Checks whether the textarea is empty or not
 * TBD: This shpuld actuallyt check whether an operator exists on the textarea or not, to determine if we're on
 * num_1 or num_2
 */
function isOperator(){
    //if the operator button is checked, return true
    if(operator_and_number.operator != null){
        return true;
    }
    return false;
}

//isDisplay();

function handleOperator () {
    // Get the clicked operator button

    // Get the operator value from the button
    const operator = operator_and_number.operator;

    // Perform an action based on the operator
    switch (operator) {
        case "+":
            console.log("operators: ", operator_and_number);
            operator_and_number.result = add(operator_and_number.num_1, operator_and_number.num_2);
            console.log(operator_and_number.result);
            break;
        case "-":
            operator_and_number.result = subtract(operator_and_number.num_1, operator_and_number.num_2);
            break;
        case "*":
            console.log("operators: ", operator_and_number);
            operator_and_number.result = multiply(operator_and_number.num_1, operator_and_number.num_2);
            console.log(operator_and_number.result);

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

function isResult(){
    if (operator_and_number.result != null){
        display.textContent = operator_and_number.result;
    }
}

function handlerClear(){
    operator_and_number.num_1 = 0;
    operator_and_number.num_2 = 0;
    operator_and_number.operator = 0;
    operator_and_number.result = 0;
    display.innerHTML = "";
}

function handleDelete(){
    let curr_display = display.textContent;
    console.log(curr_display);
    display.textContent = curr_display.slice(0, curr_display.length-1);
}
function add(x, y){
    console.log("adding");
    console.log("x: ", x);
    console.log("y: ", y);
    console.log("x+y: ", x + y);
    return display_value = `${x + y}`;
}

function subtract(x, y){
    console.log("subtracting");
    return display_value = `${x-y}`;
}

function divide(x, y){
    console.log("dividing");
    return display_value = `${x / y}`;
}

function multiply(x, y){
    console.log("multiplying");
    return display_value = `${x * y}`;
}