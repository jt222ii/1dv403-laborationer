"use strict";


var MessageBoard = {
    messages: [],
    numberOfMessages:  0,
    init:function()
    {
		var send = document.getElementById("button");
		send.onclick = MessageBoard.sendMessage;

        var entersend = document.getElementById("textarea");
        entersend.onkeypress=function(e){if (e.keyCode == 13 && !e.shiftKey){
                e.preventDefault();
                MessageBoard.sendMessage();
                }
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
        
        var text = document.createElement("p");
        text.innerHTML = MessageBoard.messages[input].getHTMLText();
        messagearea.appendChild(text);
        var element = document.getElementById("messagearea");
        element.scrollTop = element.scrollHeight;
 
    
    }
    
    
    
    
};
window.onload = MessageBoard.init;




