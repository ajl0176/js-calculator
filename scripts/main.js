const $calculator = document.querySelector('.calculator');
const $calculatorscreen = document.querySelector('.calculator-screen');
const $calculatorkeys = document.querySelector('.calculator-keys');

//const keys = $calculator.querySelector('.calculator-keys');

/*keys.addEventListener('click', event => {
  if (event.target.matches('button')) {
  }
});*/

function pushNumber(event) {
     alert(event.target.value);
  };

const buttons = document.querySelectorAll('.number');
  buttons.forEach(function(button) {
     button.addEventListener('click', pushNumber);
  });

function pushOperator(event) {
  alert(event.target.value);
}

const operation = document.querySelectorAll('.operator');
  operation.forEach(function(button){
    button.addEventListener('click', pushOperator)
  });

  function pushEqualsign(event) {
    alert(event.target.value);
  }

  const calculate = document. querySelectorAll('.equalsign');
    calculate.forEach(function(button) {
    button.addEventListener('click', pushEqualsign)
  });
