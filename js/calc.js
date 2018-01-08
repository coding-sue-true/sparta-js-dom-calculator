var firstNumber = 0;
var secondNumber = 0;
var operator;

//number clicked in the calculator
function setNumberListeners() {
  //get the input from the user
  var btn = document.querySelectorAll('.buttonNum');

  for (var i = 0; i < btn.length; i++) {
    firstNumber = btn[i];
    firstNumber.addEventListener('click', function(event) {
    console.log(this.value + ' was clicked');
    })
  }
};

//operator clicked in the calculator
function setOperatorListeners(){
  //get the input from the user
  var operation = document.querySelectorAll('.operator');

  for (var i = 0; i < operation.length; i++) {
    operator = operation[i];

    operator.addEventListener('click', function(event) {
      console.log(this.value + ' was clicked');
    })
  }
};

//clear calculator screen
// function ac(val) {
//   document.getElementById('screen').value = val;
// }
// setNumberListeners();
// setOperatorListeners();
// ac();
//
// // Display current number
// screen.innerHTML = firstNumber;


//
// var clear = document.querySelectorAll('.buttonClear');
//
// for (var i = 0; i < clear.length; i++) {
//   var operatorClear = clear[i];
//
//   operatorClear.addEventListener('click', function(event) {
//     console.log(this.value + ' was clicked');
//   })
// }
