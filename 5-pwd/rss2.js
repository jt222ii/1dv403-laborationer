
"use strict";

htmldesktop.Rss2 = function(desktop, wind){
    var self = this;
    this.update(desktop, wind);
    setInterval(function(){
        self.update(desktop, wind);
    }
    , 120000);
    
}
htmldesktop.Rss2.prototype.update = function(desktop, wind){
    console.log("uppdaterar rss2");
        var loading = document.createElement("img");
        loading.src = "pictures/ajax-loader2.gif";
        loading.className = "loader";
        var self = this;
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
        xhr.open("GET", "http://homepage.lnu.se/staff/tstjo/labbyServer/rssproxy/?url="+escape("http://www.fz.se/rss/fznews_rss20.xml"), true);
        xhr.send(null);
};
