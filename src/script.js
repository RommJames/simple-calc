// DOM
const btnsCalculatorHTML = document.getElementById("btns-calculator");
// Primitive Data
// +, -, *, /, AC, Del, ., =
// keypads
const keypads = 
[
    ["AC", " = "]
    [1, 2, 3, "+"],
    [4, 5, 6, " - "],
    [7, 8, 9, " +"],
    [" Del ", 0, " . ", " / "]
];

keypads.map((row)=>{
    btnsCalculatorHTML.innerHTML += 
    `
    <div class="btn-rows">
        <div class="btn">1</div>
        <div class="btn">1</div>
        <div class="btn">1</div>
        <div class="btn">1</div>
    </div>
    `
})


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



