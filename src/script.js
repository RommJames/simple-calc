// DOM
const btnsCalculatorHTML = document.getElementById("btns-calculator");
const displayOutputHTML = document.getElementById("display-output");
const displayInputHTML = document.getElementById("display-input");

// Primitive Data
// +, -, *, /, AC, Del, ., =
// keypads
const keypads = 
[
    ["AC", "="],
    [1, 2, 3, "+"],
    [4, 5, 6, "-"],
    [7, 8, 9, "*"],
    ["Del", 0, ".", "/"]
];

keypads.map((row)=>{
    const btnRows = document.createElement("div");
    btnRows.setAttribute("class", "btn-rows");
    btnsCalculatorHTML.append(btnRows);

    row.map((btnValue)=>{
        const btn = document.createElement("div");
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

// key functions
function clickBtn(btnValue){
    console.log(btnValue);
}



