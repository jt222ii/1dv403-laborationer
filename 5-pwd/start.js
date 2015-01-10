"use strict"
window.onload = function(){
  var desktop = new Desktop();
  
  desktop.addWindow("bilder", "pictures/photo.svg", Gallery);
  desktop.addWindow("RSS - Barometern", "pictures/rss.svg", Rss);
  desktop.addWindow("RSS - FZ.se", "pictures/rss.svg", Rss2);
  desktop.addWindow("Memory", "pictures/game.svg", Memory)
  
  
  
};