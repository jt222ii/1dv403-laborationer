"use strict";
htmldesktop.Rss = function(desktop, wind){
    var self = this;
    this.update(desktop, wind);
    setInterval(function(){
        self.update(desktop, wind);
    }
    , 120000);
}
htmldesktop.Rss.prototype.update = function(desktop, wind){
    console.log("uppdaterar rss1");
        var loading = document.createElement("img");
        loading.src = "pictures/ajax-loader2.gif";
        loading.className = "loader";
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function(){
            if(xhr.readyState === 4 && xhr.status === 200)
            {
                var response = xhr.responseText;
                wind.maincontent.innerHTML = response;
            }
            else
            {
                wind.maincontent.appendChild(loading);
            }
        };
        xhr.open("GET", "http://homepage.lnu.se/staff/tstjo/labbyServer/rssproxy/?url="+escape("http://www.barometern.se/feed"), true);
        xhr.send(null);
};
