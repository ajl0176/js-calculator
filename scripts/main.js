  //const $calculator = document.querySelector('.calculator');
//sconst $calculatorkeys = document.querySelector('.calculator-keys');

function pushNumber(event) {
    (event.target.value);
    calculation.push(event.target.value)
    console.log(event.target.value);
  };

const number = document.querySelectorAll('.number');
  number.forEach(function(button) {
     button.addEventListener('click',pushNumber);
  });

  function pushOperator(event) {
    (event.target.value);
  calculation.push(event.target.value)
   console.log(event.target.value);
  };
  const operatorButtons = document.querySelectorAll('.operator');
      operatorButtons.forEach(function(button) {
         button.addEventListener('click',pushOperator);
      });


  const equalsign = document.querySelectorAll('.equal-sign');
  equalsign.forEach(function(button){
    button.addEventListener('click', calculate);

  });

const calculation = [];
function calculate(event) {
(event.target.value);
calculation.push(event.target.value)

let num1 = '';
let num2 = '';
let operator;
let result;

for (let i = 0; i < calculation.length; i++) {
if (['+', '-', '*', '/'].includes (calculation[i])) {
  operator = calculation[i];
} else if (operator){
  num2 = num2 + calculation [i];
} else
  num1 = num1 + calculation [i];
}
if (operator === '+') {
result = parseFloat(num1) + parseFloat(num2);
} else if (operator === '-'){
result = parseFloat(num1) - parseFloat(num2);
} else if (operator === '*'){
result = parseFloat(num1) * parseFloat(num2);
} else if (operator === '/'){
result = parseFloat(num1) / parseFloat(num2);

} alert(result)
};
