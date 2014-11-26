"use strict";

var memory = {
    randArray: [],
    rows: 4,
    columns: 4,
    count: 0,
    
    testerino:0,
    
    points: 0,
    
    flippedImages:0,
    test1:null,
    test2:null,
    
    alink:null,
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
                memory.alink = document.createElement("a");
                memory.alink.className = "pics/"+memory.randArray[memory.count]+".png";
                memory.img = document.createElement("img");
                memory.img.src = "pics/0.png";
                memory.img.id = "down";
                memory.img.className = "pics/"+memory.randArray[memory.count]+".png";
                memory.count += 1;
                
               memory.alink.onclick = function(img, className){ //http://stackoverflow.com/questions/20497291/javascript-memory-game-image-swapping/20497536#20497536
                   return function(){
                        memory.flipTile(img, className);
                        memory.flippedImages += 1;
                   };
               }(memory.img, memory.img.className);
               
                memory.alink.appendChild(memory.img);
                memory.cell.appendChild(memory.alink);
                row.appendChild(memory.cell);
            }
            
            table.appendChild(row);
        }
        cardArea.appendChild(table);
        
    },
    
    flipTile:function(img, classname){

       
        if(memory.flippedImages === 2){
            memory.flippedImages = 0;
        }
        console.log(memory.flippedImages);
        
        img.src = classname;
        img.id = "up"+memory.testerino;
        memory.testerino += 1;
        if(memory.flippedImages === 0)
        {memory.test1 = img.src}
        if(memory.flippedImages === 1)
        {
            memory.test2 = img.src
            if(memory.test1 === memory.test2){
                console.log("hej")
                document.getElementById("up0").id="down";
                document.getElementById("up1").id="down";
                memory.testerino = 0;                
            }
            else{
                setTimeout(memory.flipBack, 1000);
            }
        }  
        
        console.log(memory.test1 + " "+ memory.test2);
        
    },
    
    flipBack:function(){
        console.log(memory.test1 +" "+ memory.test2);
        console.log("heeeeeeeeeeeeeeeej");
        document.getElementById("up0").src="pics/0.png";
        document.getElementById("up1").src="pics/0.png";
        document.getElementById("up0").id="down";
        document.getElementById("up1").id="down";
        memory.testerino = 0;
    }
   
}

window.onload = memory.init;