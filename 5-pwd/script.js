"use strict";

var htmldesktop = {


    init:function(){


        
        var picButton = document.getElementById("aTagOpenP");
        picButton.addEventListener("click", htmldesktop.createPicwindow);
        
    },
    createPicwindow:function(){
        //skapa rutan som ska innehålla bilderna
        var pictureWindow = document.createElement("div");
        var remove = document.createElement("img");
        var topbar = document.createElement("div");
        topbar.innerHTML = "Pictures";
        topbar.id = "topbar";
        
        topbar.onmouseup = htmldesktop.mouseUp;
        topbar.onmousedown = htmldesktop.mouseDown;
        
        
        remove.src = "pictures/kryss.svg";
        remove.id = "kryssbild";
        pictureWindow.id = "pictureWindow";
        var content = document.getElementById("content");
        remove.addEventListener("click", htmldesktop.removeWindow);
        topbar.appendChild(remove);
        pictureWindow.appendChild(topbar);
        content.appendChild(pictureWindow);
        //ta in bilderna och lägg in i rutan
        
        
        
    },
    removeWindow:function(){
        this.parentNode.parentNode.remove();
    },
    mouseDown:function(e){
         //window.addEventListener('mousemove', htmldesktop.moveWindow, true);
         this.onmousemove = htmldesktop.moveWindow;
    },
    mouseUp:function(e){
        this.onmousemove = null;
    },
    moveWindow:function(e){
            var div = this.parentNode;
            div.style.position = 'absolute';
            div.style.top = e.clientY-22.5 + 'px';
            div.style.left = e.clientX-50 + 'px';
    }

    

};

window.onload = htmldesktop.init;