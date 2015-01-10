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
                var imgdiv = document.createElement("div");
                imgdiv.className = "imgdiv";
            
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
                    
                    imgAtag.bilden = document.createElement("img");
                    imgAtag.bilden.src = imgAtag.imageurl.URL;
                    

                    
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
                    imgAtag.addEventListener('contextmenu', function(ev) {
                        ev.preventDefault();
                        self.rightclick(this.image);
                        return false;
                    }, false);
                    imgAtag.appendChild(img);
                    imgdiv.appendChild(imgAtag);
                }
                wind.maincontent.appendChild(imgdiv);
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
    imageviewer.maincontent.appendChild(img);
    
};

Gallery.prototype.rightclick = function(image){
    
    document.body.style.backgroundImage = "url("+image.URL+")";
};