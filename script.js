//Make DIV appear when btn clicked
function showDiv(toggle){
document.getElementById(toggle).style.display = 'block';
}
//
// function Thrower(dice){
//   this.myDice = dice;
//   this.roll = function(){
//     var sum = 0;
//     for(var i=0; i<this.myDice.length; i++){
//       sum += this.myDice[i].roll();
//     }
//     return sum;
//   }
//   this.addDie = function(dice){
// 	this.myDice[this.myDice.length] = dice;
//   }
// }
// function Dice(maxNum){
//   this.number;
//   if(maxNum){
// 	this.max = maxNum;				
//   }
//   else{
//     this.max = 6;
//   }
//   this.roll = function(){
//     this.number = Math.round(Math.random()*(this.max-1))+1;
//     return this.number;
//   }
//   this.getVal = function(){
//     return this.number;
//   }
// }
// var dice = [new Dice(), new Dice()];
// var hands = new Thrower(dice);
//   hands.addDie(new Dice());
// for(var i=0; i<100; i++){
//   document.write("Dice roll "+(i+1)+" = "+hands.roll()+"<br>");
// }
//function if # is over 6
// for(var i=1; i<this.myDice.length; i++)
var score = 0;
var maxScore = 50;
var rolls = 0;
var maxRolls = 20;
 

function rollDice()
{
    var x = Math.floor( Math.random() * 6 ) + 1;
    var y = Math.floor( Math.random() * 6 ) + 1;
 
    if( x == y )
    {
        score = getScore( x );
        alert("You threw a Double " + x + " Your Score is "+ score);
    }
    else
    {
        alert("You threw a " + x + " and a " + y + " Your Score is " + score);
    }
 
    rolls++;
};