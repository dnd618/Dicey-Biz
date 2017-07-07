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
  this.className = function(){
    return this.kept ? 'kept' : 'keep';
  }
  this.roll = function() {
    if(!this.kept) this.value = Math.floor(Math.random()*6)+1;
  }
  this.keep = function() {
    this.kept = true;
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
        '<button class="'+dice1.className()+'" onclick="dice1.keep(); this.className=dice1.className();">'+dice1.value+'</button> ' +
        '<button class="'+dice2.className()+'" onclick="dice2.keep(); this.className=dice2.className();">'+dice2.value+'</button> ' +
        '<button class="'+dice3.className()+'" onclick="dice3.keep(); this.className=dice3.className();">'+dice3.value+'</button> ';
}
rollOnce();