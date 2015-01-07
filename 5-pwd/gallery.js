"use strict"

function Gallery(desktop, wind){
        var loading = document.createElement("img");
        loading.src = "pictures/ajax-loader.gif";
        var self = this;
        var bildarray = {};
        this.desktop = desktop;
        
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
                    imgAtag.className = "bildAtaggar";
                    var img = document.createElement("img");
                    img.src = bildarray[i].thumbURL;
                    
                    img.style.height = bildarray[i].thumbHeight;
                    img.style.width = bildarray[i].thumbWidth;
                    imgAtag.imageurl = bildarray[i].URL;
                    imgAtag.image = bildarray[i];
                    imgAtag.desktop = desktop;
                    
                   // imgAtag.addEventListener("click", self.pictureclick);
                    imgAtag.onclick = function(){ //varför kan jag inte ha imgAtag.onclick = self.pictureclick(this.image) ?
                        self.pictureclick(this.image);
                    }
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

Gallery.prototype.pictureclick = function(image){
    console.log(image);
    var imageviewer = new Window(this.desktop, "imgviewer", "pictures/photo.svg");
    var img = document.createElement("img");
    img.src = image.URL;

    imageviewer.wind.className = "imageviewer"
    
   // imageviewer.wind.style.height = image.height + 'px';
  //  imageviewer.wind.style.width = image.width + 'px';
    
    imageviewer.maincontent.appendChild(img);
};