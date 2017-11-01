var firstNumber = true;
var secondNumber = true;
var operator;

//number clicked in the calculator
function setNumberListeners() {
  //get the input from the user
  var btn = document.querySelectorAll('.buttonNum');

  for (var i = 0; i < btn.length; i++) {
    var numberClicked = btn[i];

    numberClicked.addEventListener('click', function(event) {
      console.log(this.value + ' was clicked');
    })
  }
};

//operator clicked in the calculator
function setOperatorListeners(){
  //get the input from the user
  var operation = document.querySelectorAll('.operator');

  for (var i = 0; i < operation.length; i++) {
    var operator = operation[i];

    operator.addEventListener('click', function(event) {
      console.log(this.value + ' was clicked');
    })
  }

//   var clear = document.querySelectorAll('.buttonClear');
//
// };

setNumberListeners();
setOperatorListeners();
// function calculation(){
//
// }



// Display current number
// screen.innerHTML = calc;
