"use strict";


var MessageBoard = {
    messages: [],
    numberOfMessages:  0,
    init:function()
    {
		var send = document.getElementById("button");
		send.onclick = MessageBoard.sendMessage;
    },
    
    sendMessage: function(){
        var input = document.getElementById("textarea").value;
        MessageBoard.messages.push(new Message(input, new Date()));
       // alert(MessageBoard.messages[MessageBoard.numberOfMessages]);
        MessageBoard.numberOfMessages++;
        document.getElementById("numberOfMessages").innerHTML = "Antal Meddelanden: " + MessageBoard.numberOfMessages;
        var arrayslot = MessageBoard.messages.length-1;
        MessageBoard.RenderMessage(arrayslot);
    },
    RenderMessage: function(input){
        
        var text = document.createElement("p");
        text.innerHTML = MessageBoard.messages[input].getHTMLText();
        messagearea.appendChild(text);
 
    
    }
    
    
    
    
};
window.onload = MessageBoard.init;




