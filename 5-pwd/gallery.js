"use strict"

function Gallery(desktop, wind){
        var loading = document.createElement("img");
        loading.src = "pictures/ajax-loader2.gif";
        loading.className = "loader"
        var self = this;
        var bildarray = {};
        this.desktop = desktop;
        var height = 0;
        var width = 0;
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
                    

                    
                    if (bildarray[i].thumbHeight > height)
                    {
                        height = bildarray[i].thumbHeight;
                    }
                    if (bildarray[i].thumbWidth > width)
                    {
                        width = bildarray[i].thumbWidth;
                    }
                    
                   // imgAtag.addEventListener("click", self.pictureclick);
                    imgAtag.onclick = function(){ //varför kan jag inte ha imgAtag.onclick = self.pictureclick(this.image) ?
                        self.pictureclick(this.image);
                    };
                    imgAtag.appendChild(img);
                    wind.maincontent.appendChild(imgAtag);
                }
                
                var aTaggar = document.querySelectorAll(".bildAtaggar");
                console.log(aTaggar);
                console.log(height);
                console.log(width);
                for (var i = 0; i < aTaggar.length; i++) {
                    aTaggar[i].style.width = width + 'px';
                    aTaggar[i].style.height = height + 'px';
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

    imageviewer.wind.className = "imageviewer";
    
   // imageviewer.wind.style.height = image.height + 'px';
  //  imageviewer.wind.style.width = image.width + 'px';
    
    imageviewer.maincontent.appendChild(img);
};