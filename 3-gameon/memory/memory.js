"use strict";

var memory = {
    randArray: [],
    rows: 4,
    columns: 4,
    count: 0,
    
    canFlip: true,
    
    guesses:1,
    flippedOrder:0,
    points: 0,
    
    

    flippedImages:0,
    pictureOne:null,
    pictureTwo:null,
    cardArea: null,
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
                var alink = document.createElement("a");
                alink.picture = "pics/"+memory.randArray[memory.count]+".png";
                var img = document.createElement("img");
                img.id = "down";
                
                img.src = "pics/0.png";
                img.id = "down";
                img.picture = "pics/"+memory.randArray[memory.count]+".png";
                img.disabled = false;
                memory.count += 1;
                
                alink.href = "#";
                
                alink.img = img;
                
                
                alink.addEventListener("keypress", memory.click);
                alink.addEventListener("click", memory.click);
                alink.appendChild(img);
                memory.cell.appendChild(alink);
                row.appendChild(memory.cell);
            }
            
            table.appendChild(row);
        }
        memory.cardArea.appendChild(table);
        
    },
    
    flipTile:function(img, picture){

        if(memory.flippedImages === 2){
            memory.guesses += 1;
            console.log(memory.guesses);
            memory.flippedImages = 0;
        }
        //console.log(memory.flippedImages);
        img.src = picture;
        img.id = "up"+memory.flippedOrder;
        document.getElementById('up'+memory.flippedOrder).disabled = true;
        memory.flippedOrder += 1;
        if(memory.flippedImages === 0)
        {memory.pictureOne = img.src}
        if(memory.flippedImages === 1)
        {
            memory.pictureTwo = img.src;
            if(memory.pictureOne === memory.pictureTwo){
                console.log("korrekt gissning");
                document.getElementById('up0').disabled = true;
                document.getElementById('up1').disabled = true;
                document.getElementById('up0').parentNode.disabled = true;
                document.getElementById('up1').parentNode.disabled = true;
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
                memory.canFlip = false;
                console.log("felaktig gissning... vänder tillbaka");
                setTimeout(memory.flipBack, 700);
            }
            memory.flippedOrder = 0;
        }  
        
        console.log(memory.pictureOne + " "+ memory.pictureTwo);
       
    },
    
    flipBack:function(){
        memory.canFlip = true;
        document.getElementById('up0').disabled = false;
        document.getElementById('up1').disabled = false;
        document.getElementById("up0").src="pics/0.png";
        document.getElementById("up0").id="down";
        document.getElementById("up1").src="pics/0.png";
        document.getElementById("up1").id="down";
    },
    
    click:function(){ 

                    if (this.img.disabled === false && memory.canFlip===true)
                    {
                       console.log(this.img.picture);
                        memory.flipTile(this.img, this.img.picture);
                        memory.flippedImages += 1;
                    }
              
               },
   
};

window.onload = memory.init;
