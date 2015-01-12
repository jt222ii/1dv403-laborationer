"use strict"
var htmldesktop = {};

window.onload = function(){
  var desktop = new htmldesktop.Desktop();
  

  
  desktop.addWindow("bilder", "pictures/photo.svg", htmldesktop.Gallery);
  desktop.addWindow("RSS - Barometern", "pictures/rssbarometern2.svg", htmldesktop.Rss);
  desktop.addWindow("RSS - FZ.se", "pictures/rssfz2.svg", htmldesktop.Rss2);
  desktop.addWindow("Memory", "pictures/game.svg", htmldesktop.Memory);

};