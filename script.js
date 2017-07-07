//Make DIV appear when btn clicked
// function showDiv(toggle){
//     document.getElementById(toggle).style.display = 'block';
// }

function Dice(container) {
  this.button = document.createElement("button");
  this.button.innerHTML = 0;
  document.getElementById(container).appendChild(this.button);
  this.button.addEventListener('click', function() {
    this.className = 'kept';
  });
  this.roll = function() {
    if(this.button.className != 'kept') {
      this.button.innerHTML = Math.floor(Math.random()*6)+1;
    }
  }
}
var dice1;
var dice2;
var dice3;
document.onreadystatechange = function () {
  if(document.readyState == "complete") {
    dice1 = new Dice("paragraph1");
    dice2 = new Dice("paragraph1");
    dice3 = new Dice("paragraph1");
    rollOnce();
  }
}
function rollOnce() { 
  dice1.roll();
  dice2.roll();
  dice3.roll();
}