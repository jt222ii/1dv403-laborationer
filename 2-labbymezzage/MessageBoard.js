"use strict";


var MessageBoard = {
    messages: [],
    numberOfMessages:  0,
    init:function()
    {
		var send = document.getElementById("button");
	//	send.onclick = MessageBoard.sendMessage;
        
        send.onclick = function(e){
            if (document.getElementById("textarea").value !== "")
            {MessageBoard.sendMessage()}
            else
            {e.preventDefault()}
        };
        
        var entersend = document.getElementById("textarea");
        entersend.onkeypress=function(e){if (e.keyCode == 13 && !e.shiftKey && document.getElementById("textarea").value !== ""){
                e.preventDefault();
                MessageBoard.sendMessage();
                }
                if (e.keyCode == 13 && document.getElementById("textarea").value === "")
                {e.preventDefault()}
        };
    },
    
    sendMessage: function(){
        var input = document.getElementById("textarea").value;
        MessageBoard.messages.push(new Message(input, new Date()));
       // alert(MessageBoard.messages[MessageBoard.numberOfMessages]);
        MessageBoard.numberOfMessages++;
        document.getElementById("numberOfMessages").innerHTML = "Antal Meddelanden: " + MessageBoard.numberOfMessages;
        document.getElementById('textarea').value = "";
        var arrayslot = MessageBoard.messages.length-1;
        MessageBoard.RenderMessage(arrayslot);
    },
    
    RenderMessage: function(input){
        var img = document.createElement("img");
        var timeimg = document.createElement("img");
        var timestamp = document.createElement("div");
        timestamp.id = "timestamp";
        var entry = document.createElement("section");
        entry.id = "buttonsandtime"

        
        timestamp.innerHTML = MessageBoard.messages[input].getDateText();
        //timestamp = document.createTextNode(MessageBoard.messages[input].getDateText());
        
        img.className = input;
        img.src = "delete.png";
        timeimg.className = "TimePicture"+input;
        timeimg.src = "Clock.png";
        
        var text = document.createElement("p");
        text.id = "textID"+input;
        text.innerHTML = MessageBoard.messages[input].getHTMLText();
        
        //text.appendChild(timeimg);
        text.appendChild(entry);
        entry.appendChild(img);
        entry.appendChild(timeimg);
        entry.appendChild(timestamp);
        //text.appendChild(img);
        //text.appendChild(timestamp);
        messagearea.appendChild(text);
        var element = document.getElementById("messagearea");
        element.scrollTop = element.scrollHeight;
        
        img.onclick = function(e){
            if (confirm("Radera detta meddelande?"))
            { 
               // alert(img.className);
                MessageBoard.numberOfMessages = MessageBoard.numberOfMessages -1;
               // MessageBoard.messages.splice(id, 1);
                text.parentNode.removeChild(text);
                document.getElementById("numberOfMessages").innerHTML = "Antal meddelanden: "+MessageBoard.numberOfMessages;
            }
        };
        timeimg.onclick = function(e){
            alert(MessageBoard.messages[input].getDate());
        };
    }
};
window.onload = MessageBoard.init;




