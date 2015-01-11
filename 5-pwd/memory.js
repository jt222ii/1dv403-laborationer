"use strict";
//var canFlip = true;
function Memory(desktop, wind){
    var self = this;
    this.wind = wind;
    this.hej = "heeeej";
    this.rows= 4;
    this.columns= 4;
    this.count= 0;
    
    this.canFlip= true;
    
    this.guesses=1;
    this.flippedOrder=0;
    this.points= 0;
    
    this.firstflip;
    this.secondflip;

    this.flippedImages=0;
    this.pictureOne=null;
    this.pictureTwo=null;
    this.cardArea= null;
    
    
    this.randArray = [];
    this.randArray = this.getPictureArray(this.rows, this.columns);
    console.log(this.randArray);
    //this.renderCard(this.wind, this.randArray);
    
    //table.border = 1;
    this.table = document.createElement("table");
    //table.border = 1;

    this.cardArea = document.getElementById("memoryCards");
    
    for (var i = 0; i < this.rows; i++) 
    {
        var row = document.createElement("tr");
        this.table.appendChild(row);
        for (var j = 0; j < this.columns; j++)
        {
            var cell = document.createElement("td");
            var alink = document.createElement("a");
            var picture = "pics/"+this.randArray[this.count]+".png";
            var img = document.createElement("img");
            img.id = "down";
            
            img.src = "pics/0.png";
            img.id = "down";
            img.picture = "pics/"+this.randArray[this.count]+".png";
            img.disabled = false;

            this.count += 1;
            
            alink.href = "#";
            
            alink.img = img;
            
            
            alink.addEventListener("keypress", function(){
                self.click(this);
                });
            alink.addEventListener("click", function(){
                self.click(this);
                });
            alink.appendChild(img);
            cell.appendChild(alink);
            row.appendChild(cell);
        }
        this.table.appendChild(row);
    }
    this.wind.maincontent.appendChild(this.table);
    
    
} 
Memory.prototype.click = function(alink){
            var self = this;
            if (alink.img.src === "http://1dv403-laborationer-jt222ii.c9.io/5-pwd/pics/0.png" && this.canFlip === true)
            {
               //console.log(alink.img.picture);
                self.flipTile(alink.img, alink.img.picture, self);
                self.flippedImages += 1;
            }
};
Memory.prototype.flipTile = function(img, picture, memory){
     
        if(memory.flippedImages === 2){
            memory.guesses += 1;
            console.log(memory.guesses);
            memory.flippedImages = 0;
        }
        //console.log(memory.flippedImages);
        img.src = picture;
        img.id = "up"+memory.flippedOrder;

        memory.flippedOrder += 1;
        if(memory.flippedImages === 0)
        {
            memory.firstflip = img;
            memory.pictureOne = img.src;
        }
        if(memory.flippedImages === 1)
        {
            memory.secondflip = img;
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
                    memory.wind.maincontent.appendChild(text);
                }
            }
            else{
 
                memory.canFlip = false;
                console.log("felaktig gissning... vänder tillbaka");
                setTimeout(function(){
                    //memory.flipBack();
                    memory.canFlip = true;
                    memory.firstflip.src = "pics/0.png";
                    memory.secondflip.src = "pics/0.png";
                }, 700);
            }
            memory.flippedOrder = 0;
        }  
        
        console.log(memory.pictureOne + " "+ memory.pictureTwo);    
};
/*Memory.prototype.flipBack = function(wind){
            canFlip = true;
            document.getElementById("up0").src="pics/0.png";
            document.getElementById("up0").id="down";
            document.getElementById("up1").src="pics/0.png";
            document.getElementById("up1").id="down";
};*/

Memory.prototype.getPictureArray = function(rows, cols){
		var numberOfImages = rows*cols;
		var maxImageNumber = numberOfImages/2;
	   	var imgPlace = [];
	
	   //Utplacering av bilder i Array
	   for(var i=0; i<numberOfImages; i++)
		  imgPlace[i] = 0;
	
		for(var currentImageNumber=1; currentImageNumber<=maxImageNumber; currentImageNumber++)
		{		
			var imageOneOK = false;
			var imageTwoOK = false;
			
			do
			{
				if(imageOneOK == false)
				{
					var randomOne = Math.floor( (Math.random() * (rows*cols-0) + 0) );				
					
					if( imgPlace[randomOne] == 0 )
					{
						imgPlace[randomOne] = currentImageNumber;
						imageOneOK = true;
					}
				}
				
				if(imageTwoOK == false)
				{
					var randomTwo = Math.floor( (Math.random() * (rows*cols-0) + 0) );				
								
					if( imgPlace[randomTwo] == 0 )
					{
						imgPlace[randomTwo] = currentImageNumber;
						imageTwoOK = true;
					}
				}			
			}
			while(imageOneOK == false || imageTwoOK == false);		
		}
		return imgPlace;
};

   
