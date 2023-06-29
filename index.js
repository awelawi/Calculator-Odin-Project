let parent_container = document.querySelector("#parent-container");
let display = document.getElementById("display");
let clear_btn = document.querySelector("#clear");
let delete_btn = document.querySelector("delete");
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

let display_value = "";
const numbers_btns = document.querySelectorAll(".number-buttons");
const operator_btns = document.querySelectorAll(".operators-buttons");
let operator_and_number = {
    num_1: 0,
    num_2: 0,
    operator: ""
};

numbers_btns.forEach(button => {
    button.addEventListener("click", () => {
        if(true){
            operator_and_number.num_1 = button.textContent;
        }
        else{
            operator_and_number.num_2 = button.textContent;
        }
        display_value = button.textContent;
        console.log(typeof(display_value))
        display.innerHTML += `${display_value}`;
    })
});

operator_btns.forEach(button => {
    button.addEventListener("click", () => {
        display_value = button.textContent
        display.innerHTML += display_value
    })
});


/**
 * Checks whether the textarea is empty or not
 * TBD: This shpuld actuallyt check whether an operator exists on the textarea or not, to determine if we're on
 * num_1 or num_2
 */
function isDisplay(){
    //use pattern match to determine whether an operation is on the display
    const regex = /\+\*=-\//i;
    console.log(regex)
    console.log(regex.test(display))
    if (regex.test(display) == true){
        console.log("the operator btn has been clicked");
        return true;
    }
    return false;
}

isDisplay();

function receiveInput(){

}
function operate(num_1, num_2, operator){
    if (operator === "+"){
        add(num_1, num_2);
    }

    else if(operator === "-"){
        subtract(num_1 - num_2);
    }

    else if(operator === "*"){
        multiply(num_1 * num_2);
    }

    else{
        if(num_2 === 0){
            alert("invalid operation");
        }
        else{
            divide(num_1, num_2)
        }
    }
}

function add(x, y){
    return display_value += `${x + y}`
}

function subtract(x, y){
    return display_value += `${x - y}`
}

function divide(x, y){
    return display_value += `${x / y}`
}

function multiply(x, y){
    return display_value += `${x * y}`
}

function popTextArea(value_to_display){
    return display.textContent += `${value_to_display}`;
}