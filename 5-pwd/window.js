"use strict"

var selected = null;

function Window(desktop, name, img, Script){
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
    
    if((desktop.pos.y + this.wind.offsetHeight) < document.querySelector("#html").offsetHeight)
    {
    this.wind.style.top = desktop.pos.y + 'px';
    this.wind.style.left = desktop.pos.x + 'px';
    desktop.pos.y += 30; 
    desktop.pos.x += 30;
    }
    else
    {
        desktop.pos.y = 10;
        this.wind.style.top = desktop.pos.y + 'px';
        desktop.pos.y += 30; 
        this.wind.style.left = desktop.pos.x + 'px';
        desktop.pos.x += 30;
    }
    if((desktop.pos.x + this.wind.offsetWidth) < document.querySelector("#desktop").offsetWidth)
    {
        
    }
    

    var remove = this.wind.querySelector(".remove");
    remove.onclick = function(e){ 
        
        self.removeWindow();
    };
    
    if(Script !== undefined)
    {
    this.script = new Script(this.desktop, this);
    }
    
    
    
    //följande har jag tagit hjälp ifrån: http://jsfiddle.net/tovic/Xcb8d/light/ men fått göra modifikationer för att det ska fungera
    var x_pos = 0, y_pos = 0, // Stores x & y coordinates of the mouse pointer
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
    
    // Destroy the object when we are done
    function _destroy() {
        selected = null;
        console.log(selected);
    }
    
    // Bind the functions...
    this.wind.onmousedown = function (e) {
        
        this.style.zIndex = desktop.zindex++ + 2;
        _drag_init(this);
        return false;
    };
    


    this.wind.onmousemove = _move_elem;
    this.wind.onmouseup = _destroy;

}

Window.prototype.removeWindow = function(e){
   
        this.wind.parentNode.removeChild(this.wind);
    };