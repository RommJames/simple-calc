// Calculator Operation
function operate(num1, op, num2){
    switch(op){
        case "add":
            add(num1, num2);
            break;
        case "subtract":
            subtract(num1, num2);
            break;
        case "multiply":
            multiply(num1, num2);
            break;
        case "divide":
            divide(num1, num2);
            break;
    }
}

// Basic math operators
function add (num1, num2){
    return num1 + num2;
};

function subtract(num1, num2){
    return num1 - num2;
}

function multiply(num1, num2){
    return num1 * num2;
}

function divide(num1, num2){
    return num2 == 0 ? "Error!" : num1 / num2;
}



