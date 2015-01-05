"use strict"
function Desktop(){
    this.zindex = 0;
    this.body = document.getElementById("desktop");
  
}
Desktop.prototype.addWindow = function(name, img, script){
    var addApp = new AddApp(this, name, img, script);
};