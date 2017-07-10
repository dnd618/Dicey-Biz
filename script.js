//Creating buttons to generate, add & roll die
document.addEventListener('DOMContentLoaded', function(){
    var addButton = document.createElement('button');
        addButton.innerText = 'Generate Die';
        addButton.className = 'addButton';
    document.body.appendChild(addButton)
    var rollButton = document.createElement('button');
        rollButton.innerText = 'Rooooll Dieeee!';
        rollButton.className = 'rollButton';
    document.body.appendChild(rollButton);
    var sumButton = document.createElement('button');
        sumButton.innerText = 'Add the Die!';
        sumButton.className = 'sumButton';
    document.body.appendChild(sumButton);
    
    var Die = function() {    
       this.roll = function() {
           var result = Math.floor(Math.random()*6+1);
           this.value = result;
       }
    }
    //Generating die on click        
    addButton.addEventListener('click', function(){
       var dieHolder = document.createElement('div');
            dieHolder.className = 'dieHolder';
       document.body.appendChild(dieHolder);
       var newDie = new Die()
       newDie.roll()
       dieHolder.innerText = newDie.value;
       $('div').click(function() {
         newDie.roll()
         this.innerText = newDie.value;  
       })
       //Remove die on double-click
        $('div').dblclick(function() {
        this.remove();
        })     
    });   
    //Rolling die    
    rollButton.addEventListener('click', function () {
       $('div').each(function(){
           var num = Math.floor(Math.random()*6+1);
           $(this).text(num);
       })                    
    }); 
    //Adding die
    sumButton.addEventListener('click', function() {
        var sumArray = [];
        $('div').each(function() {
           sumArray.push(parseInt($(this).text())); 
        })
        var sum = 0;
        for (var i = 0; i < sumArray.length; i++){
            sum += sumArray[i];
        }
        alert("Total sum is: "+sum);      
    }); 
});