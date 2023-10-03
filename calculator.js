
let operation = {
    a: "",
    b: "",
    operator: null

};


const add = function(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b == 0) {
        return "THOU SHALT NOT DIVIDE BY ZERO";
    }
    return a / b;
}

const container = document.querySelector("#container");

const buttons = document.querySelectorAll("button");

const display = document.querySelector("#display");

const operate = function() {
    if (operation.b) {
        operation.a = operation.operator(+operation.a, +operation.b);
        operation.b = "";
        operation.operator = null;
    }
}

buttons.forEach((button) => {

    button.addEventListener('click', () => {
        setButton(button.id);
        if (operation.b) {
            display.textContent = operation.b;
        } else {
            display.textContent = operation.a;
        }
       
    });
});



function setButton(a) {
    switch (a) {
        case "1":
        case "2":
        case "3":
        case "4":
        case "5":
        case "6":
        case "7":
        case "8":
        case "9":
        case "0":
            if (operation.operator) {
                operation.b = operation.b + a.toString();
            } else {
                operation.a = operation.a + a.toString();
            }
            break;
        case "multiply":
            operate();
            operation.operator = multiply;
            break;
        case "divide":
            operate();
            operation.operator = divide;
            break;
        case "add":
            operate();
            operation.operator = add;
            break;
        case "subtract":
            operate();
            operation.operator = subtract;
            break;
        case "equals":
            operate();
            break;
        case "clear":
            operation = {
                a: "0",
                b: "",
                operator: null
            }
           break;
            
            

            
    }
    console.log(operation);
}