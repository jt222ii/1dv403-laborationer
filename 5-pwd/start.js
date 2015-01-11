"use strict"
window.onload = function(){
  var desktop = new Desktop();
  
  var resetbackground = document.querySelector(".resetbackground");
  resetbackground.onclick = function(){
    document.body.style.backgroundImage = "url(pictures/bakgrund1.jpg)";
  };
  
  desktop.addWindow("bilder", "pictures/photo.svg", Gallery);
  desktop.addWindow("RSS - Barometern", "pictures/rssbarometern2.svg", Rss);
  desktop.addWindow("RSS - FZ.se", "pictures/rssfz2.svg", Rss2);
  desktop.addWindow("Memory", "pictures/game.svg", Memory);
  
  
  
};