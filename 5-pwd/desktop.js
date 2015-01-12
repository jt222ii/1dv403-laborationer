"use strict";
 htmldesktop.Desktop = function(){
    var resetbackground = document.querySelector(".resetbackground");
    resetbackground.onclick = function(){
        document.body.style.backgroundImage = "url(pictures/bakgrund1.jpg)";
    };
    this.zindex = 0;
    this.body = document.getElementById("desktop");
    this.pos = {x:10, y:10};
  
}
htmldesktop.Desktop.prototype.addWindow = function(name, img, script){
    var addApp = new htmldesktop.AddApp(this, name, img, script);
};