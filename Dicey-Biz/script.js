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
// function rollOnce() {
//   this.value = 0;
//   this.kept = false;
//   this.className = function(){
//     return this.kept ? 'kept' : 'keep';
//   }
//   this.roll = function() {
//     if(!this.kept) this.value = Math.floor(Math.random()*6)+1;
//   }
//   this.keep = function() {
//     this.kept = true;
//   }
// }

// function generateDie() {
//     var box = document.createElement('div');
//     box.className = 'box';
//     box.id = boxCount;
//     boxCount++;  
//     document.body.appendChild(box);
//     var dieRoll = Math.floor(Math.random()*6)+1;
//     box.innerText = dieRoll;
// }
// var boxCount = 0;

// var dice1 = new Dice();
// var dice2 = new Dice();
// var dice3 = new Dice();

// function rollOnce() { 
//   dice1.roll();
//   dice2.roll();
//   dice3.roll();
//Creating buttons to add & roll die

document.addEventListener('DOMContentLoaded', function(){
    var addButton = document.createElement('button');
        addButton.innerText = 'Generate Die';
        addButton.className = 'addButton';
    document.body.appendChild(addButton)
    var rollButton = document.createElement('button');
        rollButton.innerText = 'Roll Die';
        rollButton.className = 'rollButton';
    document.body.appendChild(rollButton);
    
    var Die = function() {    
       this.roll = function() {
           var result = Math.floor(Math.random()*6+1);
           this.value = result;
       }
    }
        
    addButton.addEventListener('click', function(){
       var dieHolder = document.createElement('div');
            dieHolder.className = 'dieHolder';
       document.body.appendChild(dieHolder);
       var newDice = new Die()
       newDice.roll()
       dieHolder.innerText = newDice.value;
       $('div').click(function() {
         newDice.roll()
         this.innerText = newDice.value;  
       })
        $('div').dblclick(function() {
        this.remove();
        })     
    });   
        
    rollButton.addEventListener('click', function () {
       $('div').each(function(){
           var num = Math.floor(Math.random()*6+1);
           $(this).text(num);
       })                    
    }); 
});
