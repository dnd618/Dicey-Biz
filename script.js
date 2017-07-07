//Generate die 


//Sum
// function sum(toggle){
//     document.getElementById(die).style.display = 'block';
// }
// document.addEventListener('DOMContentLoaded', function() {
//     container = document.createElement('div');
//     container.className = 'container';

//     var button = document.createElement('button');
//     onclick.generateDie = 'btn';
//     button.innerText = 'Click Me';
//     button.addEventListener('click', addSquare);

//     document.body.appendChild(button);
//     document.body.appendChild(container);
// });
//constructor function
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
  dice3.roll();
  dice3.roll();
  dice3.roll();
  dice3.roll();
  dice3.roll();
  document.getElementById("paragraph1").innerHTML = 
        '<button class="'+dice1.className()+'" onclick="dice1.keep(); this.className=dice1.className();">'+dice1.value+'</button> ' +
        '<button class="'+dice2.className()+'" onclick="dice2.keep(); this.className=dice2.className();">'+dice2.value+'</button> ' +
        '<button class="'+dice3.className()+'" onclick="dice3.keep(); this.className=dice3.className();">'+dice3.value+'</button> ';
}
rollOnce();
// var dieRoll =Math.ceil(Math.random() * 6);
// function Roll(dice) {
//     this.dice = dieRoll;
// }
// dice.roll = function (expression) {
//         var self = this,
//             rolls = [];

//         expression.toLowerCase().replace(/(\d+)(d\d+)?/g, function (_, count, die) {
//             if (die) {
//                 rolls = rolls.concat(self[die].times(+count));
//             } else {
//                 rolls.push(+count);
//             }
//         });

//         return rolls.reduce(function (sum, roll) {
//             return sum + roll;
//         });
//     };
//     dice.d4 = makeDie(4);
//     dice.d6 = makeDie(6);
//     dice.d8 = makeDie(8);
//     dice.d10 = makeDie(10);
//     dice.d12 = makeDie(12);
//     dice.d20 = makeDie(20);
//     dice.d100 = makeDie(100);
