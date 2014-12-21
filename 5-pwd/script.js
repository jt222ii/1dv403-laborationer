"use strict";

var htmldesktop = {
    init:function(){


        
        var picButton = document.getElementById("aTagOpenP");
        picButton.addEventListener("click", function(e){
        htmldesktop.createPicwindow();
            
        });
        
    },
    createPicwindow:function(){
        var pictureWindow = document.createElement("div");
        var remove = document.createElement("img");
        remove.src = "pictures/kryss.svg";
        pictureWindow.id = "pictureWindow";
        
        var content = document.getElementById("content");
        remove.addEventListener("click", htmldesktop.removeWindow);
        var crossAtag = document.createElement("a");
        crossAtag.href = "#";
        
        crossAtag.appendChild(remove);
        
        pictureWindow.appendChild(crossAtag);
        content.appendChild(pictureWindow);
        
    },
    removeWindow:function(){
        this.parentNode.remove();
    }
    
};

window.onload = htmldesktop.init;