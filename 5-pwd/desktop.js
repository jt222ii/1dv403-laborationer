"use strict";
function Desktop(){
    this.zindex = 0;
    this.body = document.getElementById("desktop");
    this.pos = {x:10, y:10};
  
}
Desktop.prototype.addWindow = function(name, img, script){
    var addApp = new AddApp(this, name, img, script);
};