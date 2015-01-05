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
    
    
    
    //följande har jag tagit hjälp ifrån: http://jsfiddle.net/tovic/Xcb8d/light/ men fått göra modifikationer för att det ska fungera
    var selected = null, // Object of the element to be moved
        x_pos = 0, y_pos = 0, // Stores x & y coordinates of the mouse pointer
        x_elem = 0, y_elem = 0; // Stores top, left values (edge) of the element
    
    // Will be called when user starts dragging an element
    function _drag_init(elem) {
        // Store the object of the element which needs to be moved
        
        selected = elem;
        console.log(selected);
        x_elem = x_pos - selected.offsetLeft;
        y_elem = y_pos - selected.offsetTop;
    }
    
    // Will be called when user dragging an element
    function _move_elem(e) {
        x_pos = document.querySelector(".window") ? window.event.clientX : e.pageX;
        y_pos = document.querySelector(".window") ? window.event.clientY : e.pageY;
        if (selected !== null) {
            selected.style.left = (x_pos - x_elem) + 'px';
            selected.style.top = (y_pos - y_elem) + 'px';
        }
    }
    
    // Destroy the object when we are done
    function _destroy() {
        selected = null;
            console.log(selected);
    }
    
    // Bind the functions...
    this.wind.querySelector('.topbar').onmousedown = function () {
        this.parentNode.style.zIndex = desktop.zindex++;
        _drag_init(this.parentNode);
        return false;
    };

    this.wind.querySelector('.topbar').onmousemove = _move_elem;
    this.wind.querySelector('.topbar').onmouseup = _destroy;

}

Window.prototype.removeWindow = function(){
        this.wind.parentNode.removeChild(this.wind);
    };