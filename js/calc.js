//
var buttonNum = document.querySelectorAll('.button');
var operation = document.querySelectorAll('.operator');

for (var i = 0; i < buttonNum.length; i++) {
  var numberClicked = buttonNum[i];

  numberClicked.addEventListener('click', function(event) {
    console.log(this.value + ' was clicked');
  })
}

for (var i = 0; i < operation.length; i++) {
  var calc = operation[i];

  calc.addEventListener('click', function(event) {
    console.log(this.value + ' was clicked');
  })
}


// adding the event listener
// buttonNum.addEventListener('click', numberClicked);
//
// function numberClicked() {
//   console.log('button was clicked via function');
//
//
//   debugger
//   return buttonNum;
// }

// function to store the value of the clicked button


// Display current number
// screen.innerHTML = theNum;
