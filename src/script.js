// DOM
const btnsCalculatorHTML = document.getElementById("btns-calculator");
const displayOutputHTML = document.querySelector("#display-output > h4");
const displayInputHTML = document.querySelector("#display-input > h1");

// Primitive Data
let NumberCompiler = [];
let recentOutput = [];
let firstOperand;
let secondOperand; 
let activeOperator;
let totalComputation;
// +, -, *, /, AC, Del, ., =
// keypads
const keypads = 
[
    ["AC", " = "],
    [1, 2, 3, " + "],
    [4, 5, 6, " - "],
    [7, 8, 9, " * "],
    ["Del", 0, " . ", " / "]
];

keypads.map((row)=>{
    const btnRows = document.createElement("div");
    btnRows.setAttribute("class", "btn-rows");
    btnsCalculatorHTML.append(btnRows);

    row.map((btnValue)=>{
        const btn = document.createElement("button");
        btn.setAttribute("class", "btn"); 
        if(!isInt(btnValue)){
            btn.classList.add("btn-colored")   ;
        }
        btn.textContent = btnValue;      
        btn.addEventListener("click",()=>{
            clickBtn(btnValue);
            btn.classList.toggle("btn-clicked");
            setTimeout(() => {
                btn.classList.toggle("btn-clicked");
            }, 300);
        })
        btnRows.appendChild(btn);
    })

    
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

// Check if Integer
function isInt(num){
    return Number.isInteger(num);
}

// clear all
function AC(){
    firstOperand = null;
    secondOperand = null;
    recentOutput = []
    displayInputHTML.textContent = 0;  
    displayOutputHTML.textContent = "";
    totalComputation = 0;
}

// key functions
function clickBtn(btnValue){

    displayInput(btnValue);
    
}

// Update Display Input

function displayInput(btnValue){
   

    if(isInt(btnValue)){
        NumberCompiler.push(btnValue);
        recentOutput.push(btnValue);
        displayInputHTML.textContent = NumberCompiler.join("");        

    }else{
        
        recentOutput.push(btnValue)
        
        if(!firstOperand){
            firstOperand = +(NumberCompiler.join(""));
        }else{
            secondOperand = +(NumberCompiler.join(""));
        }
        
        

        NumberCompiler = [];
        displayInputHTML.textContent = "0"
        console.log(firstOperand)

        clickOperator(btnValue, firstOperand, secondOperand);
    }
    console.log(NumberCompiler)
    console.log("first: ",firstOperand);
    console.log("second: ",secondOperand);
    displayOutputHTML.textContent = recentOutput.join("");
}

// Computation Functions

function clickOperator(op, num1, num2){

    op == "AC" && AC();
    activeOperator = op != " = " ? op : activeOperator;

    if(activeOperator && num1 && num2){
        op == " = " ? operations(" = ", num1, num2) : operations(activeOperator, num1, num2);
    }

}

function operations(option, num1, num2){
    if(option == " = "){
        computation(activeOperator, num1, num2);
        alert(activeOperator)
    }else{
        computation(option, num1, num2);
    }

}

function computation(op, num1, num2){
    const operators = {
        " + ": add(num1, num2),
        " - ": subtract(num1, num2),
        " * ": multiply(num1, num2),
        " / ": divide(num1, num2),
    }
    console.log("total: ", operators[op]);
    totalComputation = operators[op];
    firstOperand = totalComputation;
    displayInputHTML.textContent = totalComputation;
}



