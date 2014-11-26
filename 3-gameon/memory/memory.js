"use strict";

var memory = {
    randArray: [],
    rows: 4,
    columns: 4,
    count: 0,
    
    test:0,
    firsttry: null,
    secondtry:null,
    
    img: null,
    cell: null,
    init:function(){
        memory.randArray = RandomGenerator.getPictureArray(memory.rows, memory.columns)
        console.log(memory.randArray);
        memory.renderCard();
  
    },
    renderCard:function(){
        var table = document.createElement("table");
        table.border = 1;

        var cardArea = document.getElementById("memoryCards");
        
        for (var i = 0; i < memory.rows; i++) 
        {
            var row = document.createElement("tr");
            table.appendChild(row);
            for (var j = 0; j < memory.columns; j++)
            {
                memory.cell = document.createElement("td");
                memory.img = document.createElement("img");
                memory.img.src = "pics/0.png";
                memory.img.className = "pics/"+memory.randArray[memory.count]+".png";
                memory.count += 1;
                
               memory.img.onclick = function(img, className){ //http://stackoverflow.com/questions/20497291/javascript-memory-game-image-swapping/20497536#20497536
                   return function(){
                    memory.flipTile(img, className);
                   };
               }(memory.img, memory.img.className);

                memory.cell.appendChild(memory.img);
                row.appendChild(memory.cell);
            }
            
            table.appendChild(row);
        }
        cardArea.appendChild(table);
        
    },
    
    flipTile:function(img, classname){
        memory.test +=1;
        img.src = classname;
        if(memory.test === 1)
        {
            memory.firsttry = classname;
        }
        if(memory.test === 2)
        {
            memory.secondtry = classname;
            if(memory.firsttry === memory.secondtry)
            {}
            else{
                img.src = "pics/0.png"
                memory.firsttry = null;
                memory.secondtry = null;
            }
        }
    },
    

    
    
    
    
}

window.onload = memory.init;