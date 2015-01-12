"use strict";

htmldesktop.AddApp= function(desktop, name, img, Script){
    var that = this;
    this.desktop = desktop;
    this.name = name;
    this.img = img;
    
    this.menu = document.querySelector(".footer");
    this.picture = document.createElement("img");
    this.picture.className = name;
    this.picture.src = img;
    this.Script = Script;
    
    this.picture.onclick = function(){
      that.open();  
    };
    
    this.menu.appendChild(this.picture);
}

htmldesktop.AddApp.prototype.open = function(){
    var wind = new htmldesktop.Window(this.desktop, this.name, this.img, this.Script);
};
