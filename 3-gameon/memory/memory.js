"use strict";

var memory = {
    randArray: [],
    rows: 4,
    columns: 4,
    count: 0,
    
    guesses:1,
    
    testerino:0,
    points: 0,
    
    
    parentN: null,
    flippedImages:0,
    test1:null,
    test2:null,
    cardArea: null,
    alink:null,
    img: null,
    cell: null,
    
    init:function(){
        memory.randArray = RandomGenerator.getPictureArray(memory.rows, memory.columns);
        console.log(memory.randArray);
        memory.renderCard();
  
    },
    renderCard:function(){
        var table = document.createElement("table");
        //table.border = 1;

        memory.cardArea = document.getElementById("memoryCards");
        
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
                memory.img.id = "down";
                
                memory.img.src = "pics/0.png";
                memory.img.id = "down";
                memory.img.picture = "pics/"+memory.randArray[memory.count]+".png";
                memory.count += 1;
                
                memory.alink.href = "#";
                
                memory.alink.onkeypress = memory.click(memory.img, memory.img.className);
                memory.img.onclick = memory.click(memory.img, memory.img.className); //
                //memory.alink.addEventListener("keypress", memory.enterpress(this.value))
               // memory.alink.addEventListener("click", memory.click(memory.img, memory.img.className))
                memory.alink.appendChild(memory.img);
                memory.cell.appendChild(memory.alink);
                row.appendChild(memory.cell);
            }
            
            table.appendChild(row);
        }
        memory.cardArea.appendChild(table);
        
    },
    
    flipTile:function(img, classname){

        if(memory.flippedImages === 2){
            memory.guesses += 1;
            console.log(memory.guesses);
            memory.flippedImages = 0;
        }
        //console.log(memory.flippedImages);
        img.src = classname;
        img.id = "up"+memory.testerino;
        document.getElementById('up'+memory.testerino).style.pointerEvents = 'none';
        memory.testerino += 1;
        if(memory.flippedImages === 0)
        {memory.test1 = img.src}
        if(memory.flippedImages === 1)
        {
            memory.test2 = img.src;
            if(memory.test1 === memory.test2){
                console.log("korrekt gissning");
                //document.getElementById("up0").removeEventListener("click"); //fick det inte funka med removeEventListener... använde addeventlistener innan.
                //document.getElementById("up1").removeEventListener("click");
                
                //document.getElementById("up0").onclick = false; //denna funkar
               // document.getElementById("up1").onclick = false;
                document.getElementById('up0').style.pointerEvents = 'none'; //http://stackoverflow.com/a/18983026
                document.getElementById('up1').style.pointerEvents = 'none';
                document.getElementById("up0").parentNode.onkeypress = false;
                document.getElementById("up1").parentNode.onkeypress = false;
                document.getElementById("up0").id="correct";
                document.getElementById("up1").id="correct";

                memory.points += 1;
                console.log(memory.points);
                if(memory.points == (memory.rows * memory.columns)/2)
                {
                    var text = document.createElement("p");
                    text.id = "texarea";
                    text.innerHTML = "Du klarade det på "+memory.guesses+" försök bra jobbat!";
                    memory.cardArea.appendChild(text);
                }
            }
            else{

                console.log("felaktig gissning... vänder tillbaka");
                setTimeout(memory.flipBack, 1000);
            }
            memory.testerino = 0;
        }  
        
        console.log(memory.test1 + " "+ memory.test2);
       
    },
    
    flipBack:function(){

        document.getElementById('up0').style.pointerEvents = 'auto';
        document.getElementById('up1').style.pointerEvents = 'auto';
        document.getElementById("up0").src="pics/0.png";
        document.getElementById("up0").id="down";
        document.getElementById("up1").src="pics/0.png";
        document.getElementById("up1").id="down";
    },
    
    click:function(img, className){ //http://stackoverflow.com/questions/20497291/javascript-memory-game-image-swapping/20497536#20497536
                   return function(){
                       console.log(className);
                        memory.flipTile(img, className);
                        memory.flippedImages += 1;
                   };
               },
    enterpress: function(e){if (e.keyCode == 13){
                memory.click(memory.img, memory.img.className);
                }},
   
}

window.onload = memory.init;