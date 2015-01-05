"use strict"

function Gallery(desktop, wind){
        var loading = document.createElement("img");
        loading.src = "pictures/ajax-loader.gif";
        var self = this;
        var bildarray = {};
        
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function(){
            if(xhr.readyState === 4 && xhr.status === 200)
            {
                wind.maincontent.innerHTML = "";
                bildarray = JSON.parse(xhr.responseText);
                console.log(bildarray);
        
                for (var i = 0; i < bildarray.length; i++) {
                    var imgAtag = document.createElement("a");
                    imgAtag.href = "#";
                    imgAtag.id = "bildAtaggar";
                    var img = document.createElement("img");
                    img.src = bildarray[i].thumbURL;
                    img.style.height = bildarray[i].thumbHeight;
                    img.style.width = bildarray[i].thumbWidth;
                    imgAtag.imageurl = bildarray[i].URL;
               
                    imgAtag.appendChild(img);
                    wind.maincontent.appendChild(imgAtag);
                }
  
            }
            else
            {
                wind.maincontent.appendChild(loading);
            }
 
                

        };
        xhr.open("GET", "http://homepage.lnu.se/staff/tstjo/labbyServer/imgviewer/", true);
        xhr.send(null);
}
