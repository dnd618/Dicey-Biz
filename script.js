//Generate die 
// function generateDie(toggle){
//     document.getElementById(die).style.display = 'block';
// }
//Sum
// function sum(toggle){
//     document.getElementById(die).style.display = 'block';
// }
function Dice() {
  this.value = 0;
  this.kept = false;
  this.roll = function() {
    if(!this.kept) this.value = Math.floor(Math.random()*6)+1;
  };
  this.keep = function(button) {
    this.kept = true;
    button.className = 'kept';
  }
}

var dice1 = new Dice();
var dice2 = new Dice();
var dice3 = new Dice();

function rollOnce() { 
  dice1.roll();
  dice2.roll();
  dice3.roll();
  document.getElementById("paragraph1").innerHTML = 
        '<button id="diceOne" class="'+(dice1.kept?'kept':'keep')+'" onclick="dice1.keep(this)">'+dice1.value+'</button> ' +
        '<button id="diceTwo" class="'+(dice2.kept?'kept':'keep')+'" onclick="dice2.keep(this)">'+dice2.value+'</button> ' +
        '<button id="diceThree" class="'+(dice3.kept?'kept':'keep')+'" onclick="dice3.keep(this)">'+dice3.value+'</button> ';
}
rollOnce();