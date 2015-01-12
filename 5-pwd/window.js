"use strict"

//var selected = null;

htmldesktop.Window = function(desktop, name, img, Script, width, height){
    var selected = null; 
    
    var self = this;
    var template = document.getElementById("template");
    var WindowTemplate = template.content.querySelector(".window");
    this.wind = WindowTemplate.cloneNode(true);

    
    this.pic = document.createElement("img");
    this.pic.src = img;
    this.pic.className = "appPicture";
    this.wind.querySelector('.topbar').appendChild(this.pic);
    
    this.maincontent = this.wind.querySelector(".pictureArea");
    this.title = this.wind.querySelector(".windowname");
    this.title.innerHTML = name;
    
    this.wind.style.zIndex = desktop.zindex++;
        
    this.desktop = desktop;
    desktop.body.appendChild(this.wind);

    var remove = this.wind.querySelector(".remove");
    remove.onclick = function(e){ 
        
        self.removeWindow();
    };
    
    if(Script !== undefined)
    {
    this.script = new Script(this.desktop, this);
    }
    if(name === "imgviewer")
    {
        if((desktop.pos.y + height + 45) >= document.querySelector("#html").offsetHeight)
        {
            desktop.pos.y = 10;
        }
        if((desktop.pos.x + width + 30) >= document.querySelector("#html").offsetWidth)
        {
                desktop.pos.x = 30;
        }
    }
    else
    {

        if((desktop.pos.y + this.wind.offsetHeight + 10) >= document.querySelector("#html").offsetHeight)
        {
            desktop.pos.y = 10;
        }
        if((desktop.pos.x + this.wind.offsetWidth + 30) >= document.querySelector("#html").offsetWidth)
        {
                desktop.pos.x = 30;
        }
    }
    this.wind.style.top = desktop.pos.y + 'px';
    this.wind.style.left = desktop.pos.x + 'px';
    desktop.pos.y += 30; 
    desktop.pos.x += 30;
    
    //följande har jag tagit hjälp ifrån: http://jsfiddle.net/tovic/Xcb8d/light/ men fått göra modifikationer för att det ska fungera
    var x_pos = 0, y_pos = 0, // Stores x & y coordinates of the mouse pointer
        x_elem = 0, y_elem = 0; // Stores top, left values (edge) of the element
    
    function _drag_init(elem, e) {
        selected = elem;
        console.log(selected);
        
        x_pos = e.clientX; 
        y_pos = e.clientY;
        
        x_elem = x_pos - selected.offsetLeft;
        y_elem = y_pos - selected.offsetTop;
    }
    
    // Will be called when user dragging an element
    function _move_elem(e) {
        var evt = window.event || e; //för att det ska fungera i firefox och chrome
        x_pos = document.querySelector(".window") ? evt.clientX : e.pageX;
        y_pos = document.querySelector(".window") ? evt.clientY : e.pageY;

        
        if (selected !== null) {
            if(x_pos - x_elem > -1)
            {
            selected.style.left = (x_pos - x_elem) + 'px';
            }
            else
            {
                selected.style.left = 0 + 'px';
            }
            if(y_pos - y_elem > -1)
            {
            selected.style.top = (y_pos - y_elem) + 'px';
            }
            else
            {
                selected.style.top = 0 + 'px';
            }
            
            if( (x_pos - x_elem + selected.offsetWidth) > document.querySelector("#desktop").offsetWidth )
            {
                selected.style.left = (document.querySelector("#desktop").offsetWidth - selected.offsetWidth) + 'px';
            }
            if( (y_pos - y_elem + selected.offsetHeight) > document.querySelector("#html").offsetHeight )
            {
                selected.style.top = (document.querySelector("#html").offsetHeight - selected.offsetHeight) + 'px';
            }
        }
    }
    
    function _destroy() {
        selected = null;
    }
    this.wind.onclick = function(e){ //för att nya rutor ska hamna bakom det man tryckte på
        this.style.zIndex = desktop.zindex++ + 1;
    };
    // Bind the functions...
    this.wind.querySelector('.topbar').onmousedown = function (e) {
        this.parentNode.style.zIndex = desktop.zindex++ + 2;
        _drag_init(this.parentNode, e);
        document.onmousemove = _move_elem; //fick flytta in dem. Fick hjälp av kristoffer. Hade jag dem utanför fungerade inte resize i firefox... varför? 
        document.onmouseup = _destroy;
        return false;
    };
    


 //   this.wind.querySelector('.topbar').onmousemove = _move_elem;
  //  this.wind.querySelector('.topbar').onmouseup = _destroy;

}

htmldesktop.Window.prototype.removeWindow = function(e){
   
        this.wind.parentNode.removeChild(this.wind);
    };