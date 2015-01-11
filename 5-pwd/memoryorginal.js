"use strict";
var windW;

function Memory(desktop, wind){
    
    
    
    memory.init(wind);
    windW = wind;
} 
var memory = {
  
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
    
    init:function(wind){
        var randArray = [];
        randArray = memory.getPictureArray(memory.rows, memory.columns);
        console.log(randArray);
        memory.renderCard(wind, randArray);
  
    },
    renderCard:function(wind, array){
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
                alink.picture = "pics/"+array[memory.count]+".png";
                var img = document.createElement("img");
                img.id = "down";
                
                img.src = "pics/0.png";
                img.id = "down";
                img.picture = "pics/"+array[memory.count]+".png";
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
        wind.maincontent.appendChild(table);
        
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
                    windW.maincontent.appendChild(text);
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
        console.log(document.getElementById('up0'));
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
               
	
	/*
		Denna metod tar antalet rader och columner som inparameter.
		
		Metoden returnerar en array inneh�llandes utslumpade tal mellan 1 och (rows*cols)/2. Varje tal representeras tv�
		g�nger och motsvarar s�ledes en spelbricka. 
		
		I en 4*4 matris kan Arrayen t.ex. se ut s� h�r:
		[1,2,6,8,6,2,5,3,1,3,7,5,8,4,4,7]
		
		I en 2*4 matris kan Arrayen t.ex. se ut s� h�r:				
		[3,4,4,1,2,1,2,3]
	*/
	
	getPictureArray: function(rows, cols)
	{
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
		console.log(imgPlace);
		return imgPlace;
	}

   
};

 
