const result = document.getElementById("result");
const input = document.getElementById("input");
const buttons = document.querySelectorAll("button");
let operands = [],
   operator;

for (let button of buttons) {
   button.addEventListener("click", e => getKey(e));
}

function getKey(e) {
   processInput(e.target.textContent);
}

function processInput(char) {
   if (input.textContent === "0") input.textContent = "";
   if (input.textContent.length < 10 && char !== "=") input.textContent += char;
   switch (char) {
      case "AC":
         input.textContent = result.textContent = "0";
         break;
      case "C":
         if (input.textContent.length <= 2) input.textContent = "0";
         else input.textContent = input.textContent.slice(0, -2);
         break;
      case "%":
         break;
      case "+":
         operator = char;
         break;
      case "-":
         operator = char;
         break;
      case "×":
         operator = char;
         break;
      case "÷":
         operator = char;
         break;
      case "=":
         result.textContent = String(calculation()).slice(0, 10);
   }
}

function getOperands() {
   operands = input.textContent.split(operator).map(o => +o);
   console.log(operands);
}

function calculation() {
   getOperands(operator);
   switch (operator) {
      case "+":
         return operands.reduce((a, b) => a + b);
      case "-":
         return operands.reduce((a, b) => a - b);
      case "×":
         return operands.reduce((a, b) => a * b);
      case "÷":
         return operands.reduce((a, b) => a / b);
   }
}
