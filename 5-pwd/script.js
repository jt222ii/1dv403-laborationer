"use strict";

var htmldesktop = {
    z:0,
    bildarray:{},

    init:function(){


        
        var picButton = document.getElementById("aTagOpenP");
        picButton.addEventListener("click", htmldesktop.createPicwindow);
        
    },
    createPicwindow:function(){
        //skapa rutan som ska innehålla bilderna
        var pictureWindow = document.createElement("div");
        var remove = document.createElement("img");
        var topbar = document.createElement("div");
        var pictureArea = document.createElement("div");
        var loading = document.createElement("img");
        loading.src = "pictures/ajax-loader.gif";
        pictureArea.id = "pictureArea";
        topbar.innerHTML = "Pictures";
        topbar.id = "topbar";
        
        topbar.onmouseup = htmldesktop.mouseUp;
        topbar.onmousedown = htmldesktop.mouseDown;
        
        
        remove.src = "pictures/kryss.svg";
        remove.id = "kryssbild";

        
        pictureWindow.id = "pictureWindow";
        var content = document.getElementById("content");
        //remove.addEventListener("click", htmldesktop.removeWindow);
        remove.onclick= htmldesktop.removeWindow;
        topbar.appendChild(remove);

        pictureWindow.appendChild(topbar);
        pictureWindow.appendChild(pictureArea);
        content.appendChild(pictureWindow);
        //ta in bilderna och lägg in i rutan
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function(){
            if(xhr.readyState === 4 && xhr.status === 200)
            {
                pictureArea.innerHTML = "";
                htmldesktop.bildarray = JSON.parse(xhr.responseText);
                console.log(htmldesktop.bildarray);
                htmldesktop.renderPictures(pictureArea);
            }
            else
            {
                pictureArea.appendChild(loading);
            }

        };
        xhr.open("GET", "http://homepage.lnu.se/staff/tstjo/labbyServer/imgviewer/", true);
        xhr.send(null);

    },
    renderPictures:function(pictureArea){
        
        for (var i = 0; i < htmldesktop.bildarray.length; i++) {
            var imgAtag = document.createElement("a");
            imgAtag.href = "#";
            imgAtag.id = "bildAtaggar";
            var img = document.createElement("img");
            img.src = htmldesktop.bildarray[i].thumbURL;
            img.style.height = htmldesktop.bildarray[i].thumbHeight;
            img.style.width = htmldesktop.bildarray[i].thumbWidth;
            imgAtag.imageurl = htmldesktop.bildarray[i].URL;
            imgAtag.onclick = htmldesktop.changeBackground;
            imgAtag.appendChild(img);
            pictureArea.appendChild(imgAtag);
        }
    },
    changeBackground:function(){
        document.body.style.backgroundImage = "url("+this.imageurl+")";
    },
    
    removeWindow:function(){
        this.parentNode.parentNode.remove();
    },
    mouseDown:function(e){
         //window.addEventListener('mousemove', htmldesktop.moveWindow, true);
         this.parentNode.style.zIndex = htmldesktop.z++;
         this.onmousemove = htmldesktop.moveWindow;
    },
    mouseUp:function(e){
        this.onmousemove = null;
    },
    moveWindow:function(e){
            var div = this.parentNode;
            div.style.position = 'absolute';
            div.style.top = e.clientY-22.5 + 'px';
            div.style.left = e.clientX-160 + 'px';
    }

    

};

window.onload = htmldesktop.init;