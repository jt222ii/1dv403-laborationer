"use strict"

function Window(desktop, name, img, Script){
    var self = this;
    var template = document.getElementById("template");
    var WindowTemplate = template.content.querySelector(".window");
    this.wind = WindowTemplate.cloneNode(true);
    
    
    
    this.maincontent = this.wind.querySelector(".pictureArea");
    this.title = this.wind.querySelector(".windowname");
    this.title.innerHTML = name;
    
    this.desktop = desktop;
    desktop.body.appendChild(this.wind);
    
    var remove = this.wind.querySelector(".remove");
    remove.onclick = function(){ 
        self.removeWindow();
    };
    
    this.script = new Script(this.desktop, this);

}

Window.prototype.removeWindow = function(){
        this.wind.parentNode.removeChild(this.wind);
    };